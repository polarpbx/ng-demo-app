import { Component, OnChanges, SimpleChanges, input, output } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { InputTextModule } from 'primeng/inputtext';
import { DatePickerModule } from 'primeng/datepicker';
import { InputNumberModule } from 'primeng/inputnumber';
import { FloatLabel } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { ButtonGroupModule } from 'primeng/buttongroup';
import { CarInterface } from '@models/CarInterface';

@Component({
  selector: 'app-car-item',
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    DatePickerModule,
    InputNumberModule,
    FloatLabel,
    ButtonModule,
    ButtonGroupModule
  ],
  templateUrl: './car-item.component.html',
  styleUrl: './car-item.component.scss'
})
export class CarItemComponent implements OnChanges {

  car = input<CarInterface>();

  save = output<CarInterface>();
  back = output<void>();

  public carForm = new FormGroup({
    id: new FormControl({ value: '', disabled: true }),
    make: new FormControl('', [Validators.required]),
    model: new FormControl('', [Validators.required]),
    color: new FormControl('', [Validators.required]),
    engine: new FormControl('', [Validators.required]),
    price: new FormControl(0, [Validators.required, Validators.min(1)]),
    year: new FormControl(new Date(), [Validators.required])
  });

  onSubmit() {
    if (this.carForm.valid) {
      this.save.emit(this.carForm.getRawValue() as unknown as CarInterface);
    } else {
      console.log('Form Invalid');
    }
  }

  onBack() {
    this.back.emit();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['car'] && changes['car'].currentValue) {
      this.populateForm(changes['car'].currentValue);
    }
  }

  populateForm(car: CarInterface) {
    this.carForm.setValue(car as any)
    this.carForm.get('year')!.setValue(new Date(car.year!));
  }

}
