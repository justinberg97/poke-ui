import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModel } from '@angular/forms';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    }
];
