import * as React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import LikeSvg from './SvgEmoji/like1.svg';
import LoveSvg from './SvgEmoji/love2.svg';
import HahaSvg from './SvgEmoji/haha2.svg';
import CareSvg from './SvgEmoji/thuongthuong.svg';
import AngrySvg from './SvgEmoji/angry2.svg';
import SadSvg from './SvgEmoji/sad2.svg';
import WowSvg from './SvgEmoji/wow2.svg';
import { SCREEN } from '../../components/responsive'


export interface IAppProps {
}

const ReactReactionContainer = styled.div`

.feed .like-btn {
    width: 30px;
    height: 15px;
    // background: green;
    position: absolute;
    bottom: 0px;
    left: 0px;
    cursor: pointer;
}

.feed .like-btn::before {
    content: "";
    opacity: 0;
    display: block;
    // background: red;
    width: 30px;
    height: 15px;
    position: absolute;
    top: -10px;
    left: 0;
}

.feed .like-btn .reaction-box {
    position: absolute;
    left: 0px;
    bottom: 20px;
    display: none;
    font-family: inherit;
    animation-name: e5hlw9lw-B;
    border-top-left-radius: 40px;
    animation-duration: .2s;
    pointer-events: auto;
    border-top-right-radius: 40px;
    display: none;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
    white-space: nowrap;
    padding-top: 5px;
    --T68779821: 0 0 0 1px var(--media-inner-border),0 2px 2px var(--shadow-1);
    -webkit-box-shadow: var(--T68779821);
    box-shadow: 0 0 0 1px var(--media-inner-border),0 2px 2px var(--shadow-1);
    border-bottom-left-radius: 40px;
    background-color: var(--card-background);
    border-bottom-right-radius: 40px;
    padding-bottom: 5px;

}

@keyframes e5hlw9lw-B{
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

.feed .like-btn .reaction-box .reaction-main{
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
}

.feed .like-btn .reaction-box .reaction-main .reaction-box-icon{
    font-family: inherit;
    display: flex;
}


.feed .like-btn .reaction-box .reaction-main .reaction-box-icon .reaction-icon {
    font-family: inherit;
    min-height: 0;
    padding-right: 0;
    animation-timing-function: ease-in-out;
    box-sizing: border-box;
    padding-bottom: 0;
    border-bottom-right-radius: inherit;
    flex-shrink: 0;
    margin-bottom: 0;
    animation-name: qyfscavd-B;
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
    border-top-left-radius: inherit;
    animation-duration: .2s;
    flex-basis: auto;
    position: relative;
    margin-top: 0;
    margin-left: 4px;
    border-bottom-left-radius: inherit;
    padding-top: 0;
    display: flex;
    animation-fill-mode: forwards;
    text-align: inherit;
    min-width: 0;
    animation-iteration-count: 1;
    background-color: transparent;
    touch-action: manipulation;
    z-index: 0;
    margin-right: 4px;
    flex-direction: row;
    align-items: center;
    border-top-right-radius: inherit;
    -webkit-user-select: none;
    padding-left: 0;
    border-right-color: var(--always-dark-overlay);
    border-left-width: 0;
    border-bottom-style: solid;
    border-top-width: 0;
    border-bottom-color: var(--always-dark-overlay);
    border-left-color: var(--always-dark-overlay);
    border-right-width: 0;
    border-top-color: var(--always-dark-overlay);
    border-left-style: solid;
    border-top-style: solid;
    border-right-style: solid;
    border-bottom-width: 0;
    list-style: none;
    outline: none;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
 
    & > div{
        font-family: inherit;
        height: 39px;
        width: 39px;

        @media (max-width: ${SCREEN.sm}){
            height: 30px;
            width: 30px;
        }

        & > div.box-img-or-canvas{
            display: inline-flex;
            & > div.img-or-canvas{
                font-family: inherit;
                transition-duration: .2s;
                transition-property: transform;
                opacity: 0;
                transform: translate(0, 100px) scale(0);
                & > img{
                    height: 100%;
                    width: 100%;
                }
            }
        }
    }

    & > div.reaction-icon-text{
        font-family: inherit;
        font-size: .75rem;
        animation-name: e5hlw9lw-B;
        color: var(--always-white);
        color: var(--primary-text-on-media,var(--always-white));
        border-top-left-radius: 15px;
        padding-left: 5px;
        left: 50%;
        position: absolute;
        padding-bottom: 3px;
        border-bottom-right-radius: 15px;
        font-weight: bold;
        animation-duration: .2s;
        display: none;
        padding-top: 3px;
        border-bottom-left-radius: 15px;
        padding-right: 5px;
        animation-fill-mode: forwards;
        background-color: var(--shadow-8);
        border-top-right-radius: 15px;
        animation-iteration-count: 1;
        bottom: calc(123% + 5px);
        transform: translateX(-50%);    
    }

}



.feed .like-btn .reaction-box .reaction-icon label {
    padding: 3px 5px 3px 5px;
    position: relative;
    top: -24px;
    border-radius: 10px;
    font-size: 11px;
    color: #FFF;
    background: #333;
    visibility: hidden;
}


.feed .like-btn:hover {
    // background: #718C00;
}

.feed .like-btn:hover .reaction-box {
    display: block;
}

.feed .like-btn:hover .reaction-box .reaction-main .reaction-box-icon .reaction-icon .box-img-or-canvas .img-or-canvas.show {
    opacity: 1;
    transform: translate(0, 0) scale(1);
}

.feed .like-btn:hover .reaction-box .reaction-main .reaction-box-icon .reaction-icon .box-img-or-canvas .img-or-canvas:hover {
    transform: scale(1.2);
    transform-origin: bottom;
}

.feed .like-btn:hover .reaction-box .reaction-main .reaction-box-icon .reaction-icon:hover label {
    visibility: visible;
}

@keyframes qyfscavd-B{
0% {
    pointer-events: none;
    transform: translateY(100%);
}
99% {
    pointer-events: none;
}
100% {
    pointer-events: auto;
    transform: translateY(0);
}
}
 

`

export function ReactReaction(props: IAppProps) {

    const [lengthElement, setLengthElement] = useState(0);

    useEffect(() => {
        // const likeRead = document.querySelectorAll(".Span--Text--Like");

        const likeBtn = document.querySelectorAll(".like-btn")

        const divCss = document.querySelectorAll(".img-or-canvas");
        let rect: any;

        // likeBtn.forEach(function (element, index) {
        //     rect = element.getBoundingClientRect();
        //     arrayRect.push(rect);
        // });

        let arrayRect: any = [];

        function update() {
            let arrayRect2: any = [];

            likeBtn.forEach(function (element, index) {
                rect = element.getBoundingClientRect();
                arrayRect2.push(rect);
            });

            arrayRect = arrayRect2
            // console.log(arrayRect)
        }



        document.addEventListener('scroll', update);
        update();


        // console.log(arrayRect);


        setLengthElement(divCss.length);
        // console.log(divCss.slice(7));

        // 44 - 25

        likeBtn.forEach(function (element, index) {

            element.addEventListener('mouseenter', function (e: any) {
                let mousex = e.clientX; // Gets Mouse X
                let mousey = e.clientY; // Gets Mouse Y
                var zoomer = e.currentTarget;
                let x = e.offsetX / zoomer.offsetWidth * 100;
                let y1 = e.offsetY / zoomer.offsetHeight * 100;
                let y = e.y
                // console.log(y)
                // Prints data
                // console.log([mousex, mousey, y1, y, arrayRect[2].y]);

                // console.log(`x: ${e.x} | y: ${e.y}`, x, y);
                let lengthDivCss = divCss.length;

                const functionTimings = (element: any, index: any) => {
                    setTimeout(function () {
                        element.classList.add("show")
                    }, index * 50);
                };



                for (let i = 0; i < lengthDivCss; i++) {
                    let key: any
                    if (i < 7) {
                        for (let j = 0; j < arrayRect.length; j++) {
                            if ((y) > (arrayRect[j].y - 18) && (y) < (arrayRect[j].y + 18)) {
                                key = i + (7 * j);

                                var element = divCss[key];
                                // console.log(key)
                                functionTimings(element, i);
                            } else {
                                key = i
                                var element = divCss[key];
                                functionTimings(element, i);
                                // return check;
                            }
                        }
                    }
                    else {
                        return
                    }
                    // console.log(element)
                };
            });
        });
        likeBtn.forEach(function (element: any, index: any) {
            element.addEventListener("mouseleave", function () {
                divCss.forEach(function (element, index: any) {
                    setTimeout(function () {
                        element.classList.remove("show")
                    });
                });
            });
        });

        return () => {

            likeBtn.forEach(function (element, index) {

                element.removeEventListener('mouseenter', function (e: any) {
                    let mousex = e.clientX; // Gets Mouse X
                    let mousey = e.clientY; // Gets Mouse Y
                    var zoomer = e.currentTarget;
                    let x = e.offsetX / zoomer.offsetWidth * 100;
                    let y1 = e.offsetY / zoomer.offsetHeight * 100;
                    let y = e.y
                    // console.log(y)
                    // Prints data
                    // console.log([mousex, mousey, y1, y, arrayRect[2].y]);

                    // console.log(`x: ${e.x} | y: ${e.y}`, x, y);
                    let lengthDivCss = divCss.length;

                    const functionTimings = (element: any, index: any) => {
                        setTimeout(function () {
                            element.classList.add("show")
                        }, index * 50);
                    };



                    for (let i = 0; i < lengthDivCss; i++) {
                        let key: any
                        if (i < 7) {
                            for (let j = 0; j < arrayRect.length; j++) {
                                if ((y) > (arrayRect[j].y - 18) && (y) < (arrayRect[j].y + 18)) {
                                    key = i + (7 * j);

                                    var element = divCss[key];
                                    // console.log(key)
                                    functionTimings(element, i);
                                } else {
                                    key = i
                                    var element = divCss[key];
                                    functionTimings(element, i);
                                    // return check;
                                }
                            }
                        }
                        else {
                            return
                        }
                        // console.log(element)
                    };
                });
            });

            likeBtn.forEach(function (element: any, index: any) {
                element.removeEventListener("mouseleave", function () {
                    divCss.forEach(function (element, index: any) {
                        setTimeout(function () {
                            element.classList.remove("show")
                        });
                    });
                });
            });
            clearTimeout();

            document.removeEventListener('scroll', update);

        }
    }, [])


    return (
        <ReactReactionContainer>
            <div className="feed">
                <a className="like-btn">
                    <div className="reaction-box">
                        <div className="reaction-main">
                            <div className="reaction-box-icon" >
                                <div aria-label="Thích" className="reaction-icon" role="button" tabIndex={0}>
                                    <div >
                                        <div className="box-img-or-canvas">
                                            <div className="img-or-canvas" style={{ display: "inline-block", lineHeight: "0", fontSize: "0px" }}> <img src={LikeSvg} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="reaction-icon-text">Thích</div>
                                </div>

                                <div aria-label="Yêu thích" className="reaction-icon" role="button" tabIndex={0}>
                                    <div >
                                        <div className="box-img-or-canvas">
                                            <div className="img-or-canvas" style={{ display: "inline-block", lineHeight: "0", fontSize: "0px" }}>  <img src={LoveSvg} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="reaction-icon-text">Yêu thích</div>
                                </div>
                                <div aria-label="Thương thương" className="reaction-icon" role="button" tabIndex={0}>
                                    <div >
                                        <div className="box-img-or-canvas">
                                            <div className="img-or-canvas" style={{ display: "inline-block", lineHeight: "0", fontSize: "0px" }}> <img src={CareSvg} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="reaction-icon-text">Thương thương</div>
                                </div>

                                <div aria-label="Haha" className="reaction-icon" role="button" tabIndex={0}>
                                    <div >
                                        <div className="box-img-or-canvas">
                                            <div className="img-or-canvas" style={{ display: "inline-block", lineHeight: "0", fontSize: "0px" }}>  <img src={HahaSvg} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="reaction-icon-text">Haha</div>
                                </div>

                                <div aria-label="Wow" className="reaction-icon" role="button" tabIndex={0}>
                                    <div >
                                        <div className="box-img-or-canvas">
                                            <div className="img-or-canvas" style={{ display: "inline-block", lineHeight: "0", fontSize: "0px" }}>  <img src={WowSvg} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="reaction-icon-text">Wow</div>
                                </div>

                                <div aria-label="Buồn" className="reaction-icon" role="button" tabIndex={0}>
                                    <div >
                                        <div className="box-img-or-canvas">
                                            <div className="img-or-canvas" style={{ display: "inline-block", lineHeight: "0", fontSize: "0px" }}> <img src={SadSvg} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="reaction-icon-text">Buồn</div>
                                </div>


                                <div aria-label="Phẫn nộ" className="reaction-icon" role="button" tabIndex={0}>
                                    <div >
                                        <div className="box-img-or-canvas">
                                            <div className="img-or-canvas" style={{ display: "inline-block", lineHeight: "0", fontSize: "0px" }}>  <img src={AngrySvg} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="reaction-icon-text">Phẫn nộ</div>
                                </div>

                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </ReactReactionContainer>
    );
}
