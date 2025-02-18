import { CarInterface } from "@models/CarInterface";
import { ResponseErrorInterface } from "@models/ResponseErrorInterface";

export interface CarState {
    isLoading: boolean,
    cars: CarInterface[],
    error: ResponseErrorInterface | null,
}