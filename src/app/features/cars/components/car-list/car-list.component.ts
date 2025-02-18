import { Component, inject, output } from '@angular/core';
import { Store } from '@ngrx/store';
import { toSignal } from '@angular/core/rxjs-interop';
import { CarInterface } from '@models/CarInterface';
import { AppState } from '@stateTypes/AppState';
import { carsSelector } from '@store/cars/cars.selectors';

import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ButtonGroupModule } from 'primeng/buttongroup';

@Component({
  selector: 'app-car-list',
  imports: [
    TableModule,
    ButtonModule,
    ButtonGroupModule
  ],
  templateUrl: './car-list.component.html',
  styleUrl: './car-list.component.scss'
})
export class CarListComponent {

  private store = inject(Store<AppState>);

  add = output<void>();
  edit = output<CarInterface>();
  delete = output<CarInterface>();

  public cars = toSignal<CarInterface[]>(this.store.select(carsSelector));
  public selectedCar: CarInterface | undefined;

  onAddCar() {
    this.add.emit();
  }

  onDetailCar() {
    this.edit.emit(this.selectedCar!);
    this.selectedCar = undefined;
  }

  onDeleteCar() {
    this.delete.emit(this.selectedCar!);
    this.selectedCar = undefined;
  }
}
