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

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        MapRoutesModule,
        MapUiModule,
        NgZorroAntdModule
    ],
    declarations: [
        MapComponent,
        MapBaseComponent,
        MapSearchComponent,
        MapInformationPipe,
        MapDirectiveDirective,
        GmapComponent
    ]
})

export class MapModule { }
