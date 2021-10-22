import { useState, useEffect } from 'react'
import tw from "twin.macro"
import styled from "styled-components";
import { ProductList } from '../../components/product/productList'
// import { IProduct } from '../../../typings/product';

import axios, { AxiosResponse } from 'axios'
import { Pagination } from '../../components/pagination'
import queryString from 'query-string'
import MoonLoader from "react-spinners/MoonLoader";
import { QuickView } from '../../components/quickView'
import productApi from "../../api/productApi";
import { Product } from '../../models'
import { SCREEN } from '../../components/responsive';
import { useMediaQuery } from 'react-responsive'



const ListProductContainer = styled.div`
    ${tw`
        w-full
        max-w-screen-2xl
        flex
        flex-wrap
        justify-center
        pl-3
        pr-3
    `}
`

const ListProductTitle = styled.h2`
${tw`
text-3xl
lg:text-5xl
text-black
font-extrabold
`};
`

const ListGrid = styled.div`
    width: 90%;
    ${tw`
        mt-6
        md:w-full
        grid
        grid-cols-1
        gap-y-4 
        md:grid-cols-2 md:gap-5
        lg:gap-x-0 
        lg:gap-y-0
        lg:grid-cols-3 lg:gap-2
        xl:grid-cols-4 xl:gap-4
    `}

`

const ListItem = styled.div`
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
`

const LoadingContainer = styled.div`
  ${tw`
    w-full
    mt-9
    flex
    justify-center
    items-center
    text-base
    text-black
  `};
`;

interface IActiveModal {
    setActiveModalOpen?: any;
    // setDataProduct?: any;
}

export function ListProduct(props: IActiveModal) {

    const { setActiveModalOpen } = props;


    const Product: Product[] = [
        // {
        //     "id": "610a08e07493572bf0afa032",
        //     "name": "Áo thun Dinosaur 01",
        //     "brand": "Zara",
        //     "descProduct": " Sản phẩm mới 100% Kích thước: 11.5cm Danh mục sản phẩm: Trang sức thời trang Tên sản phẩm: Dây buộc tóc Phong cách: Phong cách Hàn Quốc Chất liệu: Vải Gói hàng bao gồm: 1 dây buộc tóc (không kèm theo sản phẩm khác) Mã số: 6031 Sản phẩm mới 100% Kích thước: 11.5cm Danh mục sản phẩm: Trang sức thời trang Tên sản phẩm: Dây buộc tóc Phong cách: Phong cách Hàn Quốc Chất liệu: Vải Gói hàng bao gồm: 1 dây buộc tóc (không kèm theo sản phẩm khác) Mã số: 6031",
        //     "OldPrice": 900000,
        //     "NewPrice": 820000,
        //     "ColorProduct": [
        //         "white",
        //         "red",
        //         "orange"
        //     ],
        //     "ImgUrlProduct": {
        //         "imgfirst": "https://chothueaodaisaigon.com/wp-content/uploads/2020/12/ch%E1%BB%A5p-%E1%BA%A3nh-qu%E1%BA%A7n-%C3%A1o-2.jpg",
        //         "imgsecond": "https://www.elle.vn/wp-content/uploads/2019/02/27/elle-viet-nam-streetstyle-tuan-le-thoi-trang-35.jpg",
        //         "imgthird": ""
        //     },
        //     "DetailProduct": { },
        //     "QuantityProductAndSize": [
        //         {
        //             "size": "M",
        //             "QuantityProduct": 10
        //         },
        //         {
        //             "size": "L",
        //             "QuantityProduct": 10
        //         },
        //         {
        //             "size": "XL",
        //             "QuantityProduct": 10
        //         },
        //         {
        //             "size": "2XL",
        //             "QuantityProduct": 5
        //         }
        //     ]
        // },
    ]

    const [isLoading, setLoading] = useState(false);
    const [product, setProduct] = useState(Product);
    const [pagination, setPagination] = useState(
        {
            _page: 1,
            _limit: 1,
            _totalRow: 1,
        }
    )
    const [CurrentId, setCurrentID] = useState("")
    const [isQuickView, setQuickView] = useState(false)
    const isMobile = useMediaQuery({ maxWidth: SCREEN.sm });

    const [current, setCurrent] = useState(0);


    const [filters, setFilter] = useState({
        _page: 1,
        _limit: 8,
    })
    const emptyData = !product || product.length === 0;

    useEffect(() => {

        const FetchProduct = async () => {
            setLoading(true);

            // Before 
            const paramsString = queryString.stringify(filters);
            // console.log(paramsString);

            // console.log(res1.data.data.product)

            try {
                const response = await productApi.getPagination(filters);
                // console.log("Respone Base Url: ", response);
                if (response) {
                    setProduct(response.data.product);
                    // console.log(response.data.product);
                    // setDataProduct(res);
                    // console.log(response.data.data.pagination);
                    // console.log(response.data.pagination);
                    setPagination(response.data.pagination);
                }
                setLoading(false);
            }
            catch (err) {
                console.log("Failed FetchProduct Data", err)
                console.log("-------------------------------")
                const res1 = await axios.get("products" + `?${paramsString}`)
                setProduct(res1.data.data.product);
                setPagination(res1.data.data.pagination);
                setLoading(false);
                // console.log("Data Call Proxy", res1.data);

            }




            // After using organization Api  
        }

        let isCancelled = false;

        FetchProduct();

        return () => {
            isCancelled = true;
        }


    }, [filters])

    function handlePageChange(newPage: number) {
        // console.log(newPage)
        setFilter({
            ...filters,
            _page: newPage,
        });
    }

    // const testProduct2: IProduct = {
    //     name: "Quần áo mùa đông",
    //     ColorProduct: ["red", "yellow", "blue"],
    //     descProduct: "Quần áo mùa đông nhìn là mê mệt",
    //     OldPrice: 1100000,
    //     NewPrice: 900000,
    //     ImgUrlProduct: { "imgfirst": "https://cdn.fitin.vn/cms-ecom/thumbs/1200x1200/images/2020/05/06/gia-treo-quan-ao-a-hanger-1fl-den-0001-1588757060.jpg" },
    // }
    function handleOpenQuickView(open: boolean, id: string) {
        setQuickView(open)
        setCurrentID(id)
        // console.log(id)
    }

    return (
        <ListProductContainer>
            <ListProductTitle>List Product In Shop</ListProductTitle>
            {isLoading && (
                <LoadingContainer>
                    <MoonLoader loading size={30} />
                </LoadingContainer>
            )}
            {!emptyData && (
                <ListGrid>
                    {product &&
                        product.map((product) => (
                            <ListItem key={Math.random()} ><ProductList setActiveModalOpen={setActiveModalOpen} key={Math.random()} {...product} isopen={isQuickView} onOpenChange={handleOpenQuickView} />

                            </ListItem>
                        ))
                    }
                </ListGrid>
            )}

            <Pagination pageNumberLimit={4} maxNumberPagination={4} pagination={pagination} onPageChange={handlePageChange} ></Pagination>
            {isQuickView && <QuickView setCurrent={setCurrent} setActiveModalOpen={setActiveModalOpen} isopen={isQuickView} product={product} ids={CurrentId} onClose={() => setQuickView(false)} />}
        </ListProductContainer>
    )


}
