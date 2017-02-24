import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SysDashboardComponent } from './@dashboard/sys-dashboard.component';


const sysRoutes: Routes = [
    { path: '', component: SysDashboardComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(sysRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class SysRoutingModule {}