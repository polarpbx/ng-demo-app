import { BaseInterface } from "./BaseInterface";

export interface CarInterface extends BaseInterface {
    name?: string;
    model?: string;
    year?: number;
}