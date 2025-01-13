import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PointsComponent } from './components/points/points.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },

    {
        path: 'anotador',
        component: PointsComponent
    },
    {
        path: '',
        redirectTo:'home',
        pathMatch: 'full'
    }
];
