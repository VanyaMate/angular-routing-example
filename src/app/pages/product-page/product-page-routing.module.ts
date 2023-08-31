import {
    ProductDetailsPageComponent,
} from '@/app/pages/product-page/product-details-page/product-details-page.component';
import {
    ProductListPageComponent,
} from '@/app/pages/product-page/product-list-page/product-list-page.component';
import {
    ProductPageComponent,
} from '@/app/pages/product-page/product-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    {
        path     : 'products',
        component: ProductPageComponent,
        children : [
            {
                path     : '',
                component: ProductListPageComponent,
                pathMatch: 'full',
            },
            {
                path     : ':id',
                component: ProductDetailsPageComponent,
            },
        ],
    },
];

@NgModule({
    declarations: [
        ProductPageComponent,
        ProductListPageComponent,
        ProductDetailsPageComponent,
    ],
    imports     : [ RouterModule.forChild(routes) ],
    exports     : [ RouterModule ],
})
export class ProductPageRoutingModule {
}