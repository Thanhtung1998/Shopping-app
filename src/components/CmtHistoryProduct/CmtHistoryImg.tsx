import * as React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { FeelCmtHistory } from './FeelCmtHistory';


export interface ImgProps {
}

const MainCmtImg = styled.div`
    font-family: inherit;
    display: flex;
    word-wrap: break-word;
    max-width: calc(100% - 26px);

`

const PositionCmtImg = styled.div`
    font-family: inherit;
    display: inline-flex;
    position: relative;
    vertical-align: middle;
    width: 100%;

`

const BodyCmtImg = styled.div`
    font-family: inherit;
    flex: 1 1 auto;
    min-width: 0;
    width: 100%;
`

const ContentCmtImg = styled.div`
    font-family: inherit;
    margin-bottom: 4px;
    overflow-y: hidden;
    vertical-align: middle;
    border-bottom-left-radius: 18px;
    border-top-right-radius: 18px;
    display: inline-block;
    overflow-x: hidden;
    position: relative;
    margin-top: 0;
    border-bottom-right-radius: 18px;
    border-top-left-radius: 18px;
    max-width: 100%;

`

const BoxCmtImg = styled.div`
    font-family: inherit;
    box-sizing: border-box;
    position: absolute;
    right: 0;
    top: 0;
    left: 0;
    bottom: 0;
`

const TagACmtImg = styled.a`
    font-family: inherit;
    padding-right: 0;
    box-sizing: border-box;
    padding-bottom: 0;
    margin-bottom: 0;
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
    display: inline;
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
`


export function CmtHistoryImg(props: ImgProps) {
    return (
        <MainCmtImg >
            <PositionCmtImg >
                <BodyCmtImg >
                    <ContentCmtImg>
                        <BoxCmtImg>
                            <TagACmtImg href="#" role="link" tabIndex={0}>
                                <img height="161" width="260" alt={""}
                                    referrerPolicy="origin-when-cross-origin"
                                    src="https://scontent-sin6-2.xx.fbcdn.net/v/t1.6435-9/s261x260/245719601_4793142164029626_9126215554815777652_n.png?_nc_cat=105&amp;ccb=1-5&amp;_nc_sid=dbeb18&amp;_nc_ohc=5TC8n_CFhN4AX-RY2dc&amp;_nc_ht=scontent-sin6-2.xx&amp;oh=e82bbd8bbb46ae034f425d8d33905d93&amp;oe=618CA83F" />
                            </TagACmtImg>
                        </BoxCmtImg>
                        <div className="d2edcug0" style={{ paddingBottom: "61.9231%", width: "260px" }}></div>
                        <div
                            className="t51s4qs2 bv6zxntz qc3rp1z7 rj06g9kl e72ty7fz qlfml3jp inkptoze qmr60zad goun2846 ccm00jje s44p3ltw mk2mc5f4 frvqaej8 ed0hlay0 afxsp9o4 jcgfde61 rq0escxv hzruof5a i09qtzwb n7fi1qx3 pmk7jnqg j9ispegn kr520xx4">
                        </div>
                    </ContentCmtImg>
                </BodyCmtImg>
                <FeelCmtHistory />
            </PositionCmtImg>
        </MainCmtImg>
    );
}
