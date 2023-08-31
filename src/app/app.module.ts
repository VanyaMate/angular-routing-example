import { AppRoutingModule } from '@/app/app-routing.module';
import { ContentModule } from '@/app/containers/content/content.module';
import { HeaderComponent } from '@/app/containers/header/header.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { ru_RU } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import ru from '@angular/common/locales/ru';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


registerLocaleData(ru);


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
    ],
    imports     : [
        BrowserModule,
        ContentModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        NzPageHeaderModule,
        NzBreadCrumbModule,
    ],
    providers   : [
        { provide: NZ_I18N, useValue: ru_RU },
    ],
    bootstrap   : [ AppComponent ],
})
export class AppModule {
}
