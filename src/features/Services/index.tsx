import { useState } from "react"
// import { Navbar } from '../../components/Navbar'
import styled from 'styled-components'
import tw from 'twin.macro'
import { SCREEN } from '../../components/responsive';
// import { Footer } from '../../components/footer';
import { Filter } from '../../components/Filter'
import { FilteredProduct } from '../../components/Filter/productFilter'
import { QuickView } from '../../components/quickView'

const ServicesContent = styled.div`
    ${tw`
    flex
    flex-col
    w-full
    items-center
    relative
    `}
`

const Content = styled.div`
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

const MarginTop = styled.div`
    margin-top: 5em;
    ${tw`

    `}
`

const HeaderContent = styled.div`
    ${tw`
        w-full
        flex
        justify-start
        items-center
       
    `}

    span:nth-child(1)::after{
        ${tw`
        absolute
        block
        `}
        content: "";
        border : 1px solid  rgba(107,114,128,0.7);;
        height: 14px;
        right: -9px;
        top: 50%;
        transform: translateY(-50%);
    }

    span{
        line-height: 24px;
        margin: 0 8px;
        ${tw`
            relative
            text-base
            font-semibold
            text-gray-500
        `}
    }

`

const HeaderTitle = styled.div`
    ${tw`

    `}

    h2 {
        ${tw`
        text-3xl
        lg:text-5xl
        text-gray-600
        font-extrabold

        `};
    }
`
const MainContent = styled.div`
    ${tw`
        w-full
        h-full
        flex 
        flex-col 
        md:flex-row
        items-center
        justify-center
        flex-wrap
    `}
`

const RightContent = styled.div`
    ${tw`
        w-full
       
        // bg-red-500
        // md:w-3/12 
        w-full 
        mb-5 
        px-5
    `}
    @media (min-width: ${SCREEN.sm}){
        ${tw`
        w-2/6
        h-full
        // bg-red-500
    `} 
    }
    @media (min-width: ${SCREEN.lg}){
        ${tw`
        w-2/6
        h-full
        // bg-red-500
    `} 
    }
    @media (min-width: ${SCREEN.xl}){
        ${tw`
        w-3/12
        h-full
        // bg-red-500
    `} 
    }

`

const LeftContent = styled.div`
    ${tw`
        w-full
        // h-full
        // bg-green-500 
        mb-5 
        px-5
        flex-col
        items-center
        justify-center
    `}
    @media (min-width: ${SCREEN.sm}){
        ${tw`
        w-4/6
        h-full
        // bg-red-500
    `} 
    }
    @media (min-width: ${SCREEN.lg}){
        ${tw`
        w-4/6
        h-full
        // bg-red-500
    `}
    } 
    
    @media (min-width: ${SCREEN.xl}){
        ${tw`
        w-9/12
        h-full
        // bg-red-500
    `} 
    }
     
`

const MarginBottom = styled.div`
    ${tw`
    mb-16
    sm:mb-28
    `}
`




export function Services(props: any) {

    const [CurrentId, setCurrentID] = useState("")
    const { setActiveModalOpen } = props;
    const [isQuickView, setQuickView] = useState(false)
    const [current, setCurrent] = useState(0);

    const FormProducts: any = []

    const [products, setProducts] = useState(FormProducts)


    return (


        <ServicesContent>
            <title>Service</title>
            <MarginTop></MarginTop>
            <Content>
                <HeaderContent><span> Product </span> <span> ALL </span>  </HeaderContent>
                <HeaderTitle>
                    <h2>Product In Store</h2>
                </HeaderTitle>
                <MainContent>
                    <RightContent>
                        <Filter />
                    </RightContent>
                    <LeftContent>
                        <FilteredProduct
                            setActiveModalOpen={setActiveModalOpen}
                            setCurrentID={setCurrentID}
                            setProducts={setProducts}
                            isQuickView={isQuickView}
                            setQuickView={setQuickView}
                        />
                    </LeftContent>
                </MainContent>
            </Content>
            <MarginBottom></MarginBottom>
            {isQuickView && <QuickView setCurrent={setCurrent} setActiveModalOpen={setActiveModalOpen} isopen={isQuickView} product={products} ids={CurrentId} onClose={() => setQuickView(false)} />}
        </ServicesContent>
    );
}
