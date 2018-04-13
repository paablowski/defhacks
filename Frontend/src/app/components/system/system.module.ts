//import { BrowserModule } from '@angular/platform-browser';
import { MaterializeModule } from 'angular2-materialize';
import { NgModule } from '@angular/core';

import { SystemComponent } from './system.component';
import { routing, appRoutingProviders } from './system.routing';
import { SystemGuard } from '../../guards/SystemGuard';

@NgModule({
    declarations: [
        SystemComponent
    ],
    imports: [
        routing
    ],
    providers: [
        appRoutingProviders,
        SystemGuard
    ]
})
export class SystemModule { }