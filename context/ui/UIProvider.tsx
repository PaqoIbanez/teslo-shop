import { FC, useReducer } from 'react';
import { UIContext, uiReducer } from './';

export interface UIState {
   isMenuOpen: boolean;
}

const UI_INITIAL_STATE: UIState = {
   isMenuOpen: false,
}

export const UIProvider: FC = ({ children }) => {

   const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

   const showMenu = (showMenu:boolean) => {
      dispatch({ type: '[UI] - Show Menu', payload: showMenu });
   }

   return (
      <UIContext.Provider value={{
         ...state,

         // methods
         showMenu
      }}>
         {children}
      </UIContext.Provider>
   )
}