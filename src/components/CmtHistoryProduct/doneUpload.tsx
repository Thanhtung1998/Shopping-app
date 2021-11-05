import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export interface DoneUploadImgProps {
    file: any
    isOpenFilePreview: any
    setFile: React.Dispatch<any>
    user: any
}

const MainInputImgCmt = styled.div`
    font-family: inherit;
    flex-grow: 1;
`

const MainInputImgContent = styled.div`
    font-family: inherit;
    padding-bottom: 8px;
    padding-right: 0;
    box-sizing: border-box;
    margin-bottom: 0;
    min-height: 8px;
    position: relative;
    display: flex;
    justify-content: space-between;
    background-color: var(--surface-background);
    min-width: 0;
    margin-left: 0;
    align-items: stretch;
    flex-shrink: 1;
    z-index: 0;
    margin-right: 0;
    padding-top: 8px;
    flex-grow: 1;
    flex-direction: row;
    margin-top: 8px;
    padding-left: 0;
    border-style: solid;
    border-width: 0;
`
const InputImgCmtBox = styled.div`
    font-family: inherit;
    padding-left: 8px;
    width: 100%;
    padding-right: 8px;
    flex-grow: 1;
`

const TextInputImgCmt = styled.div`
    font-family: inherit;
    width: 1px;
    clip: rect(0,0,0,0);
    position: absolute;
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
`
const BoxInputImg = styled.div`
    font-family: inherit;
`
const DivUiScaledImageContainer = styled.div`
font-family: inherit;
    position: relative;
    overflow: hidden;

    img{ 
        border: 0;
    }

    img.img{
        height: 100%;
        min-height: 100%;
        position: relative;
    }

    img.scaledImageFitWidth{
        height: auto;
        min-height: initial;
        width: 100%;
    }
    
    

`
const InputCancelImg = styled.div`
    font-family: inherit;
    padding-right: 8px;
`

const BoxCancelImg = styled.div`
    font-family: inherit;
    background-color: var(--secondary-button-background);
    justify-content: center;
    border-bottom-left-radius: 50%;
    border-top-left-radius: 50%;
    padding-right: 0;
    box-sizing: border-box;
    height: 24px;
    padding-bottom: 0;
    margin-bottom: 0;
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
    position: relative;
    margin-top: 0;
    padding-top: 0;
    display: flex;
    text-align: inherit;
    margin-left: 0;
    touch-action: manipulation;
    border-top-right-radius: 50%;
    margin-right: 0;
    align-items: center;
    border-bottom-right-radius: 50%;
    width: 24px;
    -webkit-user-select: none;
    padding-left: 0;
    border-left-width: 0;
    border-top-width: 0;
    border-right-width: 0;
    border-bottom-width: 0;
    border-left: 0;
    border-top: 0;
    border-right: 0;
    border-bottom: 0;
    list-style: none;
    outline: none;
    text-decoration: none;

    & > i {
        -webkit-filter: var(--filter-primary-icon);
        vertical-align: -0.25em;
    }

`
const DataVisualCompletion = styled.div`
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


export function DoneUploadImg(props: DoneUploadImgProps) {

    const { file, isOpenFilePreview, setFile, user } = props;

    const initialFile: any = null

    const [urlFilePost, setUrlFilePost] = useState(initialFile)
    const [heightPicturePost, setHeightPicturePost] = useState(0)
    const [widthPicturePost, setWidthPicturePost] = useState(0)

    const altImgUpload = user.displayName ? `Ảnh của ${user.displayName}.` : `Ảnh của ...`

    // console.log(altImgUpload)

    useEffect(() => {

        // console.log(file);

        if (file) {

            const reader = new FileReader();

            reader.readAsDataURL(file);

            reader.onload = (readerEvent: any) => {

                var image = new Image();

                //Set the Base64 string return from FileReader as source.
                image.src = readerEvent.target.result;

                //Validate the File Height and Width.
                image.onload = function () {
                    let height = image.height;
                    let width = image.width;
                    if (height === width) {
                        setHeightPicturePost(80);
                        setWidthPicturePost(80);
                    } else if (height !== width && height > width) {
                        setHeightPicturePost(80);
                        setWidthPicturePost(Math.round(width / (height / 80)));
                    } else if (height !== width && height < width && (width / height) <= 2) {
                        // console.log(123)
                        setWidthPicturePost(120);
                        setHeightPicturePost(height / Math.round(width / 120));
                    } else if (height !== width && height < width && (width / height) > 2) {
                        // console.log(123)
                        setWidthPicturePost(118);
                        setHeightPicturePost(height / (width / 118));
                    }

                    // console.log(height, width);
                };

                // console.log(readerEvent.target.result);
            };
            file.preview = URL?.createObjectURL(file)
            setUrlFilePost(file);
            // console.log(objectURL)

            // console.log("rerender component")
        }
    }, [file])

    // console.log(user)

    return (
        <>
            {file && isOpenFilePreview && (
                <MainInputImgCmt>
                    <MainInputImgContent>
                        <InputImgCmtBox >
                            <TextInputImgCmt aria-atomic="true" aria-live="polite" role="status">
                                Đã đính kèm ảnh thành công
                            </TextInputImgCmt>
                            <BoxInputImg>
                                <DivUiScaledImageContainer className="uiScaledImageContainer" style={{ width: `${widthPicturePost}px`, height: `${heightPicturePost}px` }}>
                                    <img
                                        className="scaledImageFitWidth img"
                                        srcSet={`${urlFilePost?.preview} 2x`}
                                        data-src={urlFilePost?.preview}
                                        alt={altImgUpload}
                                        width={`${Math.round(widthPicturePost)}px`}
                                        height={`${Math.round(heightPicturePost)}px`}
                                    />
                                    {/* caption="Ảnh của Tùng Phí." */}
                                </DivUiScaledImageContainer>
                            </BoxInputImg>
                        </InputImgCmtBox>
                        <InputCancelImg className="dflh9lhu" onClick={(e: any) => {
                            setFile(null)
                        }}>
                            <BoxCancelImg aria-label="Gỡ ảnh" role="button" tabIndex={0}>
                                <i
                                    data-visualcompletion="css-img"
                                    className="hu5pjgll lzf7d6o1"
                                    style={{
                                        backgroundImage: `url("https://static.xx.fbcdn.net/rsrc.php/v3/ya/r/beU6K0PmxJH.png")`,
                                        backgroundPosition: "-125px -71px",
                                        backgroundSize: "auto",
                                        width: "12px",
                                        height: "12px",
                                        backgroundRepeat: "no-repeat",
                                        display: "inline-block"
                                    }}>
                                </i>
                                <DataVisualCompletion data-visualcompletion="ignore">
                                </DataVisualCompletion>
                            </BoxCancelImg>
                        </InputCancelImg>
                    </MainInputImgContent>
                </MainInputImgCmt>
            )}
        </>
    );
}
