import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDashboardComponent } from './@dashboard/user-dashboard.component';

const userRoutes: Routes = [
    { path: '', component: UserDashboardComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(userRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class UserRoutingModule {}