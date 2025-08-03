import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EnvidoComponent } from './components/envido/envido.component';
import { AnotadorComponent } from './components/anotador/anotador.component';
import { ValoresComponent } from './components/valores/valores.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '',
        redirectTo:'home',
        pathMatch: 'full'
    },
    {
        path: 'envido',
        component: EnvidoComponent

    },
    {
        path: 'anotador',
         component: AnotadorComponent
    },
    {
        path: 'valores',
        component: ValoresComponent

    }
    
    
];
