import * as React from 'react';
import styled from "styled-components"

export interface IconImgProps {
    alt: string | any
    src: string
    lazy_key: any
    key: any
}


const TagSpan = styled.span`
    font-family: inherit;
    // height: 16px;
`
const TagDivIcon = styled.div`
font-family: inherit;
&._5zfs {
    border-radius: 4px;
    cursor: pointer;
    display: inline-block;
    height: 36px;
    line-height: 0;
    margin: 2px;
    text-align: center;
    -webkit-user-select: none;
    vertical-align: middle;
    width: 36px;
}

`

const TagDivIconChild = styled.div`
font-family: inherit;


&._5zft, &._4f4q {
    height: 28px;
    margin: 4px;
    position: relative;
    width: 28px;
}
&._4f4q {
    background: var(--wash, #EBEDF0);
    border-radius: 14px;
    position: absolute;
}

`

const TagImg = styled.img`
&._5zft, &._4f4q {
    height: 28px;
    margin: 4px;
    position: relative;
    width: 28px;
}

border: 0;


`

export default function IconImg(props: IconImgProps) {

    const { alt, src, lazy_key } = props

    return (
        <>
            <TagSpan className="">
                <TagDivIcon className="_5zfs" role="button" tabIndex={0}>
                    <TagDivIconChild className="_4f4q"></TagDivIconChild>
                    <TagImg
                        alt={alt} className="_5zft img"
                        draggable="false"
                        height="28"
                        data-src={src}
                        src={src}
                        width="28"
                        loading={lazy_key ? "lazy" : "eager"}
                    />
                </TagDivIcon>
            </TagSpan>
        </>
    );
}
