import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

    private apiUrl = 'http://127.0.0.1:666/map/';

    constructor(
        private http: HttpClient,
        private message: NzMessageService
    ) { }

    ngOnInit() {
    }

    // 地理编码
    reverseGeocoding() {
        this.http.post(this.apiUrl + 'reverseGeocoding', null).subscribe(res => {
            console.log(res);
        })
    }
    // 逆地理编码
    reverseRegeocoding() {
        this.http.post(this.apiUrl + 'reverseRegeocoding', null).subscribe(res => {
            console.log(res);
        })
    }
    // 步行路径规划
    directionWalking() {
        this.http.post(this.apiUrl + 'directionWalking', null).subscribe(res => {
            console.log(res);
        })
    }
    // 公交路径规划
    directionTransitIntegrated() {
        this.http.post(this.apiUrl + 'directionTransitIntegrated', null).subscribe(res => {
            console.log(res);
        })
    }
    // 驾车路径规划
    directionDriving() {
        this.http.post(this.apiUrl + 'directionDriving', null).subscribe(res => {
            console.log(res);
        })
    }
    // 骑行路径规划
    directionBicycling() {
        this.http.post(this.apiUrl + 'directionBicycling', null).subscribe(res => {
            console.log(res);
        })
    }
    // 货车路径规划
    directionTruck() {
        this.http.post(this.apiUrl + 'directionTruck', null).subscribe(res => {
            console.log(res);
        })
    }
    // 距离测量
    distance() {
        this.http.post(this.apiUrl + 'distance', null).subscribe(res => {
            console.log(res);
        })
    }
    // 行政区域查询
    configDistrict() {
        this.http.post(this.apiUrl + 'configDistrict', null).subscribe(res => {
            console.log(res);
        })
    }
    // 关键字搜索
    placeText() {
        this.http.post(this.apiUrl + 'placeText', null).subscribe(res => {
            console.log(res);
        })
    }
    // 周边搜索
    placeAround() {
        this.http.post(this.apiUrl + 'placeAround', null).subscribe(res => {
            console.log(res);
        })
    }
    // 多边形搜索
    placePolygon() {
        this.http.post(this.apiUrl + 'placePolygon', null).subscribe(res => {
            console.log(res);
        })
    }
    // ID查询
    placeDetail() {
        this.http.post(this.apiUrl + 'placeDetail', null).subscribe(res => {
            console.log(res);
        })
    }
    // IP定位
    v3Ip() {
        this.http.post(this.apiUrl + 'v3Ip', null).subscribe(res => {
            console.log(res);
        })
    }
    // 静态地图
    v3StaticmapUrl;
    v3Staticmap() {
        this.http.post(this.apiUrl + 'v3Staticmap', null).subscribe(res => {
            this.v3StaticmapUrl = res;
            console.log(res);
        })
    }
    // 坐标转换
    coordinateConvert() {
        this.http.post(this.apiUrl + 'coordinateConvert', null).subscribe(res => {
            console.log(res);
        })
    }
    // 天气查询
    weatherWeatherInfo() {
        this.http.post(this.apiUrl + 'weatherWeatherInfo', null).subscribe(res => {
            console.log(res);
        })
    }
    // 输入提示
    assistantInputtips() {
        this.http.post(this.apiUrl + 'assistantInputtips', null).subscribe(res => {
            console.log(res);
        })
    }
    // 支持交通态势的城市列表
    getStatusRectangleList() {
        this.http.get(this.apiUrl + 'getStatusRectangleList').subscribe(res => {
            console.log(res);
        })
    }
    // 矩形区域交通态势
    statusRectangle() {
        this.http.post(this.apiUrl + 'statusRectangle', null).subscribe(res => {
            console.log(res);
        })
    }
    // 圆形区域交通态势
    statusCircle() {
        this.http.post(this.apiUrl + 'statusCircle', null).subscribe(res => {
            console.log(res);
        })
    }
    // 指定线路交通态势
    statusRoad() {
        this.http.post(this.apiUrl + 'statusRoad', null).subscribe(res => {
            console.log(res);
        })
    }
    // 轨迹纠偏
    grasproadDriving() {
        this.http.post(this.apiUrl + 'grasproadDriving', null).subscribe(res => {
            console.log(res);
        })
    }
}
