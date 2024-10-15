import { createContext, ReactNode, useEffect, useState } from 'react';
import { UserDTO } from '@dtos/UserDTO';
import { api } from '@services/api';

import {
  storageUserSave,
  storageUserGet,
  storageUserRemove,
} from '@storage/storageUser';

import { storageAuthTokenSave } from '@storage/storageAuthToken';

export type AuthContextDataProps = {
  user: UserDTO;
  signIn: (email: string, password: string) => Promise<void>;
  isLoadingUserStorageData: boolean;
  signOut: () => void;
};

export const AuthContext = createContext({} as AuthContextDataProps);

interface AuthContextProviderProps {
  children: ReactNode;
}
export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState({} as UserDTO);
  const [isLoadingUserStorageData, setIsLoadingUserData] = useState(true);

  async function storageUserAndToken(userData: UserDTO, token: string) {
    try {
      setIsLoadingUserData(true);

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      await storageUserSave(userData);
      await storageAuthTokenSave(token);

      setUser(userData);
    } catch (error) {
      throw error;
    } finally {
      setIsLoadingUserData(false);
    }
  }

  async function signIn(email: string, password: string) {
    try {
      const { data } = await api.post('/sessions', { email, password });

      if (data.user) {
        storageUserAndToken(data.user, data.token);
      }
    } catch (error) {
      throw error;
    }
  }

  async function signOut() {
    try {
      setIsLoadingUserData(true);
      setUser({} as UserDTO);
      await storageUserRemove();
    } catch (error) {
      throw error;
    } finally {
      setIsLoadingUserData(false);
    }
  }

  async function loadUserData() {
    try {
      const userLogged = await storageUserGet();

      if (userLogged) {
        setUser(userLogged);
        setIsLoadingUserData(false);
      }
    } catch (error) {
      throw error;
    } finally {
      setIsLoadingUserData(false);
    }
  }

  useEffect(() => {
    loadUserData();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, signIn, isLoadingUserStorageData, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
}
