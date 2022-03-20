import { createContext } from 'react'

interface ContextProps {
   isMenuOpen: boolean;
   showMenu: (showMenu: boolean) => void;
};

export const UIContext = createContext({} as ContextProps);