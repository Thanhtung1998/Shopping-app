
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tw from 'twin.macro'
import '../../css/pagination.css'

Pagination.propTypes = {
    pagination: PropTypes.object.isRequired,
    onPageChange: PropTypes.func,
}

Pagination.defaultProps = {
    onPageChange: null,
}



interface IPagination {
    pagination: {
        _page: number,
        _limit: number,
        _totalRow: number,
    },
    onPageChange: any,
    pageNumberLimit: number,
    maxNumberPagination: number
}

const PaginationContainer = styled.div`
    margin: 3em 0;
    ${tw`
        w-full
        flex
        justify-center
        items-center
    `}
`

const ButtonPagination = styled.button`

    height: 40px;
    width: 80px;
    background: rgb(95 127 255 / 50%);
    padding: 2px;
    margin: 0 5px;

    :disabled{
        background: rgb(95 127 255 / 10%);
    }
`

const NumberContainer = styled.ul`
    line-styled: none;
    ${tw`
    flex
    `}
`

const NumberPageSelect = styled.li`

height: 40px;
width: 40px;
background: rgb(95 127 255 / 70%);
margin: 0 2px;
${tw`
    flex
    items-center
    justify-center
    cursor-pointer
`};

`

const NumberText = styled.a`
    text-decoration: none;
    ${tw`
        text-lg
        font-bold
        text-white
    `}

`

export function Pagination(props: IPagination) {

    const { pagination, onPageChange } = props;
    const { _page, _limit, _totalRow } = pagination;
    const [currentPage, setCurrentPage] = useState(1)
    const [pageNumberLimit, setpageNumberLimit] = useState(props.pageNumberLimit);
    const [maxNumberPagination, setMaxNumberPagination] = useState(props.maxNumberPagination)
    const [minNumberPagination, setMinNumberPagination] = useState(0)

    const _pagedata = _page

    const pageNumber = [];

    // console.log(maxNumberPagination);
    // console.log(currentPage);

    const totalPages = Math.ceil(_totalRow / _limit);

    for (let i = 1; i <= totalPages; i++) {
        pageNumber.push(i);
    }

    // console.log(pageNumber);

    function handlePageChangeDown() {
        if (onPageChange) {
            onPageChange(_pagedata - 1);
        }

        setCurrentPage(_pagedata - 1);

        if ((currentPage - 1) % pageNumberLimit == 0) {
            setMaxNumberPagination(maxNumberPagination - pageNumberLimit);
            setMinNumberPagination(minNumberPagination - pageNumberLimit);
        }

    }

    function handlePageChange(newPage: number) {
        if (onPageChange) {
            onPageChange(newPage);
            setCurrentPage(newPage);
        }
    }

    function handlePageChangeUp() {
        if (onPageChange) {
            onPageChange(_pagedata + 1);
        }
        setCurrentPage(_pagedata + 1);

        if (currentPage + 1 > maxNumberPagination) {
            setMaxNumberPagination(maxNumberPagination + pageNumberLimit);
            // console.log(maxNumberPagination + pageNumberLimit);
            setMinNumberPagination(minNumberPagination + pageNumberLimit);
        }
    }

    return (
        <PaginationContainer>
            <ButtonPagination
                id="next"
                disabled={_pagedata <= 1}
                onClick={() => {
                    handlePageChangeDown();

                }}
            >Prev
            </ButtonPagination>
            <NumberContainer>
                {pageNumber && pageNumber.map((numberPage) => {
                    if (numberPage < maxNumberPagination + 1 && numberPage > minNumberPagination) {
                        return (
                            <NumberPageSelect key={numberPage} className={currentPage === numberPage ? "active" : ""} onClick={() => handlePageChange(numberPage)} >
                                <NumberText>
                                    {numberPage}
                                </NumberText>
                            </NumberPageSelect >
                        )
                    } else {
                        return null;
                    }
                }
                )
                }
            </NumberContainer>
            <ButtonPagination
                id="prev"
                disabled={_pagedata >= totalPages}
                onClick={() => {
                    handlePageChangeUp();
                }}
            >Next
            </ButtonPagination>
        </PaginationContainer>
    )
}