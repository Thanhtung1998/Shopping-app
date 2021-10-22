
export interface ImgProduct {
    __typename: "ImgProduct"
    imgfirst: string
    imgsecond: string
    imgthird: string
}

export interface Rate {
    __typename: "Rate"
    star: number
    count: number
}

export interface Quantity {
    size: string
    QuantityProduct: number
}

export interface GetProduct_products {
    __typename: "ProductDto";
    _id: string
    name: string
    brand: string
    descProduct: string
    OldPrice: number
    NewPrice: number
    ColorProduct: string[]
    ImgUrlProduct: ImgProduct
    RateProduct: Rate
    QuantityProductAndSize: [Quantity]
    commentId: string
    Categories: string[]
}

export interface GetProducts {
    product: GetProduct_products[];
}