import { Widget, IWidget } from '../Widget';
import { ViewChild } from '@angular/core';

import * as kpiTemp from '../kpiTemps';

export interface IKPIWidget extends IWidget {
    
}

export class KPIWidget extends Widget {
    private requestOptions = kpiTemp.REQUEST_OPTIONS;

    constructor(
        public treeService: kpiTemp.TreeConfigService,
        public apiServer: kpiTemp.ApiServer,
        public translate: kpiTemp.TranslateService,
        public dialogService: kpiTemp.DialogService,
    ) {
        super();
    }

    // tree -- 开始
    @ViewChild('dataSetTree') tree: kpiTemp.TreeComponent;
    treeOptions: any = new TreeConfig();
    searchObservable: kpiTemp.Observable<any>;

    // 初始化展开树
    initializedTree() {
        this.tree.treeModel.expandAll();
    }

    // 编辑
    editNode(node?: kpiTemp.TreeNode, event?) {
        if(!node && !this.treeService.checkTreeNode('edit', this.tree)) {
            return;
        }
        if(event) {
            this.tree.treeModel.setActiveNode(node, node);
        }
        this.optFlag = 'edit';
        // 获取选择的值
        this.curKPI = this.getSelectedKPI(node);

        this.defaultWidget(this.curKPI.widgetIds);
        console.log(this.curKPI.widgetIds);
    };
    // 初始化编辑下方拖动的widget
    defaultWidget(kpiWid) {
        this.curKPIWidgets = [];
        let idxList = {};
        _.map(this.allWidget, (item, key) => {
            item.isCollapsed = false;
            let idx = kpiWid.indexOf(item.id);
            if(idx + 1) {
                idxList[idx] = item;
            }
        })
        for(let idx in idxList) {
            this.curKPIWidgets.push(idxList[idx]);
        }
        this.defaultRenderChart();
    };
    // 初始化widget的数据格式-因为要使用widget-board组件
    renderChart;
    defaultRenderChart() {
        this.renderChart = [];
        _.map(this.curKPIWidgets, (item) => {
            this.renderChart.push(
                {
                    widget: item,
                    name: item.name
                }
            )
        })
    }
    datasourceList
    curKPI: any = {};
    // 获取kpilist
    KPIList;
    getKPIList(callback?) {
        let self = this;
        this.apiServer.get("find-kpi", null, this.requestOptions).subscribe(function (response) {
            self.KPIList = response;
            if (callback) {
                callback();
            }
            self.searchNode();
        });
    };

    // 从后端的kpi分组数据和kpi列表数据组成tree
    keywords;
    originalData = [];
    searchNode() {
        let self = this;
        //map KPIList to list (add datasetName and datasourceName)
        if(!this.KPIList) {
            return;
        }
        let defaultIndex = 0;
        let list = this.KPIList.map(function (w, key) {
            if(w.kpiId == self.saveId) {
                defaultIndex = key;
            }
            return {
                "id": w.kpiId,
                "name": w.kpiName || w.description || 'defaultName',
                "categoryName": w.categoryName || self.datasourceList[0].name || 'defaultName'
            };
        });

        if(defaultIndex) {
            list.unshift(list[defaultIndex]);
            list.splice(defaultIndex + 1, 1);
        }

    
        // 搜索字段初始化
        if (this.keywords) {
            this.originalData = this.treeService.buildTree(list.filter((item: any) => {
                return item.name.indexOf(self.keywords)>-1
            }));
        }else{
            this.originalData = this.treeService.buildTree(list);
        }

        // 异步初始化tree
        setTimeout(() => {
            if (this.tree && this.tree.treeModel) {
                this.tree.treeModel.update();
                this.tree.treeModel.expandAll();
                let node = $.extend($('.node-content-wrapper')[0], list[0]);
                this.tree.treeModel.setActiveNode(node, list[0]);
                self.editNode(list[0]);
                self.saveId = null;
            }
        }, 500)
    };

    // 获取到当前的kpi分组
    loadDatasource() {
        let self = this;
        this.apiServer.get("categories", null, this.requestOptions).subscribe(function (response) {
            self.datasourceList = response;
            // 获取kpi数据
            self.getKPIList();
        });
    }
    // tree -- 结束

    // 编辑 -- 开始
    // 获取选择的KPI
    getSelectedKPI(node?: kpiTemp.TreeNode) {
        let selectedNode = node || this.tree.treeModel.getActiveNode();

        return this.KPIList.filter((ds: any) => {
            return ds.kpiId === selectedNode.id;
        })[0];
    };
    // 加载全部的widget
    allWidget;
    loadWidget(callback) {
        let self = this;
        this.apiServer.get('widgets-all', null, this.requestOptions).subscribe((res: any) => {
            self.allWidget = res;

            if(callback && typeof callback == 'function') {
                callback();
            }
        })
    }
    // 拖动
    dropSuccessData;
    dropSuccess() {
        // 拖动成功后触发保存功能
        // if(this.dropSuccessData && this.dropSuccessData != JSON.stringify(this.curKPIWidgets)) {
        //     this.saveKPI();
        // }
        console.log(this.curKPIWidgets);
        if(this.dropSuccessData != JSON.stringify(this.curKPIWidgets)) {
            this.dropSuccessData = JSON.stringify(this.curKPIWidgets);
            this.defaultRenderChart();
        }
    }
    optFlag;
    // 是否编辑KPI说明
    editTag = false;
    // 是否展示编辑的
    validate;
    // 拖动的widget
    curKPIWidgets;
    // 获取保存的id
    saveId;
    // 保存
    saveKPI() {
        this.validate = true;
        let a = [];
        let self = this;
        _.map(this.curKPIWidgets, (item) => {
            a.push(item.id);
        })
        this.curKPI.widgetIds = a;
        delete this.curKPI.config;
        delete this.curKPI.expressions;
        delete this.curKPI.filterGroups;
        delete this.curKPI.query;
        this.saveId = this.curKPI.kpiId;
        if(!this.curKPI.description) {
            return false;
        }
        this.apiServer.post('update-kpi', {dataJson: JSON.stringify(this.curKPI)}, this.requestOptions).subscribe((res: any) => {
            self.load();
            self.dialogService.alert(
                self.translate.instant("COMMON.SUCCESS"),
                "modal-success"
            );
        })
    }
    // 编辑 -- 结束
    load() {
        // 获取树
        this.loadDatasource();

        // 获取所有widget
        this.loadWidget(null);

        this.editTag = false;
        this.dropSuccessData = null;
    }
    // 预览
    checkBeforPreviewShow = false;
    ngOnInit() {
        let self = this;
        this.treeOptions.actionMapping = {
            mouse: {
                dblClick: (tree, node, $event) => {
                    if (!node.hasChildren) {
                        self.editNode(node, $event);
                    }
                },
                click: (tree, node, $event) => {
                    if (!node.hasChildren) {
                        self.editNode(node, $event);
                    }
                }
            }
        };

        // 搜索初始化
        this.searchObservable = new kpiTemp.BehaviorSubject<string>(this.keywords).pipe(
            kpiTemp.debounceTime(10),
            kpiTemp.distinctUntilChanged()
        );
        this.searchObservable.subscribe((keywords: string) => {
            self.searchNode();
        });

        // 数据初始化
        this.load();
    }
}