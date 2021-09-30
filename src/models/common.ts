
export interface Pagination {
    _page: number;
    _skip: number;
    _limit: number;
    _totalRow: number;
}

export interface ProductData<T> {    //T is Generics 
    data: {
        product: T[];
        pagination: Pagination;
    };

}