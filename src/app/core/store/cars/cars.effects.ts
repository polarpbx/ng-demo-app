import { Injectable, inject } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store, select } from '@ngrx/store';
import { carsSelector } from '@store/cars/cars.selectors';
import { catchError, map, mergeMap, of, switchMap, take, tap } from "rxjs";
import * as CarActions from './cars.actions'
import { CarInterface } from "@models/CarInterface";
import { CarService } from "@services/car.service";
import { ResponseErrorInterface } from "@models/ResponseErrorInterface";
import { MessageService } from "primeng/api";

@Injectable({
    providedIn: "root"
})
export class CarEffects {
    private actions$ = inject(Actions);
    private carService = inject(CarService);
    private store = inject(Store);
    private messageService = inject(MessageService)

    getCars$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CarActions.getCars),
            mergeMap(() => {
                return this.carService.getCars().pipe(
                    map((cars: CarInterface[]) => CarActions.getCarsSuccess({ cars })),
                    catchError((error: ResponseErrorInterface) => {
                        return of(CarActions.getCarsFailure(error));
                    })
                );
            })
        )
    )

    getCar$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CarActions.getCar),
            mergeMap(({ id }) => {
                return this.store.pipe(
                    select(carsSelector),
                    take(1),
                    switchMap((cars) => {
                        let car = cars.find((car: CarInterface) => car.id == id);
                        if (car) {
                            return of(CarActions.getCarSuccess({ car }));
                        } else {
                            return this.carService.getCar(id).pipe(
                                map((car: CarInterface) => CarActions.getCarSuccess({ car })),
                                catchError((error: ResponseErrorInterface) =>
                                    of(CarActions.getCarFailure(error))
                                )
                            );
                        }
                    })
                );
            }),
        )
    )

    setCar$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CarActions.setCar),
            mergeMap(({ car }) => {
                return this.carService.setCar(car).pipe(
                    tap(() => {
                        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data was added' });
                    }),
                    map((car: CarInterface) => CarActions.setCarSuccess({ car })),
                    catchError((error: ResponseErrorInterface) => {
                        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Can\'t add data' });
                        return of(CarActions.setCarFailure(error))
                    })
                );
            })
        )
    )

    updateCar$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CarActions.updateCar),
            mergeMap(({ car }) => {
                return this.carService.updateCar(car).pipe(
                    tap(() => {
                        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data was updated' });
                    }),
                    map((car: CarInterface) => CarActions.updateCarSuccess({ car })),
                    catchError((error: ResponseErrorInterface) => {
                        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Can\'t update data' });
                        return of(CarActions.updateCarFailure(error))
                    })
                );
            })
        )
    )

    deleteCar$ = createEffect(() =>
        this.actions$.pipe(
            ofType(CarActions.deleteCar),
            mergeMap(({ car }) => {
                return this.carService.deleteCar(car.id as string).pipe(
                    tap(() => {
                        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Data was deleted' });
                    }),
                    map((car: CarInterface) => CarActions.deleteCarSuccess({ car })),
                    catchError((error: ResponseErrorInterface) => {
                        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Can\'t delete data' });
                        return of(CarActions.deleteCarFailure(error))
                    })
                );
            })
        )
    )
}