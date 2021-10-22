import * as React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro'

export interface FeelProps {
}

const BoxFeelImg = styled.div`

bottom: -11px;
position: absolute;
right: 2px;
z-index: 0;
font-family: inherit;

    & > div {
      font-family: inherit;
    }

`
const FeelSpanImg = styled.span`
    font-family: inherit;
    align-content: inherit;
    flex-basis: inherit;
    max-height: inherit;
    flex-grow: inherit;
    flex-shrink: inherit;
    max-width: inherit;
    flex-direction: inherit;
    width: inherit;
    min-height: inherit;
    min-width: inherit;
    justify-content: inherit;
    height: inherit;
    align-self: inherit;
    display: inherit;
    align-items: inherit;
`

const FeelDivImgParent = styled.div`
    font-family: inherit;
    padding-right: 0;
    box-sizing: border-box;
    padding-bottom: 0;
    border-bottom-right-radius: inherit;
    margin-bottom: 0;
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
    display: inline;
    border-top-left-radius: inherit;
    position: relative;
    margin-top: 0;
    border-bottom-left-radius: inherit;
    padding-top: 0;
    text-align: inherit;
    margin-left: 0;
    background-color: transparent;
    touch-action: manipulation;
    margin-right: 0;
    border-top-right-radius: inherit;
    -webkit-user-select: none;
    padding-left: 0;
    border-left: 0;
    border-top: 0;
    border-right: 0;
    border-bottom: 0;
    list-style: none;
    outline: none;
    text-decoration: none;

    :hover div.CssOpacity{
      opacity: 1;
    }

`

const FeelDivChildren = styled.div`
    font-family: inherit;
    font-size: .6875rem;
    padding-bottom: 2px;
    border-bottom-left-radius: 10px;
    padding-right: 2px;
    padding-top: 2px;
    --T68779821: 0 1px 3px 0 var(--shadow-2);
    -webkit-box-shadow: var(--T68779821);
    box-shadow: 0 1px 3px 0 var(--shadow-2);
    display: flex;
    padding-left: 2px;
    background-color: var(--popover-background);
    border-top-right-radius: 10px;
    height: 16px;
    border-bottom-right-radius: 10px;
    border-top-left-radius: 10px;
    align-items: center;
`

const FeelDivChildren2 = styled.div`
    font-family: inherit;
    flex-direction: row-reverse;
    display: flex;
    align-items: center;
    padding-left: 4px;
`

const FeelSpanChildren2 = styled.span`
    font-family: inherit;
    margin-left: -4px;
    border-bottom-left-radius: 10px;
    position: relative;
    display: flex;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-top-left-radius: 10px;
    border-right: 2px solid var(--popover-background);
    outline: none;

    img{
      border: 0
    }

`

const SpanNumberTotalFeel = styled.span`
    font-family: inherit;
    padding-bottom: 0;
    padding-right: 2px;
    color: var(--secondary-text);
    font-weight: normal;
    padding-top: 0;
    line-height: 1.2308;
    padding-left: 2px;
    white-space: nowrap;
    font-size: .8125rem;
`

const FeelDivDataVisual = styled.div`
    font-family: inherit;
    border-bottom-right-radius: inherit;
    position: absolute;
    transition-timing-function: var(--fds-animation-fade-out);
    right: 0;
    border-top-left-radius: inherit;
    top: 0;
    border-bottom-left-radius: inherit;
    left: 0;
    bottom: 0;
    pointer-events: none;
    transition-duration: var(--fds-duration-extra-extra-short-out);
    opacity: 1;
    transition-property: opacity;
    border-top-right-radius: inherit;
    
`

export function FeelCmtHistory(props: FeelProps) {
    return (
        <BoxFeelImg>
            <div>
                <FeelSpanImg className="">
                    <FeelDivImgParent aria-label="957 cảm xúc; xem ai đã bày tỏ cảm xúc về bình luận này" className="" role="button" tabIndex={0}>
                        <FeelDivChildren className="">
                            <FeelDivChildren2 className="">
                                <FeelSpanChildren2 className="">
                                    <img className="" height="16" role="presentation" src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='10.25%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23FEEA70'/%3e%3cstop offset='100%25' stop-color='%23F69B30'/%3e%3c/linearGradient%3e%3clinearGradient id='d' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23472315'/%3e%3cstop offset='100%25' stop-color='%238B3A0E'/%3e%3c/linearGradient%3e%3clinearGradient id='e' x1='50%25' x2='50%25' y1='0%25' y2='81.902%25'%3e%3cstop offset='0%25' stop-color='%23FC607C'/%3e%3cstop offset='100%25' stop-color='%23D91F3A'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0.921365489 0 0 0 0 0.460682745 0 0 0 0 0 0 0 0 0.35 0'/%3e%3c/filter%3e%3cpath id='b' d='M16 8A8 8 0 110 8a8 8 0 0116 0'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='url(%23d)' d='M3 8.008C3 10.023 4.006 14 8 14c3.993 0 5-3.977 5-5.992C13 7.849 11.39 7 8 7c-3.39 0-5 .849-5 1.008'/%3e%3cpath fill='url(%23e)' d='M4.541 12.5c.804.995 1.907 1.5 3.469 1.5 1.563 0 2.655-.505 3.459-1.5-.551-.588-1.599-1.5-3.459-1.5s-2.917.912-3.469 1.5'/%3e%3cpath fill='%232A3755' d='M6.213 4.144c.263.188.502.455.41.788-.071.254-.194.369-.422.371-.78.011-1.708.255-2.506.612-.065.029-.197.088-.332.085-.124-.003-.251-.058-.327-.237-.067-.157-.073-.388.276-.598.545-.33 1.257-.48 1.909-.604a7.077 7.077 0 00-1.315-.768c-.427-.194-.38-.457-.323-.6.127-.317.609-.196 1.078.026a9 9 0 011.552.925zm3.577 0a8.953 8.953 0 011.55-.925c.47-.222.95-.343 1.078-.026.057.143.104.406-.323.6a7.029 7.029 0 00-1.313.768c.65.123 1.363.274 1.907.604.349.21.342.44.276.598-.077.18-.203.234-.327.237-.135.003-.267-.056-.332-.085-.797-.357-1.725-.6-2.504-.612-.228-.002-.351-.117-.422-.37-.091-.333.147-.6.41-.788z'/%3e%3c/g%3e%3c/svg%3e" width="16" />
                                </FeelSpanChildren2>
                                <FeelSpanChildren2 className="l9j0dhe7 lzcic4wl rl04r1d5 j83agx80 ns4ygwem fykbt5ly hgaippwi fni8adji nl6bj373">
                                    <img className="" height="16" role="presentation" src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%23FF6680'/%3e%3cstop offset='100%25' stop-color='%23E61739'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0.710144928 0 0 0 0 0 0 0 0 0 0.117780134 0 0 0 0.349786932 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 100 16A8 8 0 008 0z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M10.473 4C8.275 4 8 5.824 8 5.824S7.726 4 5.528 4c-2.114 0-2.73 2.222-2.472 3.41C3.736 10.55 8 12.75 8 12.75s4.265-2.2 4.945-5.34c.257-1.188-.36-3.41-2.472-3.41'/%3e%3c/g%3e%3c/svg%3e" width="16" />
                                </FeelSpanChildren2>
                                <FeelSpanChildren2 className="l9j0dhe7 lzcic4wl rl04r1d5 j83agx80 ns4ygwem fykbt5ly hgaippwi fni8adji nl6bj373">
                                    <img className="" height="16" role="presentation" src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e" width="16" />
                                </FeelSpanChildren2>
                            </FeelDivChildren2>
                            <SpanNumberTotalFeel className="">957</SpanNumberTotalFeel>
                        </FeelDivChildren>
                        <FeelDivDataVisual className="CssOpacity" data-visualcompletion="ignore">
                        </FeelDivDataVisual>
                    </FeelDivImgParent>
                </FeelSpanImg>
            </div>
        </BoxFeelImg>
    );
}
