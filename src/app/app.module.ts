import { AppRoutingModule } from '@/app/app-routing.module';
import { ContentModule } from '@/app/containers/content/content.module';
import { HeaderComponent } from '@/app/containers/header/header.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
    ],
    imports     : [
        BrowserModule,
        ContentModule,
        AppRoutingModule,
    ],
    providers   : [],
    bootstrap   : [ AppComponent ],
})
export class AppModule {
}
