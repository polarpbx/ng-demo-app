import { CarInterface } from "@models/CarInterface";
import { createAction, props } from "@ngrx/store";

/**
 * GET
 */

export const getCar = createAction(
    '[Cars] Get Car',
    props<{ id: string }>(),
);
export const getCarSuccess = createAction(
    '[Cars] Get Car success',
    props<{ car: CarInterface }>()
);
export const getCarFailure = createAction(
    '[Cars] Get Car failure',
    props<{ message: string, status: number }>()
);

/**
 * GET ALL
 */

export const getCars = createAction(
    '[Cars] Get Cars'
);
export const getCarsSuccess = createAction(
    '[Cars] Get Cars success',
    props<{ cars: CarInterface[] }>()
);
export const getCarsFailure = createAction(
    '[Cars] Get Cars failure',
    props<{ message: string, status: number }>()
);

/**
 * SET
 */

export const setCar = createAction(
    '[Cars] Set Car',
    props<{ car: CarInterface }>()
);
export const setCarSuccess = createAction(
    '[Cars] Set Car success',
    props<{ car: CarInterface }>()
);
export const setCarFailure = createAction(
    '[Cars] Set Car failure',
    props<{ message: string, status: number }>()
);

/**
 * UPDATE
 */

export const updateCar = createAction(
    '[Cars] Update Car',
    props<{ car: CarInterface }>()
);
export const updateCarSuccess = createAction(
    '[Cars] Update Car success',
    props<{ car: CarInterface }>()
);
export const updateCarFailure = createAction(
    '[Cars] Update Car failure',
    props<{ message: string, status: number }>()
);

/**
 * DELETE
 */

export const deleteCar = createAction(
    '[Cars] Delete Car',
    props<{ car: CarInterface }>()
);
export const deleteCarSuccess = createAction(
    '[Cars] Delete Car success',
    props<{ car: CarInterface }>()
);
export const deleteCarFailure = createAction(
    '[Cars] Delete Car failure',
    props<{ message: string, status: number }>()
);
