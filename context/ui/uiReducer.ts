import { UIState } from './';

type UIActionType =
   | { type: '[UI] - Show Menu', payload: boolean }

export const uiReducer = (state: UIState, action: UIActionType): UIState => {

   switch (action.type) {
      case '[UI] - Show Menu':
         return {
            ...state,
            isMenuOpen: action.payload
         }

      default:
         return state;
   }

}