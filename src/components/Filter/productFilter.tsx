import { useSelector } from "react-redux"
import { selectFilteredProducts } from "../../redux/Slice/product/productSlice"

import { ProductList } from "../product/productList"
import { QuickView } from "../quickView"


export function FilteredProduct(props: any) {


    const products = useSelector(selectFilteredProducts)
    const { setActiveModalOpen, setQuickView, setCurrentID, isQuickView, setProducts } = props

    function handleOpenQuickView(open: boolean, id: string) {
        setQuickView(open)
        setCurrentID(id)
        setProducts(products);
        // console.log(id)
    }

    // console.log(products);

    return (
        <>
            {products && (
                <div className="mt-10">
                    <p className="mb-2 font-bold text-xl text-gray-500">{products.length} Products Fond</p>

                    <div className="grid grid-flow-row-dense md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 justify-center">

                        {!!products?.length && products.map((product: any) => (
                            <div className="mb-2 md:mb-0 flex justify-center item-center" key={Math.random()} >
                                <ProductList setActiveModalOpen={setActiveModalOpen} key={Math.random()} {...product} isopen={isQuickView} onOpenChange={handleOpenQuickView} />
                            </div>
                        ))}
                    </div>
                    {!products?.length && (
                        <p className="text-sm text-gray-400 text-center py-4">No Product Found :(</p>
                    )
                    }

                </div>
            )

            }
        </>
    )
}


