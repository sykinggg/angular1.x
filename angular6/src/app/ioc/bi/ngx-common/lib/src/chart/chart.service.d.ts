import { Subject } from 'rxjs';
import { DataService } from 'app/pack/common/src/index';
import { ChartLineService } from './chartLine.service';
import { ChartTableService } from './chartTable.service';
import { ChartPieService } from './chartPie.service';
import { ChartKpiService } from './chartKpi.service';
import { ChartFunnelService } from './chartFunnel.service';
import { ChartSankeyService } from './chartSankey.service';
import { ChartRadarService } from './chartRadar.service';
import { ChartMapService } from './chartMap.service';
import { ChartScatterService } from './chartScatter.service';
import { ChartGaugeService } from './chartGauge.service';
import { ChartWordCloudService } from './chartWordCloud.service';
import { ChartTreeMapService } from './chartTreeMap.service';
import { ChartAreaMapService } from './chartAreaMap.service';
import { ChartHeatMapCalendarService } from './chartHeatMapCalendar.service';
import { ChartHeatMapTableService } from './chartHeatMapTable.service';
import { ChartLiquidFillService } from './chartLiquidFill.service';
import { ChartContrastService } from './chartContrast.service';
import { ChartChinaMapService } from './chartChinaMap.service';
import { ChartChinaMapBMapService } from './chartChinaMapBmap.service';
import { ChartRelationService } from './chartRelation.service';
export declare class ChartService {
    private chartdataService;
    private chartLineService;
    private chartTableService;
    private chartPieService;
    private chartKpiService;
    private chartFunnelService;
    private chartSankeyService;
    private chartRadarService;
    private chartMapService;
    private chartScatterService;
    private chartGaugeService;
    private chartWordCloudService;
    private chartTreeMapService;
    private chartAreaMapService;
    private chartHeatMapCalendarService;
    private chartHeatMapTableService;
    private chartLiquidFillService;
    private chartContrastService;
    private chartChinaMapService;
    private chartChinaMapBMapService;
    private chartRelationService;
    constructor(chartdataService: DataService, chartLineService: ChartLineService, chartTableService: ChartTableService, chartPieService: ChartPieService, chartKpiService: ChartKpiService, chartFunnelService: ChartFunnelService, chartSankeyService: ChartSankeyService, chartRadarService: ChartRadarService, chartMapService: ChartMapService, chartScatterService: ChartScatterService, chartGaugeService: ChartGaugeService, chartWordCloudService: ChartWordCloudService, chartTreeMapService: ChartTreeMapService, chartAreaMapService: ChartAreaMapService, chartHeatMapCalendarService: ChartHeatMapCalendarService, chartHeatMapTableService: ChartHeatMapTableService, chartLiquidFillService: ChartLiquidFillService, chartContrastService: ChartContrastService, chartChinaMapService: ChartChinaMapService, chartChinaMapBMapService: ChartChinaMapBMapService, chartRelationService: ChartRelationService);
    render(containerDom: any, widget: any, optionFilter?: any, reload?: any, persist?: any, relations?: any): Subject<any>;
    realTimeRender(realTimeTicket: any, widget: any, optionFilter?: any, widgetWraper?: any, isParamEvent?: boolean): void;
    getChartServices(chartConfig: any): ChartLineService | ChartTableService | ChartPieService | ChartKpiService | ChartFunnelService | ChartSankeyService | ChartRadarService | ChartMapService | ChartScatterService | ChartGaugeService | ChartWordCloudService | ChartTreeMapService | ChartAreaMapService | ChartHeatMapCalendarService | ChartHeatMapTableService | ChartLiquidFillService | ChartContrastService | ChartChinaMapService | ChartChinaMapBMapService | ChartRelationService;
}
