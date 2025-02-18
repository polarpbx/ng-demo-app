import { createSelector } from "@ngrx/store";
import { AppState } from "@stateTypes/AppState";

export const selectFeature = (state: AppState) => state.cars;

export const isLoadingSelector = createSelector(
    selectFeature,
    (state) => state.isLoading
);

export const carsSelector = createSelector(
    selectFeature,
    (state) => state.cars
);

export const errorSelector = createSelector(
    selectFeature,
    (state) => state.error
);