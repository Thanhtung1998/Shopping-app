import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro'
import FeelIconCmt from './CmtFeelImgIcon/index'


export interface CmtFeelIconProps {
    openFeelCmt: boolean;
    setOpenFeelCmt: any;
}

const MainFeelIconCmt = styled.div`
    font-family: inherit;
    margin-right: -9999px;
    position: absolute;
    top: 0;
    left: 0;
`
const MainFeelBody = styled.div`
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

const DivBodyParent = styled.div`
    // display: block;
    font-family: inherit;
`

const DivBodyChild = styled.div`
    font-family: inherit;
    position: relative;
    margin-bottom: 15px;
`
const MainContent = styled.div`
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

const MainContentBody = styled.div`
    background: var(--card-background, #FFFFFF);
    border-radius: 2px;
    display: flex;
    flex-direction: column;
    height: 313px;
    justify-content: center;
    position: relative;
    text-align: center;
    width: 320px;

  

    & > div.uiScrollableArea.contentAfter:after {
        bottom: 0;
    }

    & > div.uiScrollableArea.contentBefore:before, div.uiScrollableArea.contentAfter:after {
        content: '';
        display: block;
        height: 2px;
        position: absolute;
        width: 100%;
        z-index: 99;
    }

    & > div.uiScrollableArea.contentBefore:before {
        top: 0;
    }
    & > div.uiScrollableArea.contentBefore:before, div.uiScrollableArea.contentAfter:after {
        content: '';
        display: block;
        height: 2px;
        position: absolute;
        width: 100%;
        z-index: 99;
    }

`

const DivUiScrollableArea = styled.div`

    font-family: inherit;

    &.uiScrollableArea {
        direction: ltr;
        height: 100%;
        overflow: hidden;
        position: relative
    }

    .uiScrollableAreaWrapHorizontal {
        overflow-x: auto
    }

    .uiScrollableArea .uiScrollableAreaWrap {
        overflow-y: scroll
    }

    &.uiScrollableArea.nofade div.uiScrollableAreaWrap,
    &.uiScrollableArea.fade div.uiScrollableAreaWrap {
        margin-right: -30px;
        padding-right: 30px;
    }

    &.uiScrollableArea.contentBefore:before {
        top: 0
    }

    &.uiScrollableArea.contentAfter:after {
        bottom: 0
    }


    &.uiScrollableArea.nofade div.uiScrollableAreaBody {
        padding-right: 10px;
    }

`

const DivUiScrollableAreaWrap = styled.div`

    font-family: inherit;

    &.uiScrollableAreaWrap {
        height: 100%;
        outline: none;
        overflow-x: hidden;
        overflow-y: scroll;
        position: relative;
    }

    &.scrollable {
        overflow-y: auto;
    }

    &.uiScrollableArea,
    &.uiScrollableAreaWrap {
        overflow-y: scroll;
    }

`

const DivUiScrollableAreaBody = styled.div`
    font-family: inherit;
    // border-box: none;
    box-sizing: content-box;
    
    &.uiScrollableAreaBody {
        direction: ltr;
        position: relative;
    }
`

const DivUiScrollableAreaContent = styled.div`
    font-family: inherit;
`
const DivUiContextualLayerParent = styled.div`
    font-family: inherit;
    &._2znm {
        text-align: left;
    }
    &.uiContextualLayerParent {
        position: relative;
    }

    & > div{
        font-family: inherit;
    }

`
const TagUlFeelCmt = styled.ul`

list-style-type: none;

&._1og- {
    align-items: center;
    background-color: var(--surface-background);
    border-radius: 0 0 2px 2px;
    border-top: 1px solid var(--divider, #dddfe2);
    display: flex;
    height: 32px;
    justify-content: center;
    opacity: 1;
    transition: opacity .2s;
}
&._43o4 {
    margin: 0;
    padding: 0;
    white-space: nowrap;
}
`
const TagLiFeelCmt = styled.li`

&._1ogy {
    cursor: pointer;
    line-height: 0;
    padding: 7px;
}
&._45hc, &._45hd {
    display: inline-block;
    list-style-type: none;
    max-width: 100%;
    position: relative;
}

&._45hc a{
    display: block;
    text-overflow: ellipsis;
    white-space: nowrap;
}

`

const TagAFeelCmt = styled.a`
font-family: inherit;

a:hover {
    text-decoration: underline;
}

&._468f {
    outline: none;
}
    color: #385898;
    cursor: pointer;
    text-decoration: none;
`
const TagSpanCategoryIcon = styled.span`
font-family: inherit;

&._1e8n {
    display: block;
    height: 16px;
    width: 16px;
}

&._1e8n.recent {
    background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/d-CLxy2kETR.png);
    background-repeat: no-repeat;
    background-size: auto;
    background-position: 0 -314px;
}

&._1e8n.smileys {
    background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/d-CLxy2kETR.png);
    background-repeat: no-repeat;
    background-size: auto;
    background-position: 0 -195px;
}

&._1e8n.animals {
    background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/d-CLxy2kETR.png);
    background-repeat: no-repeat;
    background-size: auto;
    background-position: 0 -280px;
}

&._1e8n.activities {
    background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/d-CLxy2kETR.png);
    background-repeat: no-repeat;
    background-size: auto;
    background-position: 0 -348px
}

&._1e8n.flags {
    background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/d-CLxy2kETR.png);
    background-repeat: no-repeat;
    background-size: auto;
    background-position: 0 -229px
}

&._1e8n.food {
    background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/d-CLxy2kETR.png);
    background-repeat: no-repeat;
    background-size: auto;
    background-position: 0 -42px
}

&._1e8n.objects {
    background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/d-CLxy2kETR.png);
    background-repeat: no-repeat;
    background-size: auto;
    background-position: 0 -144px
}

&._1e8n.symbols {
    background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/d-CLxy2kETR.png);
    background-repeat: no-repeat;
    background-size: auto;
    background-position: 0 -76px
}

&._1e8n.travel {
    background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/d-CLxy2kETR.png);
    background-repeat: no-repeat;
    background-size: auto;
    background-position: 0 -110px
}

li._1ogz &._1e8n.activities {
    background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/d-CLxy2kETR.png);
    background-repeat: no-repeat;
    background-size: auto;
    background-position: 0 -331px
}

li._1ogz &._1e8n.animals {
    background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/d-CLxy2kETR.png);
    background-repeat: no-repeat;
    background-size: auto;
    background-position: 0 -263px
}

li._1ogz &._1e8n.flags {
    background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/d-CLxy2kETR.png);
    background-repeat: no-repeat;
    background-size: auto;
    background-position: 0 -212px
}

li._1ogz &._1e8n.food {
    background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/d-CLxy2kETR.png);
    background-repeat: no-repeat;
    background-size: auto;
    background-position: 0 -25px
}

li._1ogz &._1e8n.objects {
    background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/d-CLxy2kETR.png);
    background-repeat: no-repeat;
    background-size: auto;
    background-position: 0 -127px
}

li._1ogz &._1e8n.recent {
    background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/d-CLxy2kETR.png);
    background-repeat: no-repeat;
    background-size: auto;
    background-position: 0 -297px
}

li._1ogz &._1e8n.smileys {
    background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/d-CLxy2kETR.png);
    background-repeat: no-repeat;
    background-size: auto;
    background-position: 0 -178px;
}

li._1ogz &._1e8n.symbols {
    background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/d-CLxy2kETR.png);
    background-repeat: no-repeat;
    background-size: auto;
    background-position: 0 -59px
}

li._1ogz &._1e8n.travel {
    background-image: url(https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/d-CLxy2kETR.png);
    background-repeat: no-repeat;
    background-size: auto;
    background-position: 0 -93px
}

`

const DivPosition = styled.div`
    font-family: inherit;
    --T68779821: -1px 1px 1px var(--shadow-inset);
    -webkit-box-shadow: var(--T68779821);
    box-shadow: -1px 1px 1px var(--shadow-inset);
    position: absolute;
    right: 0;
    top: 100%;
    pointer-events: none;
    border-top-width: 6px;
    border-bottom-style: solid;
    border-right-color: transparent;
    border-left-style: solid;
    border-left-width: 6px;
    border-top-color: transparent;
    border-bottom-color: var(--card-background);
    border-top-style: solid;
    border-bottom-width: 6px;
    border-right-style: solid;
    border-right-width: 6px;
    border-left-color: var(--card-background);
`

const DivUiScrollableAreaTrack = styled.div`

font-family: inherit;

&.uiScrollableAreaTrack {
    bottom: 2px;
    display: block;
    pointer-events: none;
    position: absolute;
    right: 2px;
    top: 2px;
    -webkit-user-select: none;
    width: 7px;
    z-index: 5;
}
`

const DivUiScrollableAreaGripper = styled.div`
font-family: inherit;

&.uiScrollableAreaGripper {
    background-clip: content-box;
    background-color: rgba(0, 0, 0, .4);
    border: 1px solid rgba(85, 85, 85, .6);
    border-radius: 7px;
    position: absolute;
    right: 0;
    transition: width 250ms;
    width: 5px;
    box-sizing: content-box; 
}
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

export function CmtFeelIcon(props: CmtFeelIconProps) {

    const { openFeelCmt, setOpenFeelCmt } = props;
    const [isCallData, setIsCallData] = useState(false);

    const [styleScroll, setStyleScroll] = useState({ height: "12px", top: "0px" })

    const styleMain = {
        zIndex: 100,
        transform: `translate(0px, 0px) translate(-100%, -100%)`
    }

    const handleClose = () => {
        setOpenFeelCmt(false)
    }

    const handleScroll = () => {
        let scrollY: any;
        const scrollArea = document.getElementById("ScrollArea");
        const AreaGripper = document.getElementById("AreaGripper");

        // console.log(AreaGripper);

        // console.log(ScrollArea);
        const heightTotal: any = scrollArea?.scrollHeight
        const offsetHeight: any = scrollArea?.offsetHeight;
        if (isCallData && openFeelCmt && AreaGripper) {
            scrollY = scrollArea?.scrollTop
            let Location = ((scrollY * ((offsetHeight - 16) / 14)) / (heightTotal - offsetHeight)) * 14;

            // console.log(scrollY, Location);

            AreaGripper.style.top = `${Location}px`;
            // setStyleScroll({ height: "12px", top: `${Location}px` });
        }
        // console.log(scrollY);

    }

    const getRelativePos = (element: any) => {
        // bounding Area Scroll
        // console.log(element);
        let pPos = element.parentNode.getBoundingClientRect(); // parent pos
        // bounding clientRect
        let cPos = element.getBoundingClientRect(); // target pos
        // console.log(pPos, cPos);
        const pos = {
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
        };
        // console.log(element.parentNode.scrollTop);
        //ex: cPos = 2361 - 79 + 0
        pos.top = cPos.top - pPos.top + element.parentNode.scrollTop;
        pos.right = cPos.right - pPos.right;
        pos.bottom = cPos.bottom - pPos.bottom;
        pos.left = cPos.left - pPos.left;

        return pos;
    }

    const scrollTo = (element: any, to: any, duration: any, onDone: any) => {
        let start = element.scrollTop,
            change = to - start,
            startTime = performance.now(),
            val, now, elapsed, t;


        const animateScroll = () => {
            now = performance.now();
            elapsed = (now - startTime) / 1000;
            t = (elapsed / duration);

            element.scrollTop = start + change * easeInOutQuad(t);

            if (t < 1)
                window.requestAnimationFrame(animateScroll);
            else
                onDone && onDone();
        };

        animateScroll();
    }

    const easeInOutQuad = (t: any) => { return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t };

    const scrollToElm = (container: any, elm: any, duration: any) => {
        // container parent Area Scroll Box
        let pos = getRelativePos(elm);
        // Position Element top
        // console.log(pos);
        scrollTo(container, pos.top, duration, false);  // duration in seconds
    }



    useEffect(() => {
        const ulCategory = document.querySelector('._1og-._43o4._4470');
        const categories = ulCategory?.querySelectorAll('._1ogy._45hc');
        const selectorElement = ulCategory?.querySelectorAll("._3m1v._468f");
        // console.log(selectorElement)
        const activeScrollDiv = document.querySelectorAll("div.main__div--feel--icon");
        const scrollArea = document.getElementById("ScrollArea");
        const handleScroll = (scrollPosition: any) => {
            if (isCallData === true) {
                activeScrollDiv?.forEach((items: any, index: any) => {
                    // console.log();
                    if (scrollPosition > items.offsetTop - items.offsetHeight * 0.25 && scrollPosition < items.offsetHeight - items.offsetHeight * 0.25 + items.offsetTop) {
                        const activeElementOld = ulCategory?.querySelector("._1ogy._1ogz._45hc._1hqh");
                        const checkValue = activeElementOld?.querySelector('[aria-selected = true]');
                        const ariaLabel = checkValue?.getAttribute('aria-label');
                        let currentId = items.attributes.id.value;
                        // console.log(currentId, ariaLabel);
                        if (currentId !== ariaLabel) {
                            handleActiveCss(currentId);
                        }
                    }
                    // if (scrollPosition = 0) {
                    //     console.log("test");
                    // }
                    // if (scrollPosition > items?.offsetTop && scrollPosition < items.offsetTop + items.offsetHeight - 120) {
                    //     let currentId = items.attributes.id.value;
                    //     handleActiveCss(currentId);
                    // }
                })
            }
        }

        const handleActiveCss = (currentId: any) => {

            if (openFeelCmt) {
                selectorElement?.forEach((items: any, index: number) => {
                    const attributeName = items.getAttribute("aria-label");
                    if (currentId === attributeName) {
                        // console.log(attributeName);
                        const activeElementOld = ulCategory?.querySelector("._1ogy._1ogz._45hc._1hqh");
                        activeElementOld?.querySelector('[aria-selected = true]')?.setAttribute("tabindex", "-1");
                        activeElementOld?.querySelector('[aria-selected = true]')?.setAttribute("aria-selected", "false");
                        items.setAttribute("tabindex", "0");
                        items.setAttribute("aria-selected", "true");
                        if (categories) {
                            activeElementOld?.classList.remove("_1ogz", "_1hqh");
                            const activeElement: any = categories[index];
                            activeElement?.classList.add("_1ogz", "_1hqh")
                            // console.log("data change name:", attributeName, activeElement)
                            // console.log(activeElementOld);
                        }
                    }
                });
            }

        }

        const handleActiveClick = (items: any, index: number) => {
            const attributeName = items.getAttribute("aria-label");
            // console.log(attributeName)
            const el = document.getElementById(attributeName);
            /* event click Scroll */
            scrollToElm(scrollArea, el, 2);
            /* event active Scroll */
            const activeElementOld = ulCategory?.querySelector("._1ogy._1ogz._45hc._1hqh");
            activeElementOld?.querySelector('[aria-selected = true]')?.setAttribute("tabindex", "-1");
            activeElementOld?.querySelector('[aria-selected = true]')?.setAttribute("aria-selected", "false");
            items.setAttribute("tabindex", "0");
            items.setAttribute("aria-selected", "true");
            if (categories) {
                activeElementOld?.classList.remove("_1ogz", "_1hqh");
                const activeElement: any = categories[index];
                activeElement?.classList.add("_1ogz", "_1hqh")
                // console.log("data change name:", attributeName, activeElement)
                // console.log(activeElementOld);
            }
        }


        if (openFeelCmt) {

            selectorElement?.forEach((items: any, index: number) => {
                items.addEventListener("click", () => {
                    handleActiveClick(items, index);
                });

            })

            // event Listener Scroll
            scrollArea?.addEventListener("scroll", () => {
                let scrollPosition: any = scrollArea?.scrollTop;
                handleScroll(scrollPosition);
            });
        }

        return () => selectorElement?.forEach((items: any, index: number) => {
            items.removeEventListener("click", () => {
                handleActiveClick(items, index);
                // scrollToElm(scrollArea, el, 600);
                // console.log("data change name:", attributeName)
            });
            items.removeEventListener("scroll", () => {
                let scrollPosition: any = scrollArea?.scrollTop;
                handleScroll(scrollPosition);
            });
        })



    }, [openFeelCmt, isCallData])

    useEffect(() => {

        const handleClickEmoji = () => {
            const MainFeel = document.querySelectorAll("div.main__div--feel--icon");
            if (MainFeel) {
                MainFeel?.forEach((element: any, index: any) => {
                    const ElementChild = element.querySelectorAll("div._5zfs")
                    ElementChild.forEach((element: any, index: any) => {
                        element.addEventListener("click", () => {
                            // console.log(index + 1);
                            setOpenFeelCmt(false);
                        })
                    })
                })
                // console.log(MainFeel)
            }
        }

        if (openFeelCmt && isCallData) {
            handleClickEmoji();
        }


        return () => {

            const MainFeel = document.querySelectorAll("div.main__div--feel--icon");
            MainFeel.forEach((element: any, index: any) => {
                // console.log(element);
                const ElementChild = element.querySelectorAll("div._5zfs")
                ElementChild.forEach((element: any, index: any) => {
                    element.removeEventListener("click", () => {
                    })
                })
            })
        }

    }, [openFeelCmt, isCallData])



    useEffect(() => {

        if (openFeelCmt === false) {
            setIsCallData(false);
            setStyleScroll({ height: "12px", top: "0px" })
        }

    }, [openFeelCmt])


    return (
        <>
            {openFeelCmt && (
                <ModalAll>
                    <ModalContainer onClick={handleClose}></ModalContainer>
                    <MainFeelIconCmt id="MainLLocation" style={styleMain} >

                        <MainFeelBody className="" tabIndex={-1}>
                            <DivBodyParent className="">
                                <DivBodyChild role="dialog" style={{ transform: "translate(8px, 0px)" }}>
                                    <MainContent>
                                        <MainContentBody >
                                            <DivUiScrollableArea className="uiScrollableArea nofade contentAfter" style={{ height: 320, width: 320 }}>
                                                <DivUiScrollableAreaWrap onScroll={handleScroll} id="ScrollArea" className="uiScrollableAreaWrap scrollable" style={{ overscrollBehavior: "contain" }}>
                                                    <DivUiScrollableAreaBody className="uiScrollableAreaBody" style={{ marginRight: "-17px", width: "320px" }}>
                                                        <DivUiScrollableAreaContent className="uiScrollableAreaContent">
                                                            <DivUiContextualLayerParent className="uiContextualLayerParent _2znm">
                                                                <div className="">
                                                                    {/* Icon Here */}
                                                                    <FeelIconCmt setIsCallData={setIsCallData} />
                                                                </div>
                                                            </DivUiContextualLayerParent>
                                                        </DivUiScrollableAreaContent>
                                                    </DivUiScrollableAreaBody>
                                                </DivUiScrollableAreaWrap>
                                                <DivUiScrollableAreaTrack className="uiScrollableAreaTrack">
                                                    <DivUiScrollableAreaGripper id="AreaGripper" className="uiScrollableAreaGripper" style={styleScroll}>
                                                        {/* Change Value top */}
                                                    </DivUiScrollableAreaGripper>
                                                </DivUiScrollableAreaTrack>
                                            </DivUiScrollableArea>
                                            <TagUlFeelCmt className="_1og- _43o4 _4470" role="tablist">
                                                <TagLiFeelCmt className="_1ogy _45hc" role="presentation">
                                                    <TagAFeelCmt aria-label="Recent" aria-haspopup="false"
                                                        role="tab" tabIndex={-1} className="_3m1v _468f" aria-selected="false">
                                                        <TagSpanCategoryIcon className="_1e8n recent">
                                                        </TagSpanCategoryIcon>
                                                    </TagAFeelCmt>
                                                </TagLiFeelCmt>
                                                <TagLiFeelCmt className="_1ogy _1ogz _45hc _1hqh" role="presentation">
                                                    <TagAFeelCmt
                                                        aria-label="Smileys &amp; People" aria-haspopup="false" role="tab" tabIndex={0}
                                                        className="_3m1v _468f" aria-selected="true">
                                                        <TagSpanCategoryIcon className="_1e8n smileys">
                                                        </TagSpanCategoryIcon>
                                                    </TagAFeelCmt>
                                                </TagLiFeelCmt>
                                                <TagLiFeelCmt className="_1ogy _45hc" role="presentation">
                                                    <TagAFeelCmt aria-label="Animals &amp; Nature"
                                                        aria-haspopup="false" role="tab" tabIndex={-1} className="_3m1v _468f"
                                                        aria-selected="false">
                                                        <TagSpanCategoryIcon className="_1e8n animals">
                                                        </TagSpanCategoryIcon>
                                                    </TagAFeelCmt>
                                                </TagLiFeelCmt>
                                                <TagLiFeelCmt className="_1ogy _45hc" role="presentation">
                                                    <TagAFeelCmt aria-label="Food &amp; Drink"
                                                        aria-haspopup="false" role="tab" tabIndex={-1} className="_3m1v _468f"
                                                        aria-selected="false">
                                                        <TagSpanCategoryIcon className="_1e8n food">
                                                        </TagSpanCategoryIcon>
                                                    </TagAFeelCmt>
                                                </TagLiFeelCmt>
                                                <TagLiFeelCmt className="_1ogy _45hc" role="presentation">
                                                    <TagAFeelCmt aria-label="Activities"
                                                        aria-haspopup="false" role="tab" tabIndex={-1} className="_3m1v _468f"
                                                        aria-selected="false">
                                                        <TagSpanCategoryIcon className="_1e8n activities">
                                                        </TagSpanCategoryIcon>
                                                    </TagAFeelCmt>
                                                </TagLiFeelCmt>
                                                <TagLiFeelCmt className="_1ogy _45hc" role="presentation">
                                                    <TagAFeelCmt aria-label="Travel &amp; Places"
                                                        aria-haspopup="false" role="tab" tabIndex={-1} className="_3m1v _468f"
                                                        aria-selected="false">
                                                        <TagSpanCategoryIcon className="_1e8n travel">
                                                        </TagSpanCategoryIcon>
                                                    </TagAFeelCmt>
                                                </TagLiFeelCmt>
                                                <TagLiFeelCmt className="_1ogy _45hc" role="presentation">
                                                    <TagAFeelCmt aria-label="Objects"
                                                        aria-haspopup="false" role="tab" tabIndex={-1} className="_3m1v _468f"
                                                        aria-selected="false">
                                                        <TagSpanCategoryIcon className="_1e8n objects">
                                                        </TagSpanCategoryIcon>
                                                    </TagAFeelCmt>
                                                </TagLiFeelCmt>
                                                <TagLiFeelCmt className="_1ogy _45hc" role="presentation">
                                                    <TagAFeelCmt aria-label="Symbols"
                                                        aria-haspopup="false" role="tab" tabIndex={-1} className="_3m1v _468f"
                                                        aria-selected="false">
                                                        <TagSpanCategoryIcon className="_1e8n symbols">
                                                        </TagSpanCategoryIcon>
                                                    </TagAFeelCmt>
                                                </TagLiFeelCmt>
                                                <TagLiFeelCmt className="_1ogy _45hc" role="presentation">
                                                    <TagAFeelCmt aria-label="Flags" aria-haspopup="false"
                                                        role="tab" tabIndex={-1} className="_3m1v _468f" aria-selected="false">
                                                        <TagSpanCategoryIcon className="_1e8n flags">
                                                        </TagSpanCategoryIcon>
                                                    </TagAFeelCmt>
                                                </TagLiFeelCmt>
                                            </TagUlFeelCmt>
                                        </MainContentBody>
                                    </MainContent>
                                    <DivPosition className=""
                                        style={{ transform: "translate(-10px, 7px) rotate(-45deg)" }}></DivPosition>
                                </DivBodyChild>
                            </DivBodyParent>
                        </MainFeelBody>
                        <div>
                            <div></div>
                        </div>
                    </MainFeelIconCmt>
                </ModalAll>
            )}

        </>
    );
}
