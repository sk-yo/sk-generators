import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitialDashBoardComponent } from './initial-dash-board/initial-dash-board.component';


const routes: Routes = [
    {path: '', component: InitialDashBoardComponent}
];

export const mgntRoutes: ModuleWithProviders = RouterModule.forChild(routes);