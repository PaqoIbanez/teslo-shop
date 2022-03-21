import { ICartProduct } from '../../interfaces';
import { CartState } from './';

type CartActionType =
   | { type: '[Cart] - LoadCart from Cookies | storage', payload: ICartProduct[] }
   | { type: '[Cart] - Add Product', payload: ICartProduct[] }
   | { type: '[Cart] - Remove PRoduct in Cart', payload: ICartProduct }
   | { type: '[Cart] - Update Cart Quantity', payload: ICartProduct }
   | {
      type: '[Cart] - Update Order Summary',
      payload: {
         numberOfItems: number;
         subTotal: number;
         tax: number;
         total: number;
      }
   }

export const cartReducer = (state: CartState, action: CartActionType): CartState => {

   switch (action.type) {
      case '[Cart] - LoadCart from Cookies | storage':
         return {
            ...state,
            cart: action.payload
         }

      case '[Cart] - Add Product':
         return {
            ...state,
            cart: action.payload
         }

      case '[Cart] - Remove PRoduct in Cart':
         return {
            ...state,
            cart: state.cart.filter(product =>
               !(product._id == action.payload._id && product.size == action.payload.size)
            )
         }

      case '[Cart] - Update Order Summary':
         return {
            ...state,
            ...action.payload
         }

      case '[Cart] - Update Cart Quantity':
         return {
            ...state,
            cart: [
               ...state.cart.map(product => {
                  if (product._id !== action.payload._id) return product;
                  if (product.size !== action.payload.size) return product;
                  return action.payload;
               })
            ]
         }

      default:
         return state;
   }

}