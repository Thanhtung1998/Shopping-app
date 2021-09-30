import { createSlice } from "@reduxjs/toolkit"

export interface initialState {
    items: Array<any>;
    products: any;
    filteredProducts: any;
}

const initialState = {
    items: [],
    products: null,
    filteredProducts: null,
}

const ProductSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addProducts: (state: any, action) => {
            state.products = action.payload
            state.filteredProducts = action.payload
        },
        updateFilters: (state, action) => {
            state.filteredProducts = action.payload
        },
        clearFilters: (state) => {
            state.filteredProducts = state.products
        },
        addToBasket: (state: any, action) => {
            const index = state.items.findIndex((basketItem: any) => basketItem.id === action.payload.id)
            if (action.payload.quantity > 0) {
                if (index >= 0) {
                    state.items[index].quantity += action.payload.quantity
                } else {
                    state.items = [...state.items, action.payload]
                }
            }
        },
        updateQuantity: (state: any, action) => {
            const index = state.items.findIndex((basketItem: any) => basketItem.id === action.payload.id)

            if (index >= 0) {
                if (action.payload.quantity > 0) {
                    state.items[index].quantity = action.payload.quantity
                } else {
                    let newBasket = [...state.items]
                    newBasket.splice(index, 1)
                    state.items = newBasket
                }
            }
            else console.warn(`Can't remove product ${action.payload.id} as its does not exist!`)
        },
        removeFromBasket: (state: any, action) => {
            const index = state.items.findIndex((basketItem: any) => basketItem.id === action.payload.id)
            let newBasket = [...state.items]

            if (index >= 0) newBasket.splice(index, 1)
            else console.warn(`Can't remove product ${action.payload.id} as its does not exist!`)

            state.items = newBasket
        },
    }
})

export const { addToBasket, removeFromBasket, updateQuantity, addProducts, updateFilters, clearFilters } = ProductSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state: any) => state.product.items;
export const selectProducts = (state: any) => state.product.products;
export const selectFilteredProducts = (state: any) => state.product.filteredProducts;
export const selectTotal = (state: any) => state.product.items.reduce((total: any, item: any) => total + item.price * item.quantity, 0);
export const selectTotalItems = (state: any) => state.product.items.reduce((total: any, item: any) => total + item.quantity, 0);

export default ProductSlice.reducer;
