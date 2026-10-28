import { Routes } from '@angular/router';
import { CarrosList } from './components/carros-list/carros-list';
import { Dashboard } from './components/dashboard/dashboard';
import { Navbar } from './components/navbar/navbar';
import { Home } from './components/home/home';

export const routes: Routes = [
    {path: "", redirectTo: "dashboard", pathMatch: "full"},
    {path: "dashboard", component: Dashboard},
    {path: "carros", component: CarrosList},
    {path: "navbar", component: Navbar},
    {path: "home", component: Home}
];
