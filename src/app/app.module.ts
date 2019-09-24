import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { GridResponsiveComponent } from './components/grid-responsive/grid-responsive.component';
import { CascaderLazyloadComponent } from './components/cascader-lazyload/cascader-lazyload.component';
import { DatastableComponent } from './components/datastable/datastable.component';
import { BtnSizeComponent } from './components/btn-size/btn-size.component';
import { TableCustomComponent } from './components/table-custom/table-custom.component';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    GridResponsiveComponent,
    CascaderLazyloadComponent,
    DatastableComponent,
    BtnSizeComponent,
    TableCustomComponent,

  ],
  imports: [
    BrowserModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule { }
