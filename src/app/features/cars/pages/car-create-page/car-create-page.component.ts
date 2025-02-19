import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CarItemComponent } from '@features/cars/components/car-item/car-item.component';
import { CarInterface } from '@models/CarInterface';
import { setCar } from '@store/cars/cars.actions';
import { BlockUIModule } from 'primeng/blockui';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { toSignal } from '@angular/core/rxjs-interop';
import { isLoadingSelector } from '@store/cars/cars.selectors';

@Component({
  imports: [
    CarItemComponent,
    BlockUIModule,
    ProgressSpinnerModule
  ],
  templateUrl: './car-create-page.component.html',
  styleUrl: './car-create-page.component.scss'
})
export class CarCreatePageComponent {
  private router = inject(Router);
  private store = inject(Store);

  isLoadingSelector = toSignal<boolean>(this.store.select(isLoadingSelector));

  redirectToList() {
    this.router.navigate(["cars", "list"]);
  }

  saveCar(car: CarInterface) {
    this.store.dispatch(setCar({ car }));
    this.router.navigate(["cars", "list"]);
  }

}
