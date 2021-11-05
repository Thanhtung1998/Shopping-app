import * as React from 'react';
import { useEffect, useState, memo } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { FeelCmtHistory } from './FeelCmtHistory';


export interface ImgProps {
}

const MainCmtImg = styled.div`
    font-family: inherit;
    display: flex;
    word-wrap: break-word;
    max-width: calc(100% - 26px);

`

const PositionCmtImg = styled.div`
    font-family: inherit;
    display: inline-flex;
    position: relative;
    vertical-align: middle;
    width: 100%;

`

const BodyCmtImg = styled.div`
    font-family: inherit;
    flex: 1 1 auto;
    min-width: 0;
    width: 100%;
`

const ContentCmtImg = styled.div`
    font-family: inherit;
    margin-bottom: 4px;
    overflow-y: hidden;
    vertical-align: middle;
    border-bottom-left-radius: 18px;
    border-top-right-radius: 18px;
    display: inline-block;
    overflow-x: hidden;
    position: relative;
    margin-top: 0;
    border-bottom-right-radius: 18px;
    border-top-left-radius: 18px;
    max-width: 100%;

`

const BoxCmtImg = styled.div`
    font-family: inherit;
    box-sizing: border-box;
    position: absolute;
    right: 0;
    top: 0;
    left: 0;
    bottom: 0;
`

const TagACmtImg = styled.a`
    font-family: inherit;
    padding-right: 0;
    box-sizing: border-box;
    padding-bottom: 0;
    margin-bottom: 0;
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
    display: inline;
    margin-top: 0;
    padding-top: 0;
    text-align: inherit;
    margin-left: 0;
    background-color: transparent;
    touch-action: manipulation;
    margin-right: 0;
    padding-left: 0;
    border-left: 0;
    border-top: 0;
    border-right: 0;
    border-bottom: 0;
    list-style: none;
    outline: none;
    text-decoration: none;
`

const PaddingBottom = styled.div`
    max-width: 100%;
`
const NoNameTagDiv = styled.div`
font-family: inherit;
    box-sizing: border-box;
    border-bottom-left-radius: 18px;
    border-top-right-radius: 18px;
    position: absolute;
    right: 0;
    top: 0;
    left: 0;
    border-bottom-right-radius: 18px;
    bottom: 0;
    pointer-events: none;
    border-top-left-radius: 18px;
    border-top-color: var(--media-inner-border);
    border-bottom-style: solid;
    border-left-color: var(--media-inner-border);
    border-bottom-color: var(--media-inner-border);
    border-left-style: solid;
    border-left-width: 1px;
    border-top-style: solid;
    border-top-width: 1px;
    border-right-width: 1px;
    border-right-style: solid;
    border-right-color: var(--media-inner-border);
    border-bottom-width: 1px;

`

export function CmtHistoryImg(props: ImgProps) {

    const initialState: any = 0;
    const [valuePadding, setValuePadding] = useState(initialState);
    const [valueWidth, setValueWidth] = useState(initialState);
    const [widthImg, setWidthImg] = useState(initialState);
    const [heightImg, setHeightImg] = useState(initialState);

    // process width height here

    useEffect(() => {
        const handleCalculatorWidthHeight = () => {
            const Element = document.getElementById("process-img-padding");
            const src = Element?.getAttribute("src");

            console.log(src);
        }

        handleCalculatorWidthHeight();
    }, [])

    // .........................

    useEffect(() => {
        const handleProcessPadding = () => {
            const padding = document.getElementById("process-img-padding");
            const height: any = padding?.getAttribute("height")
            const width: any = padding?.getAttribute("width")

            if (width && height) {
                const valueCalculator = (height / width) * 100
                const valuePadding = valueCalculator.toFixed(4);
                setValueWidth(width);
                setValuePadding(valuePadding);
                // console.log(height, width, valuePadding)
            }
        }

        handleProcessPadding();

    }, [])


    return (
        <MainCmtImg >
            <PositionCmtImg>
                <BodyCmtImg>
                    <ContentCmtImg>
                        <BoxCmtImg>
                            <TagACmtImg href="#" role="link" tabIndex={0}>
                                <img id="process-img-padding" height="210" width="210" alt={""}
                                    referrerPolicy="origin-when-cross-origin"
                                    src="https://scontent.fsgn13-2.fna.fbcdn.net/v/t1.6435-9/s851x315/251873649_10159658167580406_7989396738847531312_n.jpg?_nc_cat=108&amp;ccb=1-5&amp;_nc_sid=dbeb18&amp;_nc_ohc=3xJLR7hhbJQAX9FHkL3&amp;_nc_ht=scontent.fsgn13-2.fna&amp;oh=d0c5c83d9b11fa9c77d275a3331eb32c&amp;oe=61A8069D" />
                            </TagACmtImg>
                        </BoxCmtImg>
                        <PaddingBottom style={{ paddingBottom: `${valuePadding}%`, width: `${valueWidth}px` }}></PaddingBottom>
                        <NoNameTagDiv>
                        </NoNameTagDiv>
                    </ContentCmtImg>
                </BodyCmtImg>
                <FeelCmtHistory />
            </PositionCmtImg>
        </MainCmtImg>
    );
}

memo(CmtHistoryImg)