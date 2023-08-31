import { ContentComponent } from '@/app/containers/content/content.component';
import { HomePageModule } from '@/app/pages/home-page/home-page.module';
import {
    ProductPageModule,
} from '@/app/pages/product-page/product-page.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
    imports     : [
        HomePageModule,
        ProductPageModule,
    ],
    declarations: [
        ContentComponent,
    ],
    exports     : [
        HomePageModule,
        ProductPageModule,
        ContentComponent,
    ],
})
export class ContentModule {
}