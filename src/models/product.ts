export interface Product {
    id: string;
    brand: string;
    ImgUrlProduct: { "imgfirst"?: string, "imgsecond"?: string, "imgthird"?: string, };
    name?: string;
    OldPrice?: number;
    NewPrice?: number;
    ColorProduct?: (string)[];
    descProduct?: string;
    DetailProduct?: object;
    QuantityProductAndSize?: (any)[];

}