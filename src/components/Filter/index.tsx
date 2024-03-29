import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { updateFilters, clearFilters, selectProducts } from "../../redux/Slice/product/productSlice"
import { getUniqueValues } from "../../utils/getValue"
import styles from "../../css/Product.module.css"
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css'
import styled from 'styled-components'
import tw from 'twin.macro'

// import Slider from 'rc-slider';
// import 'rc-slider/assets/index.css';

// const { createSliderWithTooltip } = Slider;

// const Range = createSliderWithTooltip(Slider.Range)

const ButtonClear = styled.button`
    ${tw`
    cursor-pointer 
    p-2 
    text-xs 
    text-gray-800
    md:text-sm 
    bg-gradient-to-b 
    from-blue-200 
    to-blue-400 
    border 
    border-blue-300 
    rounded-sm 
    focus:outline-none 
    active:from-blue-500 
    font-bold
    `}
`

const HrSeparate = styled.hr`
    border-top: 1px solid gray;
    ${tw`
    my-5
    `}
`


export function Filter(props: any) {
    const last = null || "";
    const dispatch = useDispatch()
    const [activeCategory, setActiveCategory] = useState('all')
    const [activeCategories, setActiveCategories] = useState('all')
    const [activeColor, setActiveColor] = useState('all')
    const [lastChange, setLastChange] = useState(last)
    const [showClear, setShowClear] = useState(false)
    const [price, setPrice] = useState(0)
    const [priceMax, setPriceMax] = useState(1)

    const all_products = useSelector(selectProducts)
    // console.log(all_products);



    // Loc ra categories
    const brandList = all_products ? getUniqueValues(all_products, 'brand') : null
    // const nameList = all_products ? getUniqueValues(all_products, 'name') : null

    // all of them === flat()
    // let getColorArray: any = [];
    // if (all_products) {
    //     getColorArray = getUniqueValues(all_products, 'ColorProduct')
    // }
    // let colors: any = []

    // let max = 0;
    // for (let i = 0; i < getColorArray.length; i++) {
    //     const lengthMax = getColorArray[i];

    //     if (max < lengthMax.length) {
    //         max = lengthMax.length
    //         colors = getColorArray[i];
    //     }



    // }

    const colors = all_products ? getUniqueValues(all_products, 'ColorProduct') : null
    const categories = all_products ? getUniqueValues(all_products, 'Categories') : null
    // console.log(colors);
    // console.log(max);

    // console.log(colors);

    const reFilter = (products: any, dont: any) => {
        const items = ['category', 'company', 'colors']
        let filtered = products
        products.filter((item: any) => item !== dont).map((item: any) => {
            if (item !== 'colors' && item !== 'company' && activeCategory !== 'all') {
                filtered = items.filter(product => product[item] === activeCategory)
            } else if (item !== 'category' && item !== 'company' && activeColor !== 'all') {
                // filtered = items.filter(product => product[item].includes(activeColor))
            } else if (item !== 'colors' && item !== 'category' && activeCategories !== 'all') {
                filtered = items.filter(product => product[item] === activeCategories)
            }
            return null;
        })
        return filtered
    }

    const filterCategory = (value: any, item: any) => {
        setShowClear(true)
        if (item === 'brand') {
            setActiveCategory(value)
            setLastChange('brand')

        }
        if (item === 'Categories') {
            setActiveCategories(value)
            setLastChange('Categories')

            // const filtered = (value !== 'all') ? all_products.filter((product: Array<any>) => product[item].includes(value)) : all_products

            // console.log("Categories:", filtered)


            // dispatch(updateFilters(filtered))

        }
        if (item === 'ColorProduct') {
            setActiveColor(value)
            // setLastChange('colors')
            console.log(item)
            const filtered = (value !== 'all') ? all_products.filter((product: Array<any>) => product[item].includes(value)) : all_products

            dispatch(updateFilters(filtered))
        }
    }



    useEffect(() => {
        const items: any = ['brand', 'Categories']
        const hello: any = {
            brand: activeCategory,
            Categories: activeCategories
        }


        if (all_products) {
            let filtered = all_products
            let DataNew: any = []
            // console.log(DataTest)
            if (hello[lastChange] !== 'all') {

                // --------------------- after Code -------------------
                let item: any = "Categories"
                if (hello["brand"] === "all") {
                    DataNew = all_products
                    // console.log(1)
                    if (hello["Categories"] !== "all") {
                        filtered = DataNew.filter((product: Array<any>) => product[item].includes(hello["Categories"]));
                        // console.log(1.1, filtered)
                    }
                } if (hello["brand"] !== "all") {
                    // console.log(2)
                    DataNew = all_products.filter((product: any) => product["brand"] === hello["brand"])
                    if (hello["Categories"] !== "all") {
                        filtered = DataNew.filter((product: Array<any>) => product[item].includes(hello["Categories"]));
                        // console.log(2.1, filtered)
                    } if (hello["Categories"] === "all") {
                        filtered = DataNew;
                        // console.log(2.2, DataNew)
                    }
                }




            }

            else {
                items.forEach((x: string) => {
                    filtered = (x === lastChange && hello[x] !== 'all') ? filtered.filter((product: any) => product[x] === hello[x]) : filtered

                })
            }

            items.forEach((x: any) => {
                // console.log(x)
                // let i: any = lastChange
                if (hello[x] !== "all") {
                    filtered = (x !== lastChange) ? filtered.filter((product: Array<any>) => product[x].includes(hello[x])) : filtered
                }
                // console.log(filtered)
            })



            // console.log(hello["category"]);

            dispatch(updateFilters(filtered))

        }

        return () => {

        }

    }, [all_products, activeCategory, activeCategories, lastChange, dispatch])

    useEffect(() => {
        if (!all_products) return false || undefined
        const max = all_products?.map((product: any) => product.NewPrice).reduce((a: any, b: any) => Math.max(a, b))
        setPriceMax(max)
        setPrice(max)
    }, [all_products])


    const clearAllFilters = () => {
        dispatch(clearFilters())
        setShowClear(false)
        setActiveCategory('all')
        setActiveCategories('all')
        setActiveColor('all')
        setPrice(priceMax)
    }

    const priceFilter = (value: any) => {

        setPrice(value)
        // console.log(value);
        const filtered = all_products.filter((product: any) => product.NewPrice <= value)
        // console.log(filtered);
        dispatch(updateFilters(filtered))
        setShowClear(true)
    }

    return (
        <div className="flex flex-col mt-10">
            <div className="mb-4">
                <div className="mb-4">
                    <h2 className="font-bold text-lg text-gray-600">
                        Brands
                    </h2>
                    <div className="flex flex-col my-5">
                        {brandList && brandList.map(value => (
                            <label key={value} className="flex items-center justify-start" >
                                <input className="mb-2 mr-4" type="checkbox" value={value} name={`${value}`} onClick={() => filterCategory(value, 'brand')} checked={value === activeCategory} onChange={() => setActiveCategory(value)} />
                                <p key={value} className={`${value === activeCategory && styles.active_filter} text-gray-500 cursor-pointer mb-2`} >{value}</p>
                            </label>
                        ))}
                    </div>
                </div>
                <HrSeparate />
                <div className="mb-4">
                    <h2 className="font-bold text-lg text-gray-600">
                        Categories
                    </h2>
                    <div className="flex flex-col my-5">
                        {categories && categories.map(value => (
                            <label key={value} className="flex items-center justify-start" >
                                <input className="mb-2 mr-4" type="checkbox" value={value} name={`${value}`} onClick={() => filterCategory(value, 'Categories')} checked={value === activeCategories} onChange={() => setActiveCategories(value)} />
                                <span key={value} className={`${value === activeCategories && styles.active_filter} text-gray-500 cursor-pointer mb-2 text-base font-semibold`}> {value}</span>
                            </label>
                        ))}
                    </div>
                </div>
                <HrSeparate />
                <div className="mb-14 pr-10">
                    <h2 className="font-bold text-lg text-gray-600">
                        Price
                    </h2>
                    <div className="flex flex-col my-5 z-1">
                        <InputRange
                            maxValue={priceMax}
                            minValue={0}
                            value={price}
                            formatLabel={(value: any) => `${value} vnđ`}
                            onChange={priceFilter}
                        />
                        {/* <Range
                            marks={{
                                0: `vnd${priceMax}`
                            }}
                            min={0}
                            max={priceMax}
                            value={[price]}
                            defaultValue={[priceMax]}
                            tipFormatter={value => `vnd${value}`}
                            tipProps={{
                                placement: "top",
                                visible: true
                            }}
                            onChange={priceFilter}
                        /> */}
                    </div>
                </div>
                <HrSeparate />
                <div className="mb-4">
                    <h2 className="font-bold text-base text-gray-600">
                        Colors
                    </h2>
                    <div className="flex justify-around my-5">
                        {colors && colors.map((value: any) => (
                            <div
                                onClick={() => filterCategory(value, 'ColorProduct')}
                                key={value}
                                className={`w-7 h-7 cursor-pointer border-4  shadow-sm ${value === activeColor ? 'border-red-500' : 'border-gray-500'} rounded-full mx-1`}
                                style={value === "all" ? { background: "conic-gradient(#FF0000 0deg 120deg,  #008000 120deg 240deg, #FFA500 240deg 360deg)" } : { background: value.split('all') }} >
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <HrSeparate />
            {showClear && <ButtonClear onClick={clearAllFilters} className="button w-full">Clear Filter</ButtonClear>}
        </div>
    );
}
