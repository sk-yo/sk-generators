import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const mgntRoutes: Routes = [

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