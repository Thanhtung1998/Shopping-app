import * as React from 'react';
import { useEffect, useState } from 'react';
import styled from "styled-components"
import IconImg from "./IconImg"
export interface CommonIconImgProps {
    IconData: any
    textHeader: string
    lazyLoading: boolean
}

const CommonIconMain = styled.div`

`

const H3Header = styled.h3`
font-family: inherit;
color: #1c1e21;
    font-size: 13px;
    font-weight: 600;
    margin: 0;
    padding: 0;
    line-height: 17px;
&._3vgh {
    color: #8d949e;
    cursor: default;
    font-weight: normal;
    margin: 0 8px 4px;
    -webkit-user-select: none;
}
`
const BoxIcon = styled.div`
    font-family: inherit;

    & > div.clearfix{
        zoom: 1;
        :after {
            clear: both;
            content: '.';
            display: block;
            font-size: 0;
            height: 0;
            line-height: 0;
            visibility: hidden;
        }
    }

`

export default function CommonIconImg(props: CommonIconImgProps) {

    const { IconData, textHeader, lazyLoading } = props;


    const [minHeight, setMinHeight] = useState(0);

    useEffect(() => {
        const LengthData = IconData.length;

        // console.log(LengthData);

        const valueNumber = (LengthData / 8);
        // console.log();
        let Height: any;

        Height = Math.round(valueNumber) * 40

        setMinHeight(Height);
        // console.log(minHeight);

    }, [])



    useEffect(() => {

        const DivBox = document.querySelectorAll('.main__div--feel--icon');
        DivBox.forEach((item: any, index: any) => {

            if (index <= 7) {
                const images = DivBox[index].querySelectorAll("img");
                let imgOptions: any = {}

                const preLoadImage = (img: any) => {

                    // const AnimalAndNature = document.getElementById("Animal & Nature");

                    // if (AnimalAndNature) {
                    //     console.log("listen on")
                    // }

                    const src = img.getAttribute("data-src");
                    // // console.log(src);
                    if (!src) {
                        return;
                    }

                    img.removeAttribute("loading");
                    // console.log(img);

                    // console.log(IconData)
                }

                let observer = new IntersectionObserver((entries, observer) => {
                    entries.forEach((entry) => {
                        if (!entry.isIntersecting) return;
                        const image: any = entry.target;
                        if (image) {
                            // console.log(image);
                            preLoadImage(image);
                            observer.unobserve(image);
                        }

                    })
                }, imgOptions);

                images?.forEach((image: any) => {
                    observer.observe(image);
                })
            } else {
                return;
            }

        })

    }, [])

    return (
        <CommonIconMain className={`main__div--feel--icon`} id={textHeader}>
            <H3Header className="_3vgh">{textHeader}</H3Header>
            <BoxIcon className="_3vgi" style={{ minHeight: `${minHeight}px` }}>
                <div className="clearfix">
                    {IconData && IconData.map((data: any) => (
                        <IconImg key={data.id} alt={data.alt} lazy_key={lazyLoading} src={data.src} />
                    ))}
                </div>
            </BoxIcon>
        </CommonIconMain>
    );
}
