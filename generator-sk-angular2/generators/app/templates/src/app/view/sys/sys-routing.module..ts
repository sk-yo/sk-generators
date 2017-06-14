import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const sysRoutes: Routes = [

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