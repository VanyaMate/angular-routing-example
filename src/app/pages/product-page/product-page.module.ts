import {
    ProductPageRoutingModule,
} from '@/app/pages/product-page/product-page-routing.module';
import { NgModule } from '@angular/core';


@NgModule({
    imports: [
        ProductPageRoutingModule,
    ],
    exports: [
        ProductPageRoutingModule,
    ],
})
export class ProductPageModule {
}