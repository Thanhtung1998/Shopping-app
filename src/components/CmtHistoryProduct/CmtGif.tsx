import React, { useEffect, useState, useRef } from 'react';
import styled from "styled-components"
import tw from "twin.macro"
import { CmtGif } from './CmtGiF/index'
import DataGif from "./CmtGiF/dataGIF"

export interface CmtGifBoxProps {
    isOpenGif: boolean;
    setIsOpenGif: any;
}

const MainCmtGif = styled.div`
    font-family: inherit;
    margin-right: -9999px;
    position: absolute;
    top: 0;
    left: 0;
`

const MainCmtGifInherit = styled.div`
    font-family: inherit;
    align-content: inherit;
    max-height: inherit;
    flex-grow: inherit;
    flex-shrink: inherit;
    max-width: inherit;
    position: relative;
    flex-direction: inherit;
    width: inherit;
    min-height: inherit;
    min-width: inherit;
    justify-content: inherit;
    height: inherit;
    display: inherit;
    align-items: inherit;

`

const MainGifContent = styled.div`
    font-family: inherit;
`

const MainGifContentPosition = styled.div`
    font-family: inherit;
    position: relative;
    margin-bottom: 15px;
`

const MainGifContentBg = styled.div`
    font-family: inherit;
    overflow-y: hidden;
    box-sizing: border-box;
    border-bottom-left-radius: var(--card-corner-radius);
    --T68779821: 0 12px 28px 0 var(--shadow-2),0 2px 4px 0 var(--shadow-1),inset 0 0 0 1px var(--shadow-inset);
    -webkit-box-shadow: var(--T68779821);
    box-shadow: 0 12px 28px 0 var(--shadow-2),0 2px 4px 0 var(--shadow-1),inset 0 0 0 1px var(--shadow-inset);
    overflow-x: hidden;
    border-top-right-radius: var(--card-corner-radius);
    min-width: 100px;
    border-top-left-radius: var(--card-corner-radius);
    border-bottom-right-radius: var(--card-corner-radius);
    background-color: var(--card-background);
`

const MainContent = styled.div`
    font-family: inherit;
    box-sizing: border-box;
    flex-shrink: 0;
    position: relative;
    display: flex;
    height: 352px;
    width: 274px;
    z-index: 0;
    max-width: 100%;
    flex-direction: column;
`
const BodyContent = styled.div`
    font-family: inherit;
    min-height: 0;
    box-sizing: border-box;
    position: relative;
    display: flex;
    z-index: 0;
    flex-direction: column;
    flex-grow: 1;
`

const InputBox = styled.div`
    font-family: inherit;
    box-sizing: border-box;
    flex-shrink: 0;
    position: relative;
    display: flex;
    z-index: 0;
    max-width: 100%;
    flex-direction: column;
`

const InputBoxPadding = styled.div`
    font-family: inherit;
    padding-bottom: 8px;
    padding-right: 16px;
    padding-left: 16px;
    padding-top: 8px;
`

const LabelInputSearch = styled.label`
    font-family: inherit;
    box-sizing: border-box;
    position: relative;
    width: 100%;
    display: block;
    min-width: 40px;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 12px;
    color: #606770;
    cursor: default;
    font-weight: 600;
    vertical-align: middle;
`

const BoxIconSearch = styled.div`
    font-family: inherit;
    transition-timing-function: linear;
    transition-property: opacity,transform;
    position: absolute;
    transition-duration: var(--fds-duration-extra-extra-short-in);
    pointer-events: none;
    top: 10px;
    left: 10px;

    & > i {
        vertical-align: -0.25em;
        -webkit-filter: var(--filter-placeholder-icon);
    }

`

const InputSearchGif = styled.input`
    font-family: inherit;
    height: 36px;
    transition-timing-function: linear;
    box-sizing: border-box;
    border-bottom-left-radius: 50px;
    color: var(--primary-text);
    -webkit-tap-highlight-color: transparent;
    border-bottom-right-radius: 50px;
    padding-top: 7px;
    width: 100%;
    font-size: .9375rem;
    transition-duration: var(--fds-duration-extra-extra-short-in);
    font-family: inherit;
    text-align: left;
    padding-bottom: 9px;
    border-top-right-radius: 50px;
    padding-left: 32px;
    touch-action: manipulation;
    -webkit-appearance: none;
    padding-right: 12px;
    border-top-left-radius: 50px;
    background-color: var(--comment-background);
    transition-property: padding;
    border-left: 0;
    border-top: 0;
    border-right: 0;
    border-bottom: 0;
    outline: none;
    font-weight: normal;
`

const ContentImgGif = styled.div`
    font-family: inherit;
    min-height: 0;
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-shrink: 1;
    z-index: 0;
    flex-basis: 100%;
    max-width: 100%;
    flex-direction: column;
    flex-grow: 1;
`

const ContentScrollArea = styled.div`
    font-family: inherit;
    perspective-origin: right top;
    text-align: center;
    scrollbar-width: none;
    overflow-x: hidden;
    position: relative;
    perspective: 1px;
    transform-style: preserve-3d;
    width: 100%;
    display: flex;
    -webkit-overflow-scrolling: touch;
    overflow-y: auto;
    z-index: 0;
    flex-direction: column;
    overscroll-behavior-y: contain;

    ::-webkit-scrollbar {
        display: none;
    }
    ::-webkit-scrollbar {
        width: 0;
    }
    ::-webkit-scrollbar {
        height: 0;
    }

`

const BodyGifImg = styled.div`
    font-family: inherit;
    position: relative;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    text-align: center;
`

const ToAddDiv = styled.div`
    font-family: inherit;
    box-sizing: border-box;
    flex-shrink: 0;
    position: relative;
    display: flex;
    z-index: 0;
    max-width: 100%;
    flex-direction: column;
`

const BoxGifToAddImgItems = styled.div`
    font-family: inherit;
    width: 1px;
    position: absolute;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    height: 1px;
`
const ScrollCustom = styled.div`
    font-family: inherit;
    transition-duration: .5s;
    background-color: var(--divider);
    position: absolute;
    transition-timing-function: ease;
    right: 0;
    display: none;
    top: 0;
    width: 16px;
    height: 100%;
    opacity: 0;
    transition-property: opacity;
`

const ScrollThumbnail = styled.div`
    font-family: inherit;
    box-sizing: border-box;
    padding-bottom: 0;
    position: absolute;
    padding-right: 4px;
    transition-timing-function: ease;
    right: 0;
    display: none;
    top: 0;
    padding-top: 0;
    pointer-events: none;
    width: 16px;
    transform-origin: right top;
    transition-duration: .3s;
    opacity: 0;
    padding-left: 4px;
    transition-property: opacity;
`

const ScrollThumbnailColor = styled.div`
    font-family: inherit;
    border-bottom-left-radius: 4px;
    background-color: var(--scroll-thumb);
    border-top-right-radius: 4px;
    width: 100%;
    border-top-left-radius: 4px;
    border-bottom-right-radius: 4px;
    height: 100%;
`
const ModalAll = styled.div`
    ${tw`
        h-full
        w-full
        flex
        items-center
        justify-center
    `}
    color: var(--secondary-text);
`

const ModalContainer = styled.div`
    z-index: 5;
    // background: rgba(0,0,0,0.2);
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

export default function CmtGifBox(props: CmtGifBoxProps) {

    const { isOpenGif, setIsOpenGif } = props;

    const initialState: any[] = [];

    const inputRef: any = useRef(null);

    const [dataGif, setDataGif] = useState(initialState);
    const [lengthTotal, setLengthTotal] = useState(0);
    const [styleValue, setStyleValue] = useState({});
    const [valueInput, setValueInput] = useState("")

    const handleClose = () => {
        setIsOpenGif(false);
    }

    const styleMain = {
        zIndex: 100,
        transform: `translate(0px, 0px) translate(-100%, -100%)`
    }

    const handleChange = () => {
        // console.log("value: ")
        // console.log(inputRef.current.value); 
        setValueInput(inputRef.current.value);
    };

    useEffect(() => {
        const AreaScroll = document.getElementById("ScrollAreaCmtGif");
        const ThumbnailCustom = document.getElementById("ScrollThumbnailCustomGif");
        if (isOpenGif) {
            // console.log("listen")
            if (AreaScroll) {
                AreaScroll.addEventListener("mouseenter", () => {
                    if (ThumbnailCustom) {
                        ThumbnailCustom.style.opacity = "1"
                        ThumbnailCustom.style.transitionDuration = "0"
                    }
                    // console.log("listen")
                    AreaScroll.addEventListener("scroll", () => {
                        // console.log("hover here")

                        // Dom Event Scroll Load Lazy Img

                    })
                })

                AreaScroll.addEventListener("mouseleave", () => {
                    if (ThumbnailCustom) {
                        ThumbnailCustom.style.opacity = "0"
                        ThumbnailCustom.style.transitionDuration = "0.3s"
                    }
                    AreaScroll.removeEventListener("scroll", () => {
                        // console.log("hover here")
                    })
                    // console.log("not hover here")
                })

            }
        }

        return () => {
            if (AreaScroll) {

                AreaScroll.removeEventListener("mouseenter", () => {
                    AreaScroll.removeEventListener("scroll", () => {
                        // console.log("hover here")
                    })
                    // console.log("hover here")
                })
                AreaScroll.removeEventListener("mouseleave", () => {
                    // console.log("not hover here")
                    AreaScroll.removeEventListener("scroll", () => {
                        // console.log("hover here")
                    })
                })

            }
        }

    }, [isOpenGif])

    useEffect(() => {
        const handleData = () => {
            const data = DataGif[0].data

            if (data) {
                setDataGif(data);
                let Length = 0;
                for (let i = 0; i < data.length; i++) {
                    Length += Number(data[i].height)
                }
                setLengthTotal(Math.round(Length))
                const valueTranslate = Math.round(Length) / 300
                const height = 300 / valueTranslate
                const styleThumbnail = {
                    display: "block",
                    right: "0px",
                    height: `10px`,
                    transform: `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, -1) scale(${valueTranslate}) translateZ(-${valueTranslate - 1}px) translateZ(-2px)`
                }

                setStyleValue(styleThumbnail)
            }
        }
        handleData();
    }, [])

    console.log()


    return (
        <>
            {isOpenGif && (
                <ModalAll>
                    <ModalContainer onClick={handleClose}></ModalContainer>
                    <MainCmtGif id="Main_GIF_Cmt" className="" style={styleMain}>
                        <MainCmtGifInherit tabIndex={-1}>
                            <MainGifContent className="">
                                <MainGifContentPosition role="dialog" style={{ transform: "translate(8px, 0px)" }}>
                                    <MainGifContentBg >
                                        <MainContent>
                                            <BodyContent >
                                                <InputBox >
                                                    <InputBoxPadding className="cxgpxx05 hv4rvrfc sj5x9vvc dati1w0a">
                                                        <LabelInputSearch >
                                                            <BoxIconSearch className="ijkhr0an pnx7fd3z sgqwj88q hzruof5a pmk7jnqg ax37mqq2 c0p38np4">
                                                                <i
                                                                    data-visualcompletion="css-img" className="hu5pjgll cwsop09l"
                                                                    style={{ backgroundImage: 'url("https://static.xx.fbcdn.net/rsrc.php/v3/yW/r/ttTXZ6XJuCZ.png")', backgroundPosition: "-102px -149px", backgroundSize: "auto", width: "16px", height: "16px", backgroundRepeat: "no-repeat", display: "inline-block" }}>

                                                                </i>
                                                            </BoxIconSearch>
                                                            <InputSearchGif
                                                                ref={inputRef}
                                                                dir="ltr"
                                                                aria-expanded="false"
                                                                aria-label="Tìm kiếm file GIF"
                                                                autoFocus={true}
                                                                autoComplete="off"
                                                                placeholder="Tìm kiếm"
                                                                role="combobox"
                                                                spellCheck="false"
                                                                aria-invalid="false"
                                                                onChange={handleChange}
                                                                type="text" value={valueInput} tabIndex={0} />
                                                        </LabelInputSearch>
                                                    </InputBoxPadding>
                                                </InputBox>
                                                <ContentImgGif>
                                                    <ContentScrollArea id="ScrollAreaCmtGif">
                                                        <BodyGifImg >
                                                            <CmtGif dataGif={dataGif} />
                                                            <BoxGifToAddImgItems className="ay7djpcl b5wmifdl hzruof5a pmk7jnqg rfua0xdk i09qtzwb"></BoxGifToAddImgItems>
                                                        </BodyGifImg>
                                                        <ScrollCustom
                                                            data-visualcompletion="ignore" data-thumb="1"
                                                            style={{ display: "block", right: "0px", height: `${lengthTotal}px` }}>

                                                        </ScrollCustom>

                                                        <ScrollThumbnail
                                                            data-visualcompletion="ignore" data-thumb="1" id="ScrollThumbnailCustomGif"
                                                            style={styleValue} >
                                                            <ScrollThumbnailColor>
                                                            </ScrollThumbnailColor>
                                                        </ScrollThumbnail>
                                                    </ContentScrollArea>
                                                </ContentImgGif>
                                                <ToAddDiv></ToAddDiv>
                                            </BodyContent>
                                        </MainContent>
                                    </MainGifContentBg>
                                    <div className="d06cv69u et4y5ytx cdcbzqsl goun2846 ccm00jje s44p3ltw mk2mc5f4 np69z8it tl61u9r6 bcctvi4p gcjuebxg kvs4odcb hzruof5a pmk7jnqg bssd97o4 n4j0glhw n7fi1qx3"
                                        style={{ transform: "translate(-10px, 7px) rotate(-45deg)" }}></div>
                                </MainGifContentPosition>
                            </MainGifContent>
                        </MainCmtGifInherit>
                        <div>
                            <div></div>
                        </div>
                    </MainCmtGif>
                </ModalAll>
            )}
        </>
    );
}
