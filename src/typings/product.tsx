export interface IProduct {

    ImgUrlProduct: { "imgfirst"?: string, "imgsecond"?: string, "imgthird"?: string, };
    name?: string;
    brand?: string;
    OldPrice?: number;
    NewPrice?: number;
    ColorProduct?: (string)[];
    descProduct?: string;
    RateProduct?: (object)[];
    QuantityProductAndSize?: (any)[];
    Categories?: (string)[];
    commentId?: string;
}