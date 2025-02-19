import { BaseInterface } from "./BaseInterface";

export interface CarInterface extends BaseInterface {
    brand?: string;
    model?: string;
    color?: string;
    engine?: string;
    price?: number;
    year?: Date;
    details?: string;
    imageUrl?: string;
    fuel?: string;
    bodyType?: string;
}