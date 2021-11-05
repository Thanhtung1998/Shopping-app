import React, { memo, useEffect, useRef, useState } from 'react';
import { RootStateOrAny, useSelector } from 'react-redux';
import styled from 'styled-components';
import tw from 'twin.macro';
import useResize from '../../hooks/useResize';
import { CmtFeelIcon } from './CmtFeelIcon';
import CmtGifBox from './CmtGif';
import { DoneUploadImg } from './doneUpload';
import { ProgressBar } from './progressBar';

export interface CommentProps {
    idProduct: string;
    stateComment: any;
}

const BoxInputContainer = styled.div`
    padding: 10px;
    // border: 1px solid #ededed;
    width: 100%;
    ${tw`
        // rounded-md
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



const MainInputCmt = styled.div`
    font-family: inherit;
    display: flex;
    padding-right: 16px;
    padding-top: 4px;
    padding-bottom: 4px;
    padding-left: 16px;
    flex-direction: row;
    outline: none;
`

const MainUserCmt = styled.div`
    font-family: inherit;
    border-bottom-left-radius: 50%;
    border-top-left-radius: 50%;
    margin-top: 2px;
    align-self: flex-start;
    position: relative;
    margin-right: 6px;
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
    display: block;
`
const MainUserPicture = styled.div`
    font-family: inherit;
    min-height: 0;
    padding-right: 0;
    box-sizing: border-box;
    padding-bottom: 0;
    border-bottom-right-radius: inherit;
    display: inline-flex;
    flex-shrink: 0;
    margin-bottom: 0;
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
    border-top-left-radius: inherit;
    flex-basis: auto;
    position: relative;
    margin-top: 0;
    border-bottom-left-radius: inherit;
    padding-top: 0;
    text-align: inherit;
    min-width: 0;
    margin-left: 0;
    align-items: stretch;
    background-color: transparent;
    touch-action: manipulation;
    z-index: 0;
    margin-right: 0;
    flex-direction: row;
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

`

const PictureUser = styled.div`
    font-family: inherit;
    display: inline-block;
    vertical-align: bottom;
    position: relative;
    z-index: 0;

    & > svg {
        vertical-align: bottom;
        & > g > circle.circle--fill--none{
            stroke-width: 2;
            fill: none;
            stroke: var(--media-inner-border);
        }
    }

`

const StatusUserComment = styled.div`
    font-family: inherit;
    border-bottom-left-radius: 50%;
    border-top-left-radius: 50%;
    position: absolute;
    z-index: 2;
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
`

const StatusBodyComment = styled.div`
    font-family: inherit;
    overflow-y: hidden;
    border-bottom-left-radius: 50%;
    border-top-left-radius: 50%;
    overflow-x: hidden;
    position: relative;
    display: flex;
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
`

const StatusChild = styled.div`
    font-family: inherit;
    align-content: inherit;
    border-bottom-right-radius: inherit;
    border-top-left-radius: inherit;
    position: relative;
    border-bottom-left-radius: inherit;
    flex-direction: inherit;
    width: inherit;
    justify-content: inherit;
    height: inherit;
    border-top-right-radius: inherit;
    display: inherit;
    align-items: inherit;

    & > span {
        font-family: inherit;
        height: 8px;
        border-bottom-left-radius: 50%;
        border-top-left-radius: 50%;
        display: inline-flex;
        background-color: var(--positive);
        border-top-right-radius: 50%;
        width: 8px;
        border-bottom-right-radius: 50%;
        border-left: 0;
        border-top: 0;
        border-right: 0;
        border-bottom: 0;
    }

    & > div {
        font-family: inherit;
        border-bottom-left-radius: 50%;
        border-top-left-radius: 50%;
        position: absolute;
        transition-timing-function: var(--fds-animation-fade-out);
        right: 0;
        top: 0;
        left: 0;
        bottom: 0;
        pointer-events: none;
        border-top-right-radius: 50%;
        transition-duration: var(--fds-duration-extra-extra-short-out);
        border-bottom-right-radius: 50%;
        opacity: 0;
        transition-property: opacity;
    }

`

const StatusText = styled.div`
    font-family: inherit;
    box-sizing: border-box;
    width: 1px;
    clip: rect(0,0,0,0);
    position: absolute;
    clip-path: inset(50%);
    z-index: 0;
    height: 1px;
    overflow: hidden;
`

const DataVisualUserComment = styled.div`
    font-family: inherit;
    border-bottom-left-radius: 50%;
    border-top-left-radius: 50%;
    position: absolute;
    transition-timing-function: var(--fds-animation-fade-out);
    right: 0;
    top: 0;
    left: 0;
    bottom: 0;
    pointer-events: none;
    border-top-right-radius: 50%;
    transition-duration: var(--fds-duration-extra-extra-short-out);
    border-bottom-right-radius: 50%;
    opacity: 0;
    transition-property: opacity;
`

const MainInputTextOrMore = styled.div`
    font-family: inherit;
    overflow-y: hidden;
    padding-right: 0;
    flex-basis: 0px;
    overflow-x: hidden;
    flex-grow: 1;
`

const FormInputCmt = styled.form`
    border-bottom-left-radius: 18px;
    border-top-right-radius: 18px;
    cursor: text;
    position: relative;
    display: flex;
    border-bottom-right-radius: 18px;
    border-top-left-radius: 18px;
    justify-content: flex-end;
    background-color: var(--comment-background);
    border-left-width: 0;
    border-top-width: 0;
    border-right-width: 0;
    border-bottom-width: 0;
    margin: 0;
    padding: 0;
    z-index: 110;

    & > div.normalText{
        font-family: inherit;
        padding-left: 12px;
        overflow-y: hidden;
        padding-bottom: 8px;
        cursor: text;
        overflow-x: hidden;
        flex-basis: auto;
        color: var(--secondary-text);
        text-overflow: ellipsis;
        font-size: .9375rem;
        flex-shrink: 1;
        white-space: nowrap;
        padding-right: 12px;
        padding-top: 8px;
        flex-grow: 1;
        font-weight: 400;
        }
    
    & > div.inputText{
        font-family: inherit;
        padding-left: 12px;
        overflow-y: hidden;
        padding-bottom: 8px;
        cursor: text;
        overflow-x: hidden;
        flex-basis: auto;
        font-size: .9375rem;
        flex-shrink: 1;
        padding-right: 12px;
        padding-top: 8px;
        flex-grow: 1;
        
    }

`

const CmtInputBody = styled.div`
    
`
const CmtInputText = styled.div`
    font-family: inherit;
    position: relative;
`
const MainInputText = styled.div`
    font-family: inherit;
    color: var(--primary-text);
    -webkit-user-select: text;
    position: relative;
    word-wrap: break-word;
    white-space: pre-wrap;
    text-align: initial;
    outline: none;

    & > p {
        font-family: inherit;
        margin-bottom: 0;
        margin-top: 0;
        margin-left: 0;
        margin-right: 0;
    }

`

const PlaceHolderCmt = styled.div`
    font-family: inherit;
    overflow-y: hidden;
    position: absolute;
    overflow-x: hidden;
    color: var(--secondary-text);
    text-overflow: ellipsis;
    top: 0;
    width: 100%;
    left: 0;
    pointer-events: none;
    white-space: nowrap;
    -webkit-user-select: none;
`

const TagUlCmtUser = styled.ul`
    height: 36px;
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
    margin-left: -8px;
    margin-right: 4px;
    align-self: flex-end;
    align-items: center;
`

const TagLiCmtUser = styled.li`
    display: inline-block;
    margin-left: 6px;
    margin-right: 6px;
    height: 100%;
`

const TagSpanCmtUser = styled.span`
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

    :hover > div > div.hoverEffect {
        opacity: 1;
    }

`
const TagDivCmtUser = styled.div`
    font-family: inherit;
    min-height: 0;
    padding-right: 0;
    box-sizing: border-box;
    padding-bottom: 0;
    border-bottom-right-radius: inherit;
    vertical-align: bottom;
    display: inline-flex;
    flex-shrink: 0;
    margin-bottom: 0;
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
    border-top-left-radius: inherit;
    flex-basis: auto;
    position: relative;
    margin-top: 0;
    border-bottom-left-radius: inherit;
    padding-top: 0;
    text-align: inherit;
    min-width: 0;
    margin-left: 0;
    align-items: stretch;
    background-color: transparent;
    touch-action: manipulation;
    -webkit-appearance: none;
    z-index: 0;
    margin-right: 0;
    flex-direction: row;
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

    ::after{
        left: -8px;
        top: -8px;
        border-top-left-radius: 50%;
        z-index: 1;
        bottom: -8px;
        position: absolute;
        border-bottom-right-radius: 50%;
        content: "";
        border-bottom-left-radius: 50%;
        border-top-right-radius: 50%;
        right: -8px;
    }

    & > i.activeSelect{
        -webkit-filter: var(--filter-accent);
    }

`

// const DivPostImgCmt = styled.div`

//     padding: 0 20px 10px 20px;
//     position: relative;

//   img.shareImg{
//     width: 100%;
//     object-fit: cover;
//   }

//   & > svg.shareCancelImg{
//     with: 20px;
//     height: 20px;
//     position: absolute;
//     top: 0;
//     right: 20px;
//     cursor: pointer;
//     opacity: 0.7;
//   }
// `

const TagIcon = styled.i`
    -webkit-filter: var(--filter-secondary-icon);
    vertical-align: -0.25em;
`

const DataVisualFeelCmt = styled.div`
    font-family: inherit;
    border-bottom-left-radius: 50%;
    border-top-left-radius: 50%;
    position: absolute;
    transition-timing-function: var(--fds-animation-fade-out);
    background-color: var(--hover-overlay);
    right: 0;
    top: 0;
    left: 0;
    bottom: 0;
    pointer-events: none;
    border-top-right-radius: 50%;
    transition-duration: var(--fds-duration-extra-extra-short-out);
    border-bottom-right-radius: 50%;
    opacity: 0;
    transition-property: opacity;
`

const DataVisualFileCmt = styled.div`
    font-family: inherit;
    border-bottom-left-radius: 50%;
    border-top-left-radius: 50%;
    background-color: var(--hover-overlay);
    position: absolute;
    transition-timing-function: var(--fds-animation-fade-out);
    right: 0;
    top: 0;
    left: 0;
    bottom: 0;
    pointer-events: none;
    border-top-right-radius: 50%;
    transition-duration: var(--fds-duration-extra-extra-short-out);
    border-bottom-right-radius: 50%;
    opacity: 0;
    transition-property: opacity;
`

const TagInputFileCmt = styled.input`
    display: none;
`
const DivImgBackUp = styled.div`
    font-family: inherit;
    flex-grow: 1;
`

const SpanInputIconSelect = styled.span`
    font-family: inherit;
    caret-color: var(--primary-text);
    vertical-align: middle;
    background-repeat: no-repeat;
    margin-bottom: 0;
    text-align: center;
    margin-left: 1px;
    background-position: center;
    margin-top: 0;
    color: transparent;
    margin-right: 1px;
    line-height: 16px;
`

export function CommentInputProduct(props: CommentProps) {

    const initialFile: any = null
    const initialUser: any = {}

    const [width, height] = useResize();

    const { idProduct, stateComment } = props
    const inputRef: any = useRef(null);
    const fileRef: any = useRef(null);
    const [isOpenFeelCmt, setOpenFeelCmt] = useState(false);
    const [isOpenGif, setIsOpenGif] = useState(false);
    const [isOpenFile, setIsOpenFile] = useState(false);
    const [file, setFile] = useState(initialFile);
    const inputValueType: any = "";
    const [onChangeCss, setOnChangeCss] = useState(false);
    const [defaultHtml, setDefaultHtml] = useState('<p id="pCmt"></br></p>');
    const [isOpenFilePreview, setOpenFilePreview] = useState(false);
    const [isProgressLoading, setProgressLoading] = useState(false);
    const [user, setUser] = useState(initialUser);

    const state = useSelector((state: RootStateOrAny) => state)


    // console.log(defaultHtml);

    const CheckValueInput = (value: any) => {

        let regex = /^[0-9]+$/;
        if (value.match(regex)) {
            // console.log("dataInput is Number:", value);
            return false;
        }

        return true;

        // console.log("Data Input :", value);

    }


    const handleOpenFile = (e: any) => {
        setIsOpenFile(true);
        const open: any = document.getElementById("fileSend")
        if (open) {
            open.click();
        }

        // console.log(open);
    }

    const initialize = () => {
        const open: any = document.getElementById("fileSend")
        const checkIt = (e: any) => {
            const reader = new FileReader();
            if (open.value.length) {

                // reader.readAsDataURL(e.target.files[0]);
                setIsOpenFile(false);
            }
            else {
                setIsOpenFile(false);
            }
            document.body.onfocus = null;

        }

        document.body.onfocus = checkIt;
    }

    const addToFile = async (e: any) => {
        e.preventDefault();
        // setFile(e.target.files[0]);
        setFile(e.target.files[0]);

        // your logic here on what to do with files (maybe fetch the preview or something)
        if (file) {
            const data = new FormData();
            const fileName = Date.now() + file.name;
            data.append("name", fileName);
            data.append("file", file);

            // newPost.img = fileName;
            // console.log(newPost);
        }
        // this line right below will reset the 
        // input field so if you removed it you can re-add the same file

        e.target.value = ''
        // console.log(e.target.files[0]);

    }

    const handleOpenFeelCmt = () => {
        setOpenFeelCmt(!isOpenFeelCmt);
        setIsOpenGif(false);
    }

    const handleOpenGif = () => {
        setIsOpenGif(!isOpenGif);
        setOpenFeelCmt(false);
    }

    const handleClose = () => {
        setOpenFeelCmt(false);
        setIsOpenGif(false);
    }

    const handleFocus = (e: any) => {

        handleClose();

        let LengthText = e.currentTarget.textContent.length || 0;

        const div: any = document.querySelector("[contentEditable]");
        // console.log("handleFocus");

        div.onkeydown = (e: any) => {
            let keyCode = e.keyCode;
            if (keyCode !== 8 && LengthText === 0) {
                setDefaultHtml(`<p id="pCmt"><span data-outline-text="true"><br/></span></p>`);
            }
            if (keyCode === 8 && LengthText === 0) {
                e.preventDefault();
                return;
            }
        }

    }

    const handleInput = (e: any) => {

        let Text = e.currentTarget.textContent;
        let LengthText = e.currentTarget.textContent.length || 0;
        // console.log("handleChange", "Value: ", Text, "LengthText: ", LengthText);

        const div: any = document.querySelector("[contentEditable]");
        const pAttribute: any = document.getElementById("pCmt");
        const spanTag = document.createElement("span");



        div.onkeydown = (e: any) => {
            var key = e.keyCode;

            if (key === 8 && LengthText === 0) {
                e.preventDefault();
                return;
            }
        }

        div.onkeydown = (e: any) => {
            setDefaultHtml(`<p id="pCmt"><span data-outline-text="true"><br/></span></p>`);
        }

        // <SpanInputIconSelect data-testid="emoji" data-outline-text="true" style={{ cursor: "default", backgroundImage: `url("https://static.xx.fbcdn.net/images/emoji.php/v9/t38/1/16/1f918.png") `, backgroundSize: "16px 16px" }}>🤘</SpanInputIconSelect>
        // <SpanInputIconSelect data-testid="emoji" data-outline-text="true" style={{ cursor: "default", backgroundImage: `url("https://static.xx.fbcdn.net/images/emoji.php/v9/t6d/1/16/1f973.png")`, backgroundSize: "16px 16px" }}>🥳</SpanInputIconSelect>

        // if()

        // console.log(pAttribute)

        if (LengthText > 0) {
            setOnChangeCss(true);

            if (pAttribute) {
                // pAttribute.appendChild(spanTag);
                if (CheckValueInput(Text)) {
                    pAttribute.setAttribute('dir', "ltr");
                } else {

                }
            }

        } else {
            if (pAttribute) {
                pAttribute.removeAttribute('dir');
            }
            setDefaultHtml('<p id="pCmt"></br></p>');
            setOnChangeCss(false);
        }
    }

    // Set User Custom
    useEffect(() => {
        // console.log(state.user)
        if (state.user.user) {
            setUser(state.user.user.user)
        } else {
            return;
        }

    }, [state.user])

    useEffect(() => {
        // Xóa khỏi bộ nhớ
        // console.log(file)
        return () => {
            file && URL.revokeObjectURL(file.preview)
        }
    }, [file])

    useEffect(() => {


        // console.log(Url);

        setProgressLoading(true);
        let Timer: any

        const progressBar = document.getElementById('progressBarLoading');

        // console.log(progressBar);

        if (file) {

            const Url = file.preview

            const progressEffect = progressBar?.querySelectorAll(".b3i9ofy5.t6na6p9t");
            if (progressEffect && Url) {
                // Progress upload File sever tạm

                // fire base Create a CmtPost and add to firestore '...' collection
                // get the post Id for the newly created postscmt
                // upload the image to firebase storage with the postcmt id
                // get download URL from fb storage and update the original post image

                // giả lập quá trình đấy
                progressEffect.forEach((element: any, index: any) => {
                    Timer = setTimeout(() => {
                        progressBar?.setAttribute("aria-label", `${index + 1}%, bước ${index + 1}/100`)
                        element.classList.remove("b3i9ofy5");
                        element.classList.add("s1i5eluu");
                        // fake uploading to db tạm thời
                        const doneLoading = progressBar?.getAttribute("aria-label") === "100%, bước 100/100";
                        if (doneLoading) {
                            setOpenFilePreview(true);
                            setProgressLoading(false);
                        } else {
                            setOpenFilePreview(false);
                            setProgressLoading(true);
                        }
                    }, index * 20)
                })
                // fetch Call Data Load
                const fetchDataImgLoad = async () => {
                    const Response = await fetch(Url).then(response => {
                        console.log(response)
                        if (response.status === 200) {
                            console.log(true)
                            setOpenFilePreview(true);
                            setProgressLoading(false);
                        } else {
                            setOpenFilePreview(false);
                            setProgressLoading(false);
                        }
                    }).catch(error => {
                        console.log(error);
                        setOpenFilePreview(false);
                        setProgressLoading(false);
                    })

                }
                // fetchDataImgLoad();
            }
        }
        // clearTimeout(time);
        // console.log(progressEffect);


        if (file === null) {
            const progressEffect = progressBar?.querySelectorAll(".s1i5eluu.t6na6p9t");
            progressBar?.setAttribute("aria-label", `0%, bước 0/100`);
            setOpenFilePreview(false);
            // setProgressLoading(false);
            if (progressEffect) {
                progressEffect.forEach((element: any, index: any) => {
                    element.classList.add("b3i9ofy5")
                    element.classList.remove("s1i5eluu")
                })
            }
            // console.log(progressEffect);
        }

        return () => {
            clearTimeout(Timer);
        }

    }, [file])


    useEffect(() => {

        const handleOpenModalCmt = () => {
            if (isOpenFeelCmt) {
                const MainLLocation = document.getElementById("MainLLocation")
                const SpanFeelCmtIcon: any = document.getElementById("FeelCmtIcon");
                if (SpanFeelCmtIcon) {
                    let bodyRect = document.body.getBoundingClientRect();
                    let rect = SpanFeelCmtIcon.getBoundingClientRect();
                    let offset = rect.top - bodyRect.top;
                    const rightLocation = rect.right;
                    const topLocation = offset - 50;
                    if (MainLLocation) {
                        MainLLocation.style.transform = `translate(${rightLocation}px, ${topLocation}px) translate(-100%, -100%)`
                    }
                }
            }

            if (isOpenGif) {
                const MainLocation = document.getElementById("Main_GIF_Cmt");
                const SpanGifCmt: any = document.getElementById("GiF_Span");
                if (SpanGifCmt) {
                    let bodyRect = document.body.getBoundingClientRect();
                    let rect = SpanGifCmt.getBoundingClientRect();
                    let offset = rect.top - bodyRect.top;
                    const rightLocation = rect.right;
                    const topLocation = offset - 50;
                    if (MainLocation) {
                        MainLocation.style.transform = `translate(${rightLocation}px, ${topLocation}px) translate(-100%, -100%)`
                    }
                }
            }
        }
        handleOpenModalCmt();

    }, [isOpenFeelCmt, isOpenGif, width, height])

    // console.log("rerender component")

    // console.log(onChangeCss)

    return (
        <BoxInputContainer>
            <MainInputCmt >
                <MainUserCmt>
                    <MainUserPicture aria-hidden="true" role="button" tabIndex={-1}>
                        <PictureUser>
                            <svg aria-hidden="true"
                                data-visualcompletion="ignore-dynamic" role="none" style={{ height: "32px", width: "32px" }}>
                                <mask id="jsc_c_7v">
                                    <circle cx="16" cy="16" fill="white" r="16"></circle>
                                    <circle cx="27" cy="27" data-visualcompletion="ignore" fill="black" r="6"></circle>
                                </mask>
                                <g mask="url(#jsc_c_7v)">
                                    <image x="0" y="0" height="100%" preserveAspectRatio="xMidYMid slice" width="100%"
                                        xlinkHref="https://scontent-sin6-2.xx.fbcdn.net/v/t1.6435-1/cp0/c12.0.32.32a/p32x32/200718015_1991373667688426_5566242502390057582_n.jpg?_nc_cat=108&amp;ccb=1-5&amp;_nc_sid=7206a8&amp;_nc_ohc=lSglLqIIlW0AX_lI6Ts&amp;_nc_ht=scontent-sin6-2.xx&amp;oh=17cf646ca89fa1ce12ec2a62fff43079&amp;oe=618E4063"
                                        style={{ height: "32px", width: "32px" }}></image>
                                    <circle className="circle--fill--none" cx="16" cy="16" r="16"></circle>
                                </g>
                            </svg>
                            <StatusUserComment data-visualcompletion="ignore"
                                style={{ bottom: "5px", right: "5px", transform: "translate(50%, 50%)" }}>
                                <StatusBodyComment>
                                    <StatusChild>
                                        <span data-visualcompletion="ignore"></span>
                                        <div data-visualcompletion="ignore"></div>
                                    </StatusChild>
                                    <StatusText >Đang hoạt động</StatusText>
                                </StatusBodyComment>
                            </StatusUserComment>
                        </PictureUser>
                        <DataVisualUserComment data-visualcompletion="ignore"></DataVisualUserComment>
                    </MainUserPicture>
                </MainUserCmt>
                <MainInputTextOrMore >
                    <FormInputCmt
                        className={onChangeCss ? "flex-wrap" : ""}
                        role="presentation"
                        style={{ paddingBottom: "0", width: "100%" }}
                    >
                        <CmtInputBody
                            className={onChangeCss ? "inputText" : "normalText"}
                            data-visualcompletion="ignore"
                        >
                            <CmtInputText className="l9j0dhe7">
                                <MainInputText
                                    className="notranslate"
                                    aria-label="Viết bình luận"
                                    contentEditable={true}
                                    onInput={handleInput}
                                    onFocus={handleFocus}
                                    ref={inputRef}
                                    // value={inputRef}
                                    // onChange={handleInput}
                                    suppressContentEditableWarning={true}
                                    role="textbox" spellCheck="true"
                                    data-outline-editor="true"
                                    dangerouslySetInnerHTML={{ __html: defaultHtml }}
                                >
                                </MainInputText>

                                {onChangeCss ? (
                                    <></>
                                ) : (
                                    <PlaceHolderCmt>
                                        Viết bình luận...
                                    </PlaceHolderCmt>
                                )
                                }
                            </CmtInputText>
                        </CmtInputBody>
                        <TagUlCmtUser >
                            <TagLiCmtUser >
                                <TagSpanCmtUser
                                    id="FeelCmtIcon"
                                    onClick={handleOpenFeelCmt}
                                >
                                    <TagDivCmtUser
                                        aria-label="Chèn một biểu tượng cảm xúc"
                                        role="button"
                                        tabIndex={0}
                                    >
                                        <TagIcon
                                            className={isOpenFeelCmt ? "activeSelect" : ""}
                                            data-visualcompletion="css-img"
                                            style={{ backgroundImage: `url("https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/csoxz2vx1Wa.png")`, backgroundPosition: "0px -426px", backgroundSize: "auto", width: "16px", height: "16px", backgroundRepeat: "no-repeat", display: "inline-block" }}>
                                        </TagIcon>
                                        <DataVisualFeelCmt
                                            className="hoverEffect"
                                            data-visualcompletion="ignore"
                                            style={{ inset: "-8px" }}
                                        >
                                        </DataVisualFeelCmt>

                                    </TagDivCmtUser>
                                </TagSpanCmtUser>
                            </TagLiCmtUser>
                            {file === null && (
                                <TagLiCmtUser >
                                    <TagSpanCmtUser onClick={handleOpenFile}>
                                        <TagDivCmtUser
                                            aria-label="Đính kèm một ảnh hoặc video"
                                            role="button"
                                            tabIndex={0}
                                        >
                                            <TagIcon
                                                className={isOpenFile ? "activeSelect" : ""}
                                                data-visualcompletion="css-img"
                                                style={{
                                                    backgroundImage: `url("https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/csoxz2vx1Wa.png")`,
                                                    backgroundPosition: "0px -358px",
                                                    backgroundSize: "auto",
                                                    width: "16px",
                                                    height: "16px",
                                                    backgroundRepeat: "no-repeat",
                                                    display: "inline-block"
                                                }}>

                                            </TagIcon>

                                            <DataVisualFileCmt
                                                className="hoverEffect"
                                                data-visualcompletion="ignore"
                                                style={{ inset: "-8px" }}
                                            >
                                            </DataVisualFileCmt>
                                        </TagDivCmtUser>
                                    </TagSpanCmtUser><TagInputFileCmt
                                        id="fileSend"
                                        ref={fileRef}
                                        onChange={addToFile}
                                        onClick={initialize}
                                        accept="video/*,  video/x-m4v, video/webm, video/x-ms-wmv, video/x-msvideo, video/3gpp, video/flv, video/x-flv, video/mp4, video/quicktime, video/mpeg, video/ogv, .ts, .mkv, image/*, image/heic, image/heif"
                                        type="file"
                                    />
                                </TagLiCmtUser>
                            )}
                            {file === null && (
                                <TagLiCmtUser >
                                    <TagSpanCmtUser id="GiF_Span" onClick={handleOpenGif}>
                                        <TagDivCmtUser
                                            aria-label="Bình luận bằng file GIF"
                                            role="button"
                                            tabIndex={0}
                                        >
                                            <TagIcon
                                                className={isOpenGif ? "activeSelect" : ""}
                                                data-visualcompletion="css-img"
                                                style={{ backgroundImage: `url("https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/csoxz2vx1Wa.png")`, backgroundPosition: "0px -443px", backgroundSize: "auto", width: "16px", height: "16px", backgroundRepeat: "no-repeat", display: "inline-block" }}>

                                            </TagIcon>
                                            <DataVisualFeelCmt
                                                className="hoverEffect"
                                                data-visualcompletion="ignore"
                                                style={{ inset: "-8px" }}
                                            >
                                            </DataVisualFeelCmt>
                                        </TagDivCmtUser>
                                    </TagSpanCmtUser>
                                </TagLiCmtUser>
                            )}
                            {file === null && (
                                <TagLiCmtUser >
                                    <TagSpanCmtUser onClick={() => console.log("Labeling")}>
                                        <TagDivCmtUser aria-label="Bình luận bằng nhãn dán"
                                            role="button" tabIndex={0}>
                                            <TagIcon
                                                className={true ? "activeSelect" : ""}
                                                data-visualcompletion="css-img"
                                                style={{ backgroundImage: `url("https://static.xx.fbcdn.net/rsrc.php/v3/ye/r/csoxz2vx1Wa.png")`, backgroundPosition: "0px -460px", backgroundSize: "auto", width: "16px", height: "16px", backgroundRepeat: "no-repeat", display: "inline-block" }}>

                                            </TagIcon>
                                            <DataVisualFeelCmt className="hoverEffect"
                                                data-visualcompletion="ignore" style={{ inset: "-8px" }}></DataVisualFeelCmt>
                                        </TagDivCmtUser>
                                    </TagSpanCmtUser>
                                </TagLiCmtUser>
                            )}
                        </TagUlCmtUser>
                    </FormInputCmt>

                    <ProgressBar file={file} isProgressLoading={isProgressLoading} setFile={setFile} />

                    <DoneUploadImg
                        file={file}
                        isOpenFilePreview={isOpenFilePreview}
                        setFile={setFile}
                        user={user}
                    />

                    <DivImgBackUp ></DivImgBackUp>
                    <DivImgBackUp ></DivImgBackUp>
                </MainInputTextOrMore>
            </MainInputCmt>



            {/* <form className="mt-2">
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
                        </form> */}

            <CmtFeelIcon setOpenFeelCmt={setOpenFeelCmt} openFeelCmt={isOpenFeelCmt} />
            <CmtGifBox isOpenGif={isOpenGif} setIsOpenGif={setIsOpenGif} />
        </BoxInputContainer>
    );
}

memo(CommentInputProduct)