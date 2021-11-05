import * as React from 'react';
import styled from 'styled-components';


export interface ProgressBarProps {
  file: any;
  isProgressLoading: any;
  setFile: React.Dispatch<any>;
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

const DataVisualCompletionLoadingImg = styled.div`
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

const MainLoadingImgCmt = styled.div`
    font-family: inherit;
    margin-right: 8px;
    flex-grow: 1;
    margin-bottom: 8px;
    margin-top: 8px;
`

const ContentLoadingImgCmt = styled.div`
font-family: inherit;
    min-height: 0;
    padding-right: 0;
    box-sizing: border-box;
    padding-bottom: 0;
    margin-bottom: 0;
    flex-wrap: nowrap;
    position: relative;
    margin-top: 0;
    width: 100%;
    justify-content: stretch;
    padding-top: 0;
    display: flex;
    min-width: 0;
    margin-left: 0;
    align-items: stretch;
    flex-shrink: 1;
    z-index: 0;
    margin-right: 0;
    flex-grow: 1;
    flex-direction: row;
    padding-left: 0;
    border-style: solid;
    border-width: 0;
`

const ContentActiveLoading = styled.div`
    font-family: inherit;
    box-sizing: border-box;

    & > div{
        font-family: inherit;
    }

    & > div.t6na6p9t {
        height: 8px;
    }
    & > div.s1i5eluu {
        background-color: var(--primary-button-background);
    }
    & > div.qttc61fc {
        border-bottom-left-radius: 4px;
    }
    & > div.jk6sbkaj {
        border-top-left-radius: 4px;
    }

    & > div.b3i9ofy5 {
        background-color: var(--comment-background);
    }

    & > div.kdgqqoy6 {
        border-top-right-radius: 4px;
    }
    & > div.ihh4hy1g {
        border-bottom-right-radius: 4px;
    }

`


export function ProgressBar(props: ProgressBarProps) {

  const { file, isProgressLoading, setFile } = props



  return (
    <>
      {file && isProgressLoading && (
        <MainInputImgCmt>
          <MainInputImgContent>
            <InputImgCmtBox>
              <MainLoadingImgCmt>
                <ContentLoadingImgCmt id="progressBarLoading" aria-label="0%, bước 0/100" role="img">
                  <ContentActiveLoading className="rq0escxv" style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t qttc61fc jk6sbkaj"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading className="rq0escxv" style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading className="rq0escxv" style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t"></div>
                  </ContentActiveLoading>
                  <ContentActiveLoading style={{ width: "calc(1%)" }}>
                    <div className="b3i9ofy5 t6na6p9t ihh4hy1g kdgqqoy6"></div>
                  </ContentActiveLoading>
                </ContentLoadingImgCmt>
              </MainLoadingImgCmt>
            </InputImgCmtBox>
            <InputCancelImg onClick={(e: any) => setFile(null)}>
              <BoxCancelImg aria-label="Hủy tải lên" role="button" tabIndex={0}>
                <i data-visualcompletion="css-img" className="hu5pjgll lzf7d6o1"
                  style={{ backgroundImage: `url("https://static.xx.fbcdn.net/rsrc.php/v3/yw/r/_rXdyWwaXHV.png")`, backgroundPosition: "-138px -71px", backgroundSize: "auto", width: "12px", height: "12px", backgroundRepeat: "no-repeat", display: "inline-block" }}></i>
                <DataVisualCompletionLoadingImg data-visualcompletion="ignore">
                </DataVisualCompletionLoadingImg>
              </BoxCancelImg>
            </InputCancelImg>
          </MainInputImgContent>
        </MainInputImgCmt>
      )}
    </>
  );
}
