import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { ConfigurationComponent } from './pages/configuration/configuration.component';


const routes: Routes = [
    {path:"dashboard", component: DashboardComponent},
    {path:"overview", component:OverviewComponent},
    {path:"configuration", component:ConfigurationComponent},
    {path:"", redirectTo:"/dashboard", pathMatch:"full" }

];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
