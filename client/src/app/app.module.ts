import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { OverviewComponent } from './pages/overview/overview.component';
import { ConfigurationComponent } from './pages/configuration/configuration.component';

@NgModule({
    declarations: [
        AppComponent,
        SideNavComponent,
        DashboardComponent,
        OverviewComponent,
        ConfigurationComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
