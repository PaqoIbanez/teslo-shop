import { FC, useReducer, useEffect } from 'react';
import { IUser } from '../../interfaces';
import { AuthContext, authReducer } from './';
import testloApi from '../../api/tesloApi';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import axios from 'axios';

export interface AuthState {
   isLoggedIn: boolean;
   user?: IUser;
}

const AUTH_INITIAL_STATE: AuthState = {
   isLoggedIn: false,
   user: undefined
}

export const AuthProvider: FC = ({ children }) => {

   const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE);
   const router = useRouter();

   useEffect(() => {
      if (Cookies.get('token')) {
         checkToken();
      }
   }, []);

   const checkToken = async () => {
      try {
         const { data } = await testloApi.get('/users/validate');
         const { token, user } = data;
         Cookies.set('token', token);
         dispatch({ type: '[Auth] - Login', payload: user })
      } catch (error) {
         Cookies.remove('token');
      }
   }

   const loginUser = async (email: string, password: string): Promise<boolean> => {
      try {
         const { data } = await testloApi.post('/users/login', { email, password });
         const { token, user } = data;
         Cookies.set('token', token);
         dispatch({ type: '[Auth] - Login', payload: user })
         return true;
      } catch (error) {
         return false;
      }
   }

   const registerUser = async (name: string, email: string, password: string): Promise<{ hasError: boolean, message?: string }> => {
      try {
         const { data } = await testloApi.post('/users/register', { name, email, password });
         const { token, user } = data;
         Cookies.set('token', token);
         dispatch({ type: '[Auth] - Login', payload: user })
         return {
            hasError: false
         };
      } catch (error) {
         if (axios.isAxiosError(error)) {
            return {
               hasError: true,
               message: error.response?.data.message
            }
         }
         return {
            hasError: true,
            message: 'No se pudo crear el usuario - intente de nuevo'
         }
      }
   }

   const logout = () => {
      Cookies.remove('token');
      Cookies.remove('cart');

      router.reload();
   }

   return (
      <AuthContext.Provider value={{
         ...state,

         //methods
         loginUser,
         logout,
         registerUser
      }}>
         {children}
      </AuthContext.Provider>
   )
}