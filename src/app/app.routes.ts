import { Routes } from '@angular/router';
import { CarsPageComponent } from './features/cars/pages/cars-page/cars-page.component';
import { CarCreatePageComponent } from './features/cars/pages/car-create-page/car-create-page.component';
import { CarDetailPageComponent } from './features/cars/pages/car-detail-page/car-detail-page.component';

export const routes: Routes = [
    {
        path: 'cars',
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'list'
            },
            {
                path: 'list',
                component: CarsPageComponent
            },
            {
                path: 'details/:id',
                component: CarDetailPageComponent
            },
            {
                path: 'create',
                component: CarCreatePageComponent,
            },
        ],
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'cars'
    },
];
