import React, { useState, useRef, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro'
import { CmtHistory } from './CmtHistory'


export interface CommentProps {
    idProduct: string;
    stateComment: any;
}

const CommentSection = styled.section`
    ${tw`
        w-full
    `}
`

const BoxBorder = styled.div`
    ${tw`
        w-full
    `}
`

const BoxInput = styled.div`
    background-color: var(--surface-background);
    ${tw`
        w-full
        rounded-xl
    `}

`

const BoxInputContainer = styled.div`
    padding: 10px;
    // border: 1px solid #ededed;
    width: 100%;
    ${tw`
        rounded-md
        shadow-md
    `}

form{
    width: auto;
    // height: auto;
    padding-bottom: 20px;
    & > div > textarea{
        ${tw`
        w-full
        text-gray-700
        `
    }
        font-size: 16px;
        line-height: 29px;
        border-radius: 5px;
        border-color: #bfbfbf;
        padding: 15px 30px;
        cursor: text;
        height: 59px;
        max-height: 109px;
        overflow: hidden;
        outline: none;
        resize:none;
        :is(:focus, : valid){
            border-color: #4671EA;
            border-width: 2px;
            line-height: 25px;
        }

    }

    & > label.labels{
        font-weight: 600;
        font-size: 16px;
        color: var(--dark);
    }

    & > div.textarea_style{
        margin-top: 6px;
        width: 100%;
        position: relative;
        top: 0;
        left: 0;
        font-size: 16px;
    }

    & > div > textarea::-webkit-scrollbar {
        width: 0px;
    }

    // & > div > textarea::-webkit-scrollbar-track {
    //     -webkit-box-shadow:inset 0 0 10px #BDDAE0;
    // }

    // & > div > textarea::-webkit-scrollbar-thumb {
    //     background-color: #0B8FF9;
    // }

    & span.textarea_count{
        margin-top: 5px;
        float: right;
        font-size: 12px;
        color: var(--dark) ;
    }

    &> div >button.btn--comment{
        position: absolute;
        right: 8px;
        bottom: 12px;
        & > svg.send-icon{
            fill: var(--disabled-icon);
        }
    }

}

`

const Separator = styled.div`
    min-height: 2px;
    min-width: 100%;
    
   
    ${tw`
        flex
        bg-gray-300
        mt-4
        `
    };
`

export function CommentInputProductBackUp(props: CommentProps) {

    const { idProduct, stateComment } = props

    const inputValueType: any = ""
    const [valueRef, setValueRef] = useState(inputValueType)
    const [lengthComment, setLengthComment] = useState(0)
    const [hiddenButton, setHiddenButton] = useState(false)
    const [activeSend, setActiveSend] = useState(true)
    const valueRefComment: any = useRef()

    const charFocus = useCallback(() => {
        if (hiddenButton) {
            const element: any = document.querySelector(".send-icon path");
            element.setAttribute("fill", "#0084FF");
        }
        // console.log("Event focus")
    }, [hiddenButton])

    const charBlur = useCallback(() => {
        const element: any = document.querySelector(".send-icon path");
        if (hiddenButton) {
            element.removeAttribute("fill");
        }
        // console.log("Event blur")
    }, [hiddenButton])


    const charCount = (e: any) => {

        let lengthText = e.target.value.trim().length
        setValueRef(e.target.value)
        setLengthComment(lengthText);

        // // skill debounce 
        // if (valueRefComment.current) {
        //     clearTimeout(valueRefComment.current);
        // }

        // valueRefComment.current = setTimeout(() => {

        // }, 300)

        if (lengthText >= 1) {
            setHiddenButton(true)
            setActiveSend(false)
        } else {
            setHiddenButton(false)
        }

        // document.getElementById('textarea_count').innerHTML=element+"/100 (Max Character 100).";
    }

    const handleSendComment = (event: any) => {
        event.preventDefault()
        setValueRef("")
        setHiddenButton(false)
        setLengthComment(0)
        // console.log('send :', valueComment.current.value.trim())
    }


    useEffect(() => {
        const textarea: any = document.querySelector("textarea");
        textarea.addEventListener("keyup", (e: any) => {
            textarea.style.height = "59px";
            let scHeight = e.target.scrollHeight;
            if (scHeight > 59) {
                textarea.style.height = `${scHeight + 4}px`;
            }
        });
        return () => {
            textarea.removeEventListener("keyup", (e: any) => {
                textarea.style.height = "59px";
                let scHeight = e.target.scrollHeight;
                textarea.style.height = `${scHeight + 4}px`;
            });
        }
    }, [])


    return (
        <CommentSection>
            <BoxBorder>
                <BoxInput>
                    <BoxInputContainer>
                        <CmtHistory idProduct={idProduct} stateComment={stateComment} />
                        <Separator />

                        <form className="mt-2">
                            <label className="labels">Comment</label>
                            <div className="textarea_style">

                                <textarea
                                    id="textarea"
                                    name="commentArea"
                                    onChange={charCount}
                                    onFocus={() => charFocus()}
                                    onBlur={() => charBlur()}
                                    maxLength={300}
                                    // minLength={3}
                                    ref={valueRefComment}
                                    placeholder="Type Something here..."
                                    value={valueRef}
                                    required
                                >
                                </textarea>
                                {hiddenButton && (
                                    <button onClick={handleSendComment} disabled={activeSend} className="btn--comment">
                                        <svg className="send-icon" width="20px" height="20px" viewBox="0 0 24 24">
                                            <path d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.8429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 C22.8132856,11.0605983 22.3423792,10.4322088 21.714504,10.118014 L4.13399899,1.16346272 C3.34915502,0.9 2.40734225,1.00636533 1.77946707,1.4776575 C0.994623095,2.10604706 0.8376543,3.0486314 1.15159189,3.99121575 L3.03521743,10.4322088 C3.03521743,10.5893061 3.34915502,10.7464035 3.50612381,10.7464035 L16.6915026,11.5318905 C16.6915026,11.5318905 17.1624089,11.5318905 17.1624089,12.0031827 C17.1624089,12.4744748 16.6915026,12.4744748 16.6915026,12.4744748 Z" fillRule="evenodd" stroke="none" fill="#0084FF">
                                            </path>
                                        </svg>
                                    </button>
                                )}
                            </div>
                            <span className="textarea_count" id="textarea_count">{lengthComment}/300</span>
                        </form>
                    </BoxInputContainer>
                </BoxInput>
            </BoxBorder>
        </CommentSection>
    );
}
