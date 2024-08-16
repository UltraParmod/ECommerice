import { createSlice } from '@reduxjs/toolkit'
import { ProductsProps } from '../../type'
interface StoreState {
    productsData: ProductsProps[]
}
const initialState: StoreState = {
    productsData: []

}
export const orebiSlice = createSlice({
    name: 'orebi',
    initialState,
    reducers: {

        addToCart: (state, action) => {
            const existingProduct = state.productsData.find(
                (item: ProductsProps) => item._id === action.payload
            );
            if (existingProduct) {
                existingProduct.quantity += action.payload.quantity
            } else {
                state.productsData.push(action.payload)
            }
        },
        increaseQuantity: (state, action) => {
            const existingProduct = state.productsData.find(
                (item: ProductsProps) => item._id === action.payload._id
            )
            existingProduct && existingProduct.quantity++;
        },
        decreaseQuantity: (state, action) => {
            const existingProduct = state.productsData.find(
                (item: ProductsProps) => item._id === action.payload._id
            )
            if (existingProduct?.quantity === 1) {
                existingProduct.quantity === 1
            } else {
                existingProduct && existingProduct.quantity--
            },
            deletePoduct: (state, action) => {
                state.productsData = state.productsData.filter(
                    item => item._id !== action.payload
                )
            },
                resetCart: state => {
                    state.productsData = []
                }
        }
    }
})

export const {addToCart,increaseQuantity,decreaseQuantity,deletePoduct,resetCart}=orebiSlice.actions;
export default orebiSlice.reducer