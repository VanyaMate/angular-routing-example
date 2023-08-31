import {
    HomePageRoutingModule,
} from '@/app/pages/home-page/home-page-routing.module';
import { NgModule } from '@angular/core';


@NgModule({
    imports: [ HomePageRoutingModule ],
    exports: [ HomePageRoutingModule ],
})
export class HomePageModule {
}