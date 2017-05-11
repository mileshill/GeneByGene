import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { SamplesComponent } from './components/samples/samples.component';
import { UsersComponent } from './components/users/users.component';
import { AboutComponent } from './components/about/about.component';

// Route Configuration
export const routes: Routes = [
    {path: 'samples', component: SamplesComponent},
    {path: '', redirectTo: '/samples', pathMatch: 'full'},
    {path: 'users', component: UsersComponent},
    {path: 'about', component: AboutComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);