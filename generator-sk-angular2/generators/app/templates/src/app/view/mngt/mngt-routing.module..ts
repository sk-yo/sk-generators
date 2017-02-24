import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MngtDashboardComponent } from './@dashboard/mngt-dashboard.component';


const mgntRoutes: Routes = [
    { path: '', component: MngtDashboardComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(mgntRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class MngtRoutingModule { }