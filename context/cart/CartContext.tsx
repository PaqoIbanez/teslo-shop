import { createContext } from 'react'
import { ICartProduct } from '../../interfaces';

interface ContextProps {
   cart: ICartProduct[];

   // Order Summary
   numberOfItems: number;
   subTotal: number;
   tax: number;
   total: number;
   isLoaded: boolean;


   // methods
   addProductToCart: (product: ICartProduct) => void;
   deleteProductFromCart: (product: ICartProduct) => void;
   updateProductCartQuantity: (product: ICartProduct) => void;
};

export const CartContext = createContext({} as ContextProps);

