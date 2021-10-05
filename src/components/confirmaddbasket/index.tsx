import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import tw from 'twin.macro'
import { XIcon } from '@heroicons/react/solid'
import '../../css/animation.css'
// import { DropDownLocation } from '../DropDownLocation'

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'

import { SCREEN } from '../responsive'

import { SelectCityDropDown } from '../DropDownLocation/selectCity'
import { SelectDistrictDropDown } from '../DropDownLocation/selectDistrict'
import { SelectWardDropDown } from '../DropDownLocation/selectStreet'
import { Marginer } from '../marginer'
import { Formik, Form, FastField } from 'formik'
import { IProduct } from '../../typings/product';


interface IConfirmAddBasket {
    open: boolean;
    onClose: any;
    nameproduct?: string;
    picture?: string;
    animation?: boolean;
    setValueAnimation?: any;
    description?: string;
    color?: string[] | string;
    colorArray?: string[];
    id?: string;
    setSelectColor: any;
    city?: string;
    district?: string;
    ward?: string;
    setCityS?: any;
    setDistrictS?: any;
    setWardS?: any;
    numberQuantity: number;
    setNumberQuantity?: any;
    OldPrice?: number;
    NewPrice?: number;
    handelUpquantity?: any;
    handelDownquantity?: any;
}

const BoxAddBasket = styled.div`

    height: 100vh;
    width: 100vw;
    background: rgba(0,0,0,0.2);
    z-index: 500;
    position: fixed;
    ${tw`
        flex
        items-center
        justify-end
    `}

  

`

const BoxAddClickClose = styled.div`
    ${tw`
        absolute
        left-0
        right-0
        top-0
        bottom-0
        h-full
        w-full
        flex
        items-center
        justify-center
    `}
`

const BoxAddBasketContainer = styled.div`
    height: 100vh;
    width: 100vw;
    background: var(--dark);
    z-index: 1;
    top: 58px;
    right: 0;
    left: 0;
    box-shadow: 0 1.3px 17px -2px rgb(0 0 0 / 40%);
    ${tw`
        relative
        flex
        flex-col
    `}

    @media (min-width: ${SCREEN.md}){
        width: 50vw;
    }

    @media (min-width: ${SCREEN.lg}){
        width: 40vw;
    }

    @media (min-width: ${SCREEN.xl}){
        width: 30vw;
    }

    @media (min-width: ${SCREEN["2xl"]}){
        width: 20vw;
    }
    

`

const BoxAddBasketHeader = styled.div`

    height: 40px;
    ${tw`
        w-full
        flex
        items-center
    `}

`

const BoxAddBasketTitle = styled.h2`
    ${tw`
        w-full
        h-full
        flex
        justify-center
        items-center
        font-extrabold
        text-gray-500
    `}
`

const BoxAddBasketClose = styled.div`

    position: absolute;
    right: 12px;
    ${tw`
        h-full
        flex
        items-center
    `}
`

const BoxImgProductAddBasket = styled.div`
    height: 250px;
    ${tw`
        w-full
        p-3
    `}
    img{
        width:  100%;
        height: 100%;
        border-radius: 4px;
        box-shadow: 0 1.3px 17px -2px rgb(0 0 0 / 40%);
    }

`

const BoxInformationProductAddBasket = styled.div`
    ${tw`
        w-full
        p-3    
    `}

`

const NameProductAddBasket = styled.div`
    ${tw`
        w-full
        flex
        items-center
        pt-1
    `}

    span{
        color: gray;
        margin-right: 4px;

        ${tw`
            text-xs
            font-bold
            xl:text-base
            xl:font-semibold 
        `}

    }

    h2{
        ${tw`
            text-xs
            font-bold
            xl:text-base
            xl:font-semibold
        `}
    }

`

const IdProductAddBasket = styled.div`
    ${tw`
        w-full
        flex
        items-center
        pt-1
    `}

    span{
        color: gray;
    ${tw`
        text-xs
        font-bold
        xl:text-base
        xl:font-semibold 
    `}
        
    }

    h2{
    ${tw`
        text-xs
        font-bold
        xl:text-base
        xl:font-semibold
    `}
    }
`

const DescriptionProductAddBasket = styled.div`
    ${tw`
        w-full
        flex
        items-center
        pt-1
    `}

    span{
    color: gray;
    ${tw`
        text-xs
        font-bold
        xl:text-base
        xl:font-semibold 
    `}
    margin-right: 4px;
    }

    h2{
        text-align: justify;
        height: 3rem;
        display: block;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;

        @media (min-width: ${SCREEN.xl}){
            height: 4.5rem;
        }
    
        ${tw`
        text-xs
        font-bold
        xl:text-base
        xl:font-semibold
        overflow-hidden
        `}
    }
`

const BoxPropertyProduct = styled.div`

`

const BoxColorSelectAddBasket = styled.div`

    ${tw`
        flex
        flex-col
        // p-3
        pt-2
    `}


`

const ProductColorAddBasket = styled.div`
    ${tw`
        text-gray-400
        text-xs
        w-7
        h-7
        border-gray-200
        border-4
        rounded-full mx-1
        cursor-pointer
        hover:border-gray-400
        `
    };
`;

const SelectColorAddBasket = styled.div`
    ${tw`
        w-full
        flex
        items-center
    `}

    span{
        color: gray;
        ${tw`
        text-xs
        font-bold
        xl:text-base
        xl:font-semibold 
        `}

`

const BoxLocationDeliver = styled.div`

    ${tw`
    flex
    flex-col
    // p-3
    pt-2
    `}


`



const BoxQuantityAddBasket = styled.div`
      
        width: 100%;

        ${tw`
            flex
            items-center
            mt-1
            space-x-3
        `}
`


const ButtonAddQuantityBasket = styled.div`

    ${tw`
    flex
    items-center
    justify-center
    rounded-md
    bg-yellow-400
    active:bg-yellow-500
    `}

`

const BoxNumberQuantityAddBasket = styled.div`

    height: 40px;
    width: 40px;
    box-shadow: 0 1.3px 17px -2px rgb(0 0 0 / 40%);

    ${tw`
    flex
    items-center
    justify-center
    rounded-lg
    `}

    span{
        font-size: 18px;
        font-weight: 600;
    }

`

const BoxPriceAndQuantity = styled.div`

    ${tw`
        w-full
        flex
        justify-center
        flex-col
        mt-1
    `
    }

`

const ProductPriceModal = styled.div`
    ${tw`
        flex
        space-x-2
    `}
`

const ProductPriceNew = styled.div`
    ${tw`
        text-red-500
        font-bold
        cursor-pointer
        hover:text-red-600
    `}

`

const ProductPriceOld = styled.div`
    ${tw`
        text-gray-500
        hover:text-gray-600
        font-bold
        line-through
        cursor-pointer
    `}
`

const BoxAnimationInput = styled.div`

    height: 80px;

    ${tw`
        flex
        items-center
        relative
        w-full
     
    `}
`
const BoxInput = styled.input`
     

    box-shadow: 0 1.3px 17px -2px rgb(0 0 0 / 40%);
    padding: 10px;
    z-index: 1;
    transition: 0.5s;

    ${tw`
        absolute
        top-0
        left-0
        bg-transparent
        w-full
        border-none
        outline-none
        flex
        items-center
        rounded-md
        text-base
        font-semibold
        text-gray-500
    `}
    :focus ~ span,
    :valid ~ span{
        transform: translateX(-10px) translateY(-7px) ;
        color: gray;
    }
    :focus,:valid{
        transform: translateX(0px) translateY(32px);
    }

`

const BoxInputBefore = styled.input`

    height: 50px;
        box-shadow: 0 1.3px 17px -2px rgb(0 0 0 / 40%);
        
        ${tw`
        text-center
        w-full
        border-none
        outline-none
        flex
        items-center
        justify-center
        rounded-md
        `}

`

const SpanInputAnimation = styled.span`

    ${tw`
        inline-block
        absolute
        text-base
        font-semibold
    `}

    top: 1px;
    left: 1px;
    padding: 10px;
    transition: 0.5s;
    pointer-event: none;

`



export function ConfirmAddBasket(props: IConfirmAddBasket) {

    const { open, onClose, nameproduct, picture,
        colorArray, description, color, id, animation,
        setValueAnimation, setSelectColor, city, district,
        ward, numberQuantity, setNumberQuantity, NewPrice, OldPrice } = props;

    // useEscape(() => handleEffect());

    useEffect(() => {
        if (animation) {
            console.log(animation);
            handleEffect();
            setTimeout(() => { setValueAnimation(false) }, 1000)
        }
        props.setCityS(city);
        props.setDistrictS(district);
        props.setWardS(ward);
        // console.log(ward, district, city)
    }, [animation, city, district, ward])

    const handleEffect = () => {

        const animation = document.querySelector('.addBasket-animation');
        animation?.classList.add("Test");
        // console.log(animation);
        // onClose(false);
        setTimeout(() => { onClose(false) }, 1000)
    }

    const initialValues: IConfirmAddBasket = props;
    // if (!open) return null
    return (
        <BoxAddBasket>
            <BoxAddClickClose /*onClick={onClose}*/></BoxAddClickClose>

            <Formik
                initialValues={initialValues}
                onSubmit={(values, actions) => {
                    console.log({ values, actions });
                    alert(JSON.stringify(values, null, 2));
                    actions.setSubmitting(false);
                }}
            >
                {formikProps => {
                    console.log(formikProps.values);
                    return (
                        <Form>

                            <BoxAddBasketContainer className={open ? "addBasket-animation" : "Test"}>
                                <BoxAddBasketHeader>
                                    <BoxAddBasketTitle>
                                        Confirm Product until add
                                    </BoxAddBasketTitle>
                                    <BoxAddBasketClose>
                                        <XIcon className="h-6 cursor-pointer" onClick={() => handleEffect()} />
                                    </BoxAddBasketClose>
                                </BoxAddBasketHeader>
                                <BoxImgProductAddBasket>
                                    <img src={picture} alt="" />
                                </BoxImgProductAddBasket>

                                <BoxInformationProductAddBasket>

                                    <IdProductAddBasket>
                                        <span>ID Product:</span> <h2>{id}</h2>
                                    </IdProductAddBasket>

                                    <NameProductAddBasket>
                                        <span>Name Product: </span> <h2>{nameproduct}</h2>
                                    </NameProductAddBasket>

                                    <DescriptionProductAddBasket>
                                        <span>Information Product: </span> <h2>{description}</h2>
                                    </DescriptionProductAddBasket>
                                    <BoxPropertyProduct>
                                        <BoxColorSelectAddBasket>
                                            {color === "" ? (
                                                <SelectColorAddBasket>
                                                    <span> You haven't chosen a color yet: </span>
                                                    {colorArray && colorArray?.map((color) => (
                                                        <ProductColorAddBasket onClick={() => setSelectColor(color)} key={Math.random()} style={{ background: color }}></ProductColorAddBasket>
                                                    ))}
                                                </SelectColorAddBasket>
                                            ) : (
                                                <SelectColorAddBasket>
                                                    <span>Color Select:</span>
                                                    <span style={{ textTransform: "uppercase", marginLeft: "4px" }}>{color}</span>
                                                    <ProductColorAddBasket style={{ backgroundColor: `${color}` }}></ProductColorAddBasket>
                                                </SelectColorAddBasket>
                                            )
                                            }
                                        </BoxColorSelectAddBasket>
                                        {/* <SelectSizeProduct /> */}
                                    </BoxPropertyProduct>
                                    {/* Đại chỉ : ${city} - ${district} - ${ward} */}

                                    <BoxLocationDeliver>
                                        {city && (city && district) && (city && district && ward) ?
                                            <>
                                                <h2 className="text-xs font-bold xl:text-base xl:font-semibold ">Please fill in more information </h2>
                                                <BoxAnimationInput>
                                                    <BoxInput required>
                                                    </BoxInput>
                                                    <SpanInputAnimation >{`Địa chỉ : ${city} - ${district} - ${ward}`}</SpanInputAnimation>
                                                </BoxAnimationInput>
                                            </>
                                            :
                                            <>
                                                <h2 className="text-xs font-bold xl:text-base xl:font-semibold ">Please fill in more information </h2>
                                                <SelectCityDropDown city={city} setCity={props.setCityS} />
                                                <Marginer direction="vertical" margin="1em" />
                                                <SelectDistrictDropDown city={city} district={district} setDistrict={props.setDistrictS} />
                                                <Marginer direction="vertical" margin="1em" />
                                                <SelectWardDropDown city={city} district={district} ward={ward} setWard={props.setWardS} />
                                                <Marginer direction="vertical" margin="1em" />
                                                <BoxInputBefore placeholder={`Address : ${city ? `City: ${city}` : "City ?"} - ${city ? `${district ? `District: ${district}` : "district ?"}` : ""} - ${district ? `${ward ? `ward ${ward}` : " ward ?"}` : ""} `} disabled >
                                                </BoxInputBefore>
                                            </>
                                        }
                                    </BoxLocationDeliver>


                                    <BoxPriceAndQuantity>
                                        <ProductPriceModal>
                                            <ProductPriceNew>
                                                <span>{NewPrice}</span><span>đ</span>
                                            </ProductPriceNew>
                                            <ProductPriceOld>
                                                <span>{OldPrice}</span><span>đ</span>
                                            </ProductPriceOld>
                                        </ProductPriceModal>
                                        <BoxQuantityAddBasket>
                                            <ButtonAddQuantityBasket onClick={props.handelDownquantity}><ChevronLeftIcon className="h-6" /></ButtonAddQuantityBasket>
                                            <BoxNumberQuantityAddBasket><span>{props.numberQuantity}</span></BoxNumberQuantityAddBasket>
                                            <ButtonAddQuantityBasket onClick={props.handelUpquantity}><ChevronRightIcon className="h-6" /></ButtonAddQuantityBasket>
                                        </BoxQuantityAddBasket>

                                    </BoxPriceAndQuantity>

                                </BoxInformationProductAddBasket>
                            </BoxAddBasketContainer>

                        </Form>
                    )
                }}
            </Formik>
        </BoxAddBasket>
    );

}