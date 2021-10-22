import * as React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { ReactReaction } from '../ReactReaction';


export interface LikeAndResponseProps {
}

const TagULikeAndResponse = styled.ul`
  display: block;
 
  margin-left: 12px;
  margin-bottom: 0;
  padding-top: 3px;
  min-height: 15px;
 
  font-size: 12px;
  line-height: 12px;
  
  margin: 0;
  padding: 0; 
  list-style-type: circle;
  margin-block-start: 0px;
  margin-block-end: 0px;

  list-style-type: none;
  color: var(--secondary-text);
  display: inline-block;
  
`

const TagLiLikeAndResponse = styled.li`
display: inline-block;

:first-child span._6cok{
  display: none;
}

`

const TagSpanLikeAndResponse = styled.span`

  font-family: inherit;
  color: var(--placeholder-icon);


 

`

const TagSpanLike = styled.span`
  font-family: inherit;
  display: inline-block;

`

const TagDivLike = styled.div`
  font-family: inherit;
  display: inline-block;
  position: relative;

  span{
    font-family: inherit;

    & > div.Like_Div--element{
      display: flex;
      min-width:0;
      font-family: inherit;
      min-height:0;
      align-items: center;
      justify-content:center;
      flex-direction: row;
      flex-grow: 1;
      flex-shrink: 0;
      flex-basis: auto;
      position: relative;
      text-align: inherit;
      list-style: none;
      outline: none;
      text-decoration: none;

      :hover {
        text-decoration: underline;
      }

      margin-top: 0;
      margin-bottom: 0;
      margin-left: 0;
      margin-right: 0;
      touch-action: none;
      background-color: transparent;

      z-index:0;


      cursor: pointer;
      -webkit-tap-highlight-color: transparent;
      -webkit-user-select: none;
      
      padding-top: 0;
      padding-left: 0;
      padding-right: 0;
      padding-bottom: 0;

      box-sizing: border-box;
      border-top-style: solid;
      border-right-style: solid;
      border-bottom-style: solid;
      border-left-style: solid;
      border-left-width: 0;
      border-top-width: 0;
      border-right-width: 0;
      border-bottom-width: 0;

      border-top-color: var(--always-dark-overlay);
      border-bottom-color: var(--always-dark-overlay);
      border-left-color: var(--always-dark-overlay);
      border-right-color: var(--always-dark-overlay);

      border-top-left-radius: inherit;
      border-top-right-radius: inherit;
      border-bottom-right-radius: inherit;
      border-bottom-left-radius: inherit;

      & > div.Div--Text{
        font-family: inherit;
        display: inline-block;
        cursor: pointer;
        font-weight: bold;
        color: var(--secondary-text);
        position: relative;

        & > span.Span--Text--Like{
          font-family: inherit;
          vertical-align: middle;
          display: inline-block;
          -webkit-filter: brightness(0) var(--filter-secondary-icon);
        }

      }

    }

    & > div.Feel__Div--Comment{
      position: absolute;
      font-family: inherit;
      min-height: 0;
      box-sizing: border-box;
      
      display: inline-flex;
      flex-direction: row;
      flex-shrink: 0;
      flex-basis: auto;
      text-align: inherit;
      min-width: 0;
      align-items: stretch;
      background-color: transparent;
      z-index: 0;


      clip: rect(0,0,0,0);
      clip-path: polygon(0 0,0 0,0 0,0 0);
      touch-action: manipulation;

      cursor: pointer;

      margin-top: 0;
      margin-left: 4px;
      margin-bottom:0;
      margin-right: 0;

      border-top-left-radius: inherit;
      border-top-right-radius: inherit;
      border-bottom-left-radius: inherit;
      border-bottom-right-radius: inherit;


      padding-top: 0;
      padding-left: 0;
      padding-bottom: 0;
      padding-right: 0;

      -webkit-tap-highlight-color: transparent;
      -webkit-user-select: none;

      border-right-color: var(--always-dark-overlay);
      border-bottom-color: var(--always-dark-overlay);
      border-left-color: var(--always-dark-overlay);
      border-top-color: var(--always-dark-overlay);

      border-bottom-style: solid;

      border-top-width: 0;
      border-bottom-width: 0;
      border-left-width: 0;
      border-right-width: 0;
      border-left-style: solid;
      border-top-style: solid;
      border-right-style: solid;
  
      list-style: none;
      outline: none;
      text-decoration: none;

      & > i.Feel__Icon{
        vertical-align: -0.25em;
        -webkit-filter: var(--filter-secondary-icon);
      }

      & > div.dataVisual{
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
        opacity: 0;
        transition-property: opacity;
        border-top-right-radius: inherit;
      }

    }

  }
`
const TagDivResponse = styled.div`

    font-family: inherit;
    padding-right: 0;
    box-sizing: border-box;
    padding-bottom: 0;
    display: inline-block;
    margin-bottom: 0;
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
    font-weight: bold;
    color: var(--secondary-text);
    position: relative;
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
    :hover {
      text-decoration: underline;
    }

`

const TagALinkToProductCmt = styled.a`
    font-family: inherit;
    padding-right: 0;
    box-sizing: border-box;
    padding-bottom: 0;
    margin-bottom: 0;
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
    display: inline;
    color: var(--secondary-text);
    margin-top: 0;
    font-weight: normal;
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
    :hover {
      text-decoration: underline;
    }

    & > span.Span--History--Time--Cmt{
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

    }

`

export function LikeAndResponseCmt(props: LikeAndResponseProps) {
    return (
        <TagULikeAndResponse>
            <TagLiLikeAndResponse>
                <TagSpanLikeAndResponse aria-hidden="true" className="_6cok">&nbsp;·&nbsp;
                </TagSpanLikeAndResponse>
                <TagSpanLike>
                    <TagDivLike className="l9j0dhe7 q9uorilb">
                        <span>
                            <div aria-label="Thích" className="Like_Div--element" role="button" tabIndex={0}>
                                <div className="Div--Text">
                                    <span className="Span--Text--Like">
                                    </span>Thích
                                </div>
                            </div>
                            <div aria-label="Bày tỏ cảm xúc" className="Feel__Div--Comment" role="button" tabIndex={0}>
                                <i data-visualcompletion="css-img" className="Feel__Icon" style={{ backgroundImage: `url("https://static.xx.fbcdn.net/rsrc.php/v3/yS/r/9hjSjlsfbAc.png")`, backgroundPosition: "-26px -183px", backgroundSize: "auto", width: "12px", height: "12px", backgroundRepeat: "no-repeat", display: "inline-block" }}>
                                </i>
                                <div className="dataVisual" data-visualcompletion="ignore">

                                </div>
                            </div>
                        </span>

                        <ReactReaction />

                    </TagDivLike>
                </TagSpanLike>
            </TagLiLikeAndResponse>
            <TagLiLikeAndResponse>
                <TagSpanLikeAndResponse aria-hidden="true">&nbsp;·&nbsp;
                </TagSpanLikeAndResponse>
                <TagDivResponse className="" role="button" tabIndex={0}>
                    Phản hồi
                </TagDivResponse>
            </TagLiLikeAndResponse>
            <TagLiLikeAndResponse>
                <TagSpanLikeAndResponse aria-hidden="true" className="_6cok">&nbsp;·&nbsp;
                </TagSpanLikeAndResponse>
                <TagALinkToProductCmt className="" href="#" role="link" tabIndex={0}>
                    <span className="Span--History--Time--Cmt">12 giờ
                    </span>
                </TagALinkToProductCmt>
            </TagLiLikeAndResponse>
        </TagULikeAndResponse>
    );
}
