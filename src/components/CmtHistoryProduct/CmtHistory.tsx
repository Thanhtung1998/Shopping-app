import React, { useState, useEffect } from 'react';
import styled from "styled-components"
import tw from 'twin.macro';

import { CmtHistoryImg } from './CmtHistoryImg';
import { FeelCmtHistory } from './FeelCmtHistory'
import { LikeAndResponseCmt } from './LikeAndResponseCmt';

export interface CmtHistoryProps {
  stateComment: any;
  idProduct: string;
}

const CmtHistorySection = styled.section`
background-color: var(--surface-background);
${tw`
  w-full
`}

`

const BoxWrapper = styled.div`
  ${tw`
    w-full
    overflow-hidden
  `}
`

const TagUlComment = styled.ul`

  list-style-type: disc;
  margin: 0;
  padding: 0;

`

const TagLi = styled.li`

::marker {
  unicode-bidi: isolate;
  font-variant-numeric: tabular-nums;
  text-transform: none;
  text-indent: 0px !important;
  text-align: start !important;
  text-align-last: start
}

`

const TagDivParent = styled.div`
    font-family: inherit;
    overflow-y: hidden;
    overflow-x: hidden;
    position: relative;
`

const LineRowComment = styled.div`
  position: absolute;
  font-family: inherit;
  top: 43px;
  left: 30px;
  width: 2px;
  height: 100%;
  background-color: var(--comment-background);
`

const TagDivChildren = styled.div`

`


const DivInfoComment = styled.div`

  ${tw`
  pr-0
  pb-0
  pl-4
  pt-1
  relative
  flex
  flex-row
  outline-none
  `}

`

const UserProfilePicture = styled.div`

  margin-top: 2px;
  align-self: flex-start;
  position: relative;
  margin-right: 6px;
  border-bottom-left-radius: 50%;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  border-bottom-right-radius: 50%;
  display: block;
  font-family: inherit;
`

const UserProfileTagSpan = styled.span`

  display: inline;
  font-family: inherit;

`

const TagLinkProfile = styled.a`

  display: inline-block;
  font-family: inherit;
  min-height: 0;
  min-width: 0;
  position: relative;
  flex-basis: auto;
  flex-shrink: 0;
  flex-direction: row;
  text-align: inherit;
  align-items: stretch;

  list-style: none;
  outline: none;
  text-decoration: none;
  color: #385898;

  cursor: pointer;
  -webkit-user-select: none;
  touch-action: manipulation;

  box-sizing: border-box;

  padding-right: 0;
  padding-bottom: 0;
  padding-top: 0;
  padding-left: 0;

  margin-bottom: 0;
  margin-left: 0;
  margin-top: 0;
  margin-right: 0;

  z-index: 0;

  background-color: transparent;
  -webkit-tap-highlight-color: transparent;
  
  border-right-width: 0;
  border-bottom-width: 0;
  border-top-style: solid;
  border-left-style: solid;
  border-right-style: solid;
  border-bottom-right-radius: inherit;
  border-top-left-radius: inherit;
  border-bottom-left-radius: inherit;
  border-top-right-radius: inherit;
  border-bottom-color: var(--always-dark-overlay);
  border-left-color: var(--always-dark-overlay);
  border-top-color: var(--always-dark-overlay);
 
`

const TagDivProfileImg = styled.div`

  font-family: inherit;
  display: inline-block;
  vertical-align: bottom;
  position: relative;
  z-index: 0;

  & > svg.svgImg{
    vertical-align: bottom;

    svg:not(:root) {
      overflow: hidden;
    }

    :not(svg) {
      transform-origin: 0px 0px;
    } 

    & > mask{
      font-family: inherit;
    }

    & > g > circle{
      fill: none;
      stroke-width: 2;
      stroke: var(--media-inner-border);
    }

  }

`

const TagDivDataVisualCompletion = styled.div`

  position: absolute;
  right: 0;
  top:0;
  left: 0;
  bottom: 0;
  font-family: inherit;
  opacity: 0;
  transition-property: opacity;

  pointer-events: none;

  transition-timing-function: var(--fds-animation-fade-out);
  transition-duration: var(--fds-duration-extra-extra-short-out);
 
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;

`

const DivTextAndImgComment = styled.div`
font-family: inherit;
flex-basis: 0px;
flex-grow: 1;
padding-right: 16px;
overflow-y: hidden;
overflow-x: hidden;
`


const TagDiv = styled.div`

  font-family: inherit;
`
const BoxInformation = styled.div`
 
    font-family: inherit;
    vertical-align: middle;
    display: inline-block;
    word-wrap: break-word;
    max-width: calc(100% - 26px);
`
const BoxInformationBg = styled.div`
      position: relative;
      display: inline-block;
      margin-bottom: 0;
      color: var(--primary-text);
      white-space: normal;
      margin-top: 0;
      margin-left: 0;
      word-wrap: break-word;
      max-width: 100%;
      margin-right: 0;
      background-color: var(--comment-background);

      font-family: inherit;
      box-sizing: border-box;
      word-break: break-word;
      border-bottom-left-radius: 18px;
      border-top-right-radius: 18px;
      border-bottom-right-radius: 18px;
      border-top-left-radius: 18px;

`
const BoxInformationPadding = styled.div`
     
        font-family: inherit;
        padding-left: 12px;
        padding-bottom: 8px;
        padding-right: 12px;
        padding-top: 8px;
`

const TagSpanNameUser = styled.span`

  display: inline;
  font-family: inherit;
`
const TagANameUser = styled.a`

    font-family: inherit;
    cursor: pointer;
    touch-action: manipulation;
    display: inline;

    padding-top: 0;
    padding-right: 0;
    padding-bottom: 0;
    padding-left: 0;

    box-sizing: border-box;

    margin-top:0;
    margin-left: 0;
    margin-bottom: 0;
    margin-right: 0;

    border-left: 0;
    border-top: 0;
    border-right: 0;
    border-bottom: 0;
 

    -webkit-tap-highlight-color: transparent;
    text-align:inherit;
    background-color: transparent;
    outline: none;
    text-decoration: none;

    & > span.Text{
      font-family: inherit;
      display: inline-flex;

      & > span.Text--Name{
        font-family: inherit;
        word-break: break-word;
        color: var(--primary-text);
        font-weight: 600;
        min-width: 0;
        font-size: .8125rem;
        line-height: 1.2308;
        max-width:100%;
        display: block;
        word-wrap: break-word;
        unicode-bidi: isolate;
        text-transform: capitalize;

        ::before {
          height: 0;
          margin-top: -4px;
          content: "";
          display: block;
        }

        ::after {
          height: 0;
          content: "";
          margin-bottom: -3px;
        }
      }
    }

`

const TagDivCommentUser = styled.div`
      
          font-family: inherit;
          padding-top: 4px;
          padding-bottom: 4px;
          display: block;
`
const TagSpanCommentUser = styled.span`
            font-family: inherit;
            word-break: break-word;
            color: var(--primary-text);
            font-size: .9375rem;
            line-height: 1.3333;
            min-width:0;
            max-width: 100%;
            word-wrap: break-word;
            font-weight: 400;
            display: block;
            unicode-bidi: isolate;
            -webkit-locale: "vi-VN";

            ::before {
              display: block;
              content: "";
              height:0;
              margin-top: -5px;
            }
            ::after {
              display: block;
              content: "";
              height: 0;
              margin-bottom: -4px;
            }

            & > div.Text--cmt{
              font-family: inherit;
              margin-bottom:0;
              margin-top: 0;
              margin-left: 0;
              margin-right: 0;
              word-wrap: break-word;

              & > div.Text--cmt-normal{
                font-family: inherit;
                display: block;
                unicode-bidi: isolate;
              }

              & > div.Text--cmt-other-link{
                font-family: inherit;
                display: block;
                unicode-bidi: isolate;

                & > a.link--cmt--of-the-user{
                  font-family: inherit;

                  padding-top:0;
                  padding-right:0;
                  padding-bottom: 0;
                  padding-left: 0;

                  color: var(--blue-link);
                  -webkit-tap-highlight-color: transparent;
                  cursor:pointer;
                  display: inline;

                  margin-top: 0;
                  margin-left: 0;
                  margin-right: 0;
                  margin-bottom: 0;

                  border-left:0;
                  border-right:0;
                  border-top:0;
                  border-bottom:0;
                  text-decoration: none;

                  list-style: none;
                  outline: none;

                  background: transparent;
                  touch-action: manipulation;
                  text-align: inherit;
                  box-sizing: border-box;

                }
              }

            }

`

const ReportDiv = styled.div`
  font-family: inherit;
  vertical-align: middle;
  display: inline-block;
  width: 22px;
  height: 16px;

  & > div.ReportDiv--margin-left{
    font-family: inherit;
    opacity: 1;
    margin-left: 11px;
    height: 16px;
    direction: 1tr;
    line-height: 16px;

    & > span.ReportDiv__span{
      width: inherit;
      height: inherit;
      max-width: inherit;
      min-width: inherit;
      max-height: inherit;
      min-height: inherit;
      font-family: inherit;
    
      display: inherit;
      flex-basis: inherit;
      flex-grow: inherit;
      flex-shrink: inherit;
      flex-direction:inherit;
      justify-content: inherit;
      align-content: inherit;
      align-items: inherit;

      &:hover > div.dot-icon-report-border__div > div.after__icon  {
          opacity: 1;
      }

      & > div.dot-icon-report-border__div{
        position: relative;
        font-family: inherit;
        z-index: 0;

        text-decoration: none;
        list-style: none;
        outline: none;

        min-height: 0;
        min-width: 0;
        background-color: transparent;
        touch-action: manipulation;

        padding: 0;
        margin: 0;

        vertical-align: bottom;

        box-sizing:border-box;

        display: inline-flex;
        flex-direction: row;
        flex-shrink: 0;
        flex-basis: auto;
        align-items: stretch;
        cursor: pointer;
        text-align: inherit;


        -webkit-appearance: none;
        -webkit-tap-highlight-color: transparent;
        -webkit-user-select: none;

        border-right-color: var(--always-dark-overlay);
        border-bottom-color: var(--always-dark-overlay);
        border-left-color: var(--always-dark-overlay);
        border-top-color: var(--always-dark-overlay);

        border-top-style: solid;
        border-left-style: solid;
        border-bottom-style: solid;
        border-right-style: solid;

        border-right-width: 0;
        border-left-width: 0;
        border-top-width: 0;
        border-bottom-width: 0;
        
  
      
        border-bottom-right-radius:inherit;
        border-bottom-left-radius:inherit;
        border-top-right-radius:inherit;
        border-top-left-radius:inherit;

        :hover{
          text-decoration: none;
        }

        ::after{
          position: absolute;
          content: "";
          left: -8px;
          top: -8px;
          bottom: -8px;
          right: -8px;
          border-top-left-radius: 50%;
          border-bottom-right-radius: 50%;
          border-bottom-left-radius: 50%;
          border-top-right-radius: 50%;
          z-index: 1;
        }

        & > i {
          font-family: inherit;
          -webkit-tap-highlight-color: transparent;
          cursor: pointer;
          text-align: inherit;
          -webkit-user-select: none;
          list-style: none;
        }

        & > i.Icon-dot-css{
          -webkit-filter: var(--filter-secondary-icon);
          vertical-align: -0.25em;
        }

        & > div.after__icon{
          font-family: inherit;
          border-bottom-left-radius: 50%;
          border-top-left-radius: 50%;
          border-bottom-right-radius: 50%;
          opacity: 0;
          transition-property: opacity;
          display: block;
          background-color: var(--hover-overlay);
          position: absolute;
          pointer-events: none;
          border-top-right-radius: 50%;
          top: 0;
          right: 0;
          left: 0;
          bottom: 0;
          pointer-events: none;
          border-top-right-radius: 50%;

          transition-timing-function: var(--fds-animation-fade-out);
          transition-duration: var(--fds-duration-extra-extra-short-out);

        }

       
      }

    }

  }

`

export function CmtHistory(props: CmtHistoryProps) {

  const typeDataArray: any = []
  const { stateComment, idProduct } = props;
  const [ListComments, setListComments] = useState(typeDataArray)



  const FetchComment = async () => {
    console.log(stateComment);
    const data = stateComment.commentProduct
    setListComments(data)
  }

  useEffect(() => {
    if (stateComment.productId === idProduct) {
      FetchComment();
    }
  }, [stateComment])

  return (
    <CmtHistorySection>
      <BoxWrapper>
        <TagUlComment>
          {ListComments && ListComments.map((data: any) =>
          (
            <TagLi key={Math.random()}>
              <TagDivParent>
                <LineRowComment>

                </LineRowComment>
                <TagDivChildren>
                  <DivInfoComment >
                    <UserProfilePicture>
                      <UserProfileTagSpan>
                        {/* aria trinhf ho tro nguowi kiem quyet void text o che do nguoi kiem quyet */}
                        <TagLinkProfile aria-hidden={true} href="#" role="link" tabIndex={-1} >
                          <TagDivProfileImg>
                            <svg aria-hidden="true" className="svgImg" data-visualcompletion="ignore-dynamic" role="none"
                              style={{ height: "32px", width: "32px" }}>
                              <mask id="jsc_c_7m">
                                <circle cx="16" cy="16" fill="white" r="16">
                                </circle>
                              </mask>
                              <g mask="url(#jsc_c_7m)">
                                <image x={0} y={0} height="100%" preserveAspectRatio="xMidYMid slice" width="100%"
                                  xlinkHref="https://reactjs.org/logo-og.png"
                                  style={{ height: "32px", width: "32px" }}>
                                </image>
                                <circle className="" cx="16" cy="16" r="16">
                                </circle>
                              </g>
                            </svg>
                          </TagDivProfileImg>
                          {/* data-visualcompletion số liệu thống kê bị phớt lờ */}
                          <TagDivDataVisualCompletion data-visualcompletion="ignore">

                          </TagDivDataVisualCompletion>
                        </TagLinkProfile>
                      </UserProfileTagSpan>
                    </UserProfilePicture>
                    <DivTextAndImgComment>
                      <TagDiv>
                        <BoxInformation >
                          <BoxInformationBg >
                            <BoxInformationPadding>
                              <TagSpanNameUser >
                                <TagANameUser href="#" role="link" tabIndex={0}>
                                  <span className="Text">
                                    <span className="Text--Name" dir="auto"> {data.displayName}
                                    </span>
                                  </span>
                                </TagANameUser>
                              </TagSpanNameUser>
                              <TagDivCommentUser>
                                {/* Các dirthuộc tính định hướng văn bản nội dung của phần tử. */}
                                {/* <element dir="ltr|rtl|auto"> */}
                                <TagSpanCommentUser dir="auto" lang="vi-VN">
                                  <div className="Text--cmt">
                                    <div className="Text--cmt-normal" dir="auto" style={{ textAlign: "start" }}>{data.userCmt}
                                    </div>
                                    <div className="Text--cmt-other-link" dir="auto" style={{ textAlign: "start" }}>
                                      TH: Nếu có link trong cmt: &nbsp;
                                      {/* Các tabindexquy định cụ thể thuộc tính thứ tự tab của một phần tử (khi nút "tab" được sử dụng để điều hướng). */}
                                      {/* Các tabindexthuộc tính có thể được sử dụng trên bất kỳ phần tử HTML (nó sẽ xác nhận trên bất kỳ phần tử HTML. Tuy nhiên, không nhất thiết phải là hữu ích). */}
                                      <a className="link--cmt--of-the-user" href="#" rel="nofollow noopener" role="link" tabIndex={0} target="_blank">https://shp.ee/c7c8ie7
                                      </a>
                                    </div>
                                  </div>
                                </TagSpanCommentUser>
                              </TagDivCommentUser>
                            </BoxInformationPadding>

                            {/* FeelImgCmt */}
                            {/* if cmt co img display none FeelCmtHistory */}
                            {/* <FeelCmtHistory /> */}

                          </BoxInformationBg>
                        </BoxInformation>
                        <ReportDiv>
                          <div className="ReportDiv--margin-left">
                            <span className="ReportDiv__span" aria-describedby="check">
                              <div id="check" aria-expanded="false" aria-haspopup="menu" aria-label="Ẩn hoặc báo cáo bình luận này" className="dot-icon-report-border__div" role="button" tabIndex={0}>

                                <i data-visualcompletion="css-img" className="Icon-dot-css"
                                  style={{
                                    fontStyle: "italic",
                                    backgroundImage: `url("https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/5WN6chIvAJP.png")`, backgroundPosition: "-85px -149px", backgroundSize: "auto", width: "16px", height: "16px", backgroundRepeat: "no-repeat",
                                    display: "inline-block"
                                  }}></i>

                                {/* data-visualcompletion số liệu thống kê bị phớt lờ */}
                                <div className="after__icon" data-visualcompletion="ignore" style={{ inset: "-8px" }}>
                                </div>
                              </div>
                            </span>
                          </div>
                        </ReportDiv>
                      </TagDiv>
                      {/* Img Cmt */}
                      <CmtHistoryImg />
                      {/* Like and Response */}
                      <LikeAndResponseCmt />
                    </DivTextAndImgComment>
                  </DivInfoComment>
                </TagDivChildren>
              </TagDivParent>
            </TagLi>
          )
          )}
        </TagUlComment>
      </BoxWrapper>
    </CmtHistorySection >
  );
}
