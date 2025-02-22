import { Component, effect, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { CarItemComponent } from '@features/cars/components/car-item/car-item.component';
import { CarInterface } from '@models/CarInterface';
import { Store } from '@ngrx/store';
import { getCar, updateCar } from '@store/cars/cars.actions';
import { carsSelector, isLoadingSelector } from '@store/cars/cars.selectors';
import { BlockUIModule } from 'primeng/blockui';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { map } from 'rxjs';

@Component({
  imports: [
    CarItemComponent,
    BlockUIModule,
    ProgressSpinnerModule
  ],
  templateUrl: './car-detail-page.component.html',
  styleUrl: './car-detail-page.component.scss'
})
export class CarDetailPageComponent {
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private store = inject(Store);

  id = this.route.snapshot.paramMap.get('id');
  car = toSignal<CarInterface | undefined>(this.store.select(carsSelector).pipe(map((cars) => cars.find((car) => car.id === this.id))));
  isLoadingSelector = toSignal<boolean>(this.store.select(isLoadingSelector));

  constructor() {
    if (this.id) {
      this.store.dispatch(getCar({ id: this.id }));
    }
  }

  redirectToList() {
    this.router.navigate(["cars", "list"]);
  }

  saveCar(car: CarInterface) {
    this.store.dispatch(updateCar({ car }));
    this.router.navigate(["cars", "list"]);
  }
}
