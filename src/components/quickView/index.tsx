import { useState, useEffect } from 'react'
// import styled from 'styled-components'
// import tw from 'twin.macro'
import '../../css/quickview.css'
// import { IProduct } from "../../../typings/product"
import { ProductModalQuickView } from './productModalQuickView'
import '../../css/animation.css'

interface IProductQuicKView {
    product: any[],
    // id: string;
    ids?: string,
    onClose: any,
    isopen: boolean,
    // id: string;
    setActiveModalOpen?: any;
    setCurrent?: any;
}

export function QuickView(props: IProductQuicKView) {
    const { product, ids, onClose, setActiveModalOpen, setCurrent } = props;
    // console.log(product[0].id);
    const Pro: any[] = [];
    const [products, setProducts] = useState(Pro);

    // console.log(product);

    const handleData = () => {
        for (let i = 0; i < product.length; i++) {
            const List: any[] = []
            if (ids === product[i]._id) {
                List.push(product[i]);
                setProducts(List);
                // console.log(List);
                // console.log(products);
            }
        }
    }



    // console.log(Pro);

    // console.log(current);

    useEffect(() => {

        let isCancelled = false;

        handleData();
        return () => {
            isCancelled = true;
            // setProducts(Pro);
            setCurrent(0);
        }
    }, [ids])



    return (
        <div className="ModalQuickView fadeIn-animation">

            {products &&
                products.map((product) => (<ProductModalQuickView key={Math.random()} setActiveModalOpen={setActiveModalOpen} onClose={onClose}  {...product} ids={ids} ></ProductModalQuickView>))
            }

        </div>
    )

}