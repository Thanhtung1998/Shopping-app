import React from 'react';
import tw from 'twin.macro'
import styled from 'styled-components';

export interface RatingProps {
    ratingData: number;
}

const StarsOuter = styled.div`

position: relative;
  display: inline-block;

  ::before{
    content: "\f005 \f005 \f005 \f005 \f005";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    color: #ccc;
  }


`

const StarsInner = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    white-space: nowrap;
    overflow: hidden;
    width: 0;

    ::before {
        content: "\f005 \f005 \f005 \f005 \f005";
        font-family: "Font Awesome 5 Free";
        font-weight: 900;
        color: #f8ce0b;
      }
      

`

export function RatingStar(props: RatingProps) {

    const { ratingData } = props

    const starsTotal = 5;

    const starPercentage = (ratingData / starsTotal) * 100;

    return (
        <>

            <StarsOuter >
                <StarsInner style={{ width: `${starPercentage}%` }} ></StarsInner>
            </StarsOuter>
        </>
    );
}
