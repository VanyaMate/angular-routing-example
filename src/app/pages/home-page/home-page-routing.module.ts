import { HomePageComponent } from '@/app/pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    {
        path: '', component: HomePageComponent, pathMatch: 'full',
    },
];

@NgModule({
    declarations: [ HomePageComponent ],
    imports     : [ RouterModule.forChild(routes) ],
    exports     : [ RouterModule ],
})
export class HomePageRoutingModule {
}