import { Routes } from '@angular/router';
import { CarsPageComponent } from './features/cars/pages/cars-page/cars-page.component';
import { CarCreatePageComponent } from './features/cars/pages/car-create-page/car-create-page.component';
import { CarDetailPageComponent } from './features/cars/pages/car-detail-page/car-detail-page.component';
import { createFeature, provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { loadingCars } from '@store/cars/cars.reducers';
import { CarEffects } from '@store/cars/cars.effects';

export const routes: Routes = [
    {
        path: 'cars',
        providers: [
            provideState(createFeature({
                name: 'cars',
                reducer: loadingCars
            })),
            provideEffects([CarEffects])
        ],
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
