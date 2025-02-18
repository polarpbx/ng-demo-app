import { BaseInterface } from "./BaseInterface";

export interface CarInterface extends BaseInterface {
    make?: string;
    model?: string;
    color?: string;
    engine?: string;
    price?: number;
    year?: Date;
}