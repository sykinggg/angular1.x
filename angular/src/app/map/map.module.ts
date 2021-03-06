import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MapRoutesModule } from "./map.routes.module";
import { MapUiModule } from "./map.ui.module";
import { NgZorroAntdModule } from "ng-zorro-antd";

import { MapComponent } from './map.component';
import { MapBaseComponent } from './map-base/map-base.component';
import { MapSearchComponent } from './map-search/map-search.component';

import { MapInformationPipe } from '../pipe/map-information/map-information.pipe';
import { MapDirectiveDirective } from '../directive/map-directive/map-directive.directive';
import { GmapComponent } from './gmap/gmap.component';
import { LayoutModule } from '../layout/layout.module';
import { AMapDemoComponent } from './a-map-demo/a-map-demo.component';
import { AMapModule } from './a-map/a-map.module';

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        MapRoutesModule,
        MapUiModule,
        NgZorroAntdModule,
        LayoutModule,
        AMapModule
    ],
    declarations: [
        MapComponent,
        MapBaseComponent,
        MapSearchComponent,
        MapInformationPipe,
        MapDirectiveDirective,
        GmapComponent,
        AMapDemoComponent
    ]
})

export class MapModule { }
