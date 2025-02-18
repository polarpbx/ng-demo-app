import { Action, createReducer, on } from "@ngrx/store";
import * as CarActions from './cars.actions'
import { CarState } from "@stateTypes/CarState";

export const initialState: CarState = {
    isLoading: false,
    cars: [],
    error: null,
};

const reducers = createReducer(
    initialState,

    /**
     * GET
     */
    on(CarActions.getCar, (state) => ({ ...state, isLoading: true })),
    on(CarActions.getCarSuccess, (state, action) => ({
        ...state,
        isLoading: false,
        cars: [...state.cars, action.car]
    })),
    on(CarActions.getCarFailure, (state, action) => ({
        ...state,
        isLoading: false,
        error: action
    })),

    /**
     * GET ALL
     */
    on(CarActions.getCars, (state) => ({ ...state, isLoading: true })),
    on(CarActions.getCarsSuccess, (state, action) => ({
        ...state,
        isLoading: false,
        cars: [...state.cars, ...action.cars]
    })),
    on(CarActions.getCarsFailure, (state, action) => ({
        ...state,
        isLoading: false,
        error: action
    })),

    /**
     * SET
     */
    on(CarActions.setCar, (state) => ({
        ...state,
        isLoading: true,
        error: null,
    })),
    on(CarActions.setCarSuccess, (state, action) => {
        const updatedCars = [...state.cars];
        updatedCars.unshift(action.car)
        return {
            ...state,
            isLoading: false,
            cars: updatedCars
        };

    }),
    on(CarActions.setCarFailure, (state, action) => ({
        ...state,
        isLoading: false,
        error: action
    })),

    /**
     * UPDATE
     */
    on(CarActions.updateCar, (state) => ({
        ...state,
        isLoading: true,
        error: null,
    })),
    on(CarActions.updateCarSuccess, (state, action) => {
        const updatedCars = [...state.cars];
        const carIndex = updatedCars.findIndex(car => car.id == action.car.id)

        if (carIndex !== -1) {
            updatedCars[carIndex] = action.car;
        }

        return {
            ...state,
            isLoading: false,
            cars: updatedCars
        };
    }),
    on(CarActions.updateCarFailure, (state, action) => ({
        ...state,
        isLoading: false,
        error: action
    })),

    /**
     * DELETE
     */
    on(CarActions.deleteCar, (state) => ({
        ...state,
        isLoading: true,
        error: null,
    })),
    on(CarActions.deleteCarSuccess, (state, action) => {

        return {
            ...state,
            isLoading: false,
            cars: state.cars.filter(data => data.id != action.car.id)
        };
    }),
    on(CarActions.deleteCarFailure, (state, action) => ({
        ...state,
        isLoading: false,
        error: action
    })),

);

export function loadingCars(state: any, action: Action) {
    return reducers(state, action);
} 
