import gql from "graphql-tag";

export const Get_ALL_Product = gql`
query {
     All{
        id
        name
        brand
        descProduct
        NewPrice
        OldPrice
        ColorProduct
        ImgUrlProduct{
            imgfirst
            imgsecond
            imgthird
        }
        QuantityProductAndSize{
            size
            QuantityProduct
        }
        RateProduct{
            star
            count
        }
    }
}

`