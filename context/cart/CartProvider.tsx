import { FC, useReducer, useEffect } from 'react';
import { ICartProduct } from '../../interfaces';
import { CartContext, cartReducer } from './';
import Cookie from 'js-cookie';

export interface CartState {
   isLoaded: boolean;
   cart: ICartProduct[];
   numberOfItems: number;
   subTotal: number;
   tax: number;
   total: number;
}

const CART_INITIAL_STATE: CartState = {
   isLoaded: false,
   cart: [],
   numberOfItems: 1,
   subTotal: 0,
   tax: 0,
   total: 0
}

export const CartProvider: FC = ({ children }) => {

   const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE);

   useEffect(() => {
      try {
         const cookieProducts = Cookie.get('cart') ? JSON.parse(Cookie.get('cart')!) : [];
         dispatch({ type: '[Cart] - LoadCart from Cookies | storage', payload: cookieProducts });

      } catch (error) {
         dispatch({ type: '[Cart] - LoadCart from Cookies | storage', payload: [] });
      }
   }, []);

   useEffect(() => {
      Cookie.set('cart', JSON.stringify(state.cart))
   }, [state.cart]);

   useEffect(() => {
      const numberOfItems = state.cart.reduce((prev, current) => current.quantity + prev, 0);
      const subTotal = state.cart.reduce((prev, current) => current.price * current.quantity + prev, 0)
      const taxRate = Number(process.env.NEXT_PUBLIC_TAX_RATE || 0);

      const summaryChecout = {
         numberOfItems,
         subTotal,
         tax: subTotal * taxRate,
         total: subTotal * (taxRate + 1)
      }

      dispatch({ type: '[Cart] - Update Order Summary', payload: summaryChecout })

   }, [state.cart])



   const addProductToCart = async (product: ICartProduct) => {
      const productInCart = state.cart.some(p => p._id === product._id);
      if (!productInCart) {
         return dispatch({ type: '[Cart] - Add Product', payload: [...state.cart, product] })
      }
      const productInCartButDifferent = state.cart.some(p => p._id === product._id && p.size === product.size);
      if (!productInCartButDifferent) {
         return dispatch({ type: '[Cart] - Add Product', payload: [...state.cart, product] })
      }
      const updatedProducts = state.cart.map(product => {
         if (product._id !== product._id) return product;
         if (product.size !== product.size) return product;
         product.quantity += product.quantity;
         return product;
      });
      dispatch({ type: '[Cart] - Add Product', payload: [...updatedProducts] })
   }

   const deleteProductFromCart = async (product: ICartProduct) => {
      dispatch({ type: '[Cart] - Remove PRoduct in Cart', payload: product });
   }

   const updateProductCartQuantity = (product: ICartProduct) => {
      dispatch({ type: '[Cart] - Update Cart Quantity', payload: product })
   }

   return (
      <CartContext.Provider value={{
         ...state,

         // methods
         addProductToCart,
         deleteProductFromCart,
         updateProductCartQuantity
      }}>
         {children}
      </CartContext.Provider>
   )
}