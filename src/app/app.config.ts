import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { CarEffects } from '@store/cars/cars.effects';
import { loadingCars } from '@store/cars/cars.reducers';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
    providers: [
        provideHttpClient(withInterceptorsFromDi()),
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
        provideAnimationsAsync(),
        providePrimeNG({
            theme: {
                preset: Aura
            }
        }),
        provideStore({
            cars: loadingCars
        }),
        provideEffects([
            CarEffects
        ])
    ]
};
