import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainLayoutComponent } from './component/layout/main-layout/main-layout.component';

const appRoutes: Routes = [
    {
    path: '',
    component: MainLayoutComponent,
    children: [
        { path: '', loadChildren: './view/mngt/mngt.module#MngtModule' },
        { path: 'sys', loadChildren: './view/sys/sys.module#SysModule' },
        { path: 'user', loadChildren: './view/user/user.module#UserModule' },
    ]
}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }