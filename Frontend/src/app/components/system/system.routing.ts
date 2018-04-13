import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { SystemComponent } from './system.component';
import { SystemGuard } from '../../guards/SystemGuard';

const appRoutes: Routes = [
    {
        path: 'system',
        component: SystemComponent,
        canActivate: [SystemGuard],
        //children: []
    }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);