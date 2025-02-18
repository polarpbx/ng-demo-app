import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { CarInterface } from '@models/CarInterface';
import { Observable } from 'rxjs';
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private url: string = environment.API_ENDPOINT + `cars`;
  private http = inject(HttpClient);

  getCars(): Observable<CarInterface[]> {
    return this.http.get<CarInterface[]>(this.url)
  }

  getCar(id: string): Observable<CarInterface> {
    return this.http.get<CarInterface>(this.url + `/${id}`);
  }

  deleteCar(id: string) {
    return this.http.delete<CarInterface>(this.url + `/${id}`);
  }

  updateCar(car: CarInterface) {
    return this.http.put<CarInterface>(this.url + `/${car.id}`, car);
  }

  setCar(car: CarInterface) {
    return this.http.post<CarInterface>(this.url, car);
  }

}
