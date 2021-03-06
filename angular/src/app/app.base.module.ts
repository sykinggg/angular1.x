import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
    exports: [
        BrowserModule, // 基础
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        HttpClientModule,
        // InMemoryWebApiModule.forRoot(InMemoryDataService), // 前端内存服务
        NoopAnimationsModule, // UI框架
    ]
})
export class AppBaseModule { }
