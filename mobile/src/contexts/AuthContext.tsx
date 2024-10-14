import { UserDTO } from '@dtos/UserDTO';
import { createContext, ReactNode } from 'react';

export type AuthContextDataProps = {
  user: UserDTO;
};

export const AuthContext = createContext({} as AuthContextDataProps);

interface AuthContextProviderProps {
  children: ReactNode;
}
export function AuthContextProvider({ children }: AuthContextProviderProps) {
  return (
    <AuthContext.Provider
      value={{
        user: {
          id: '1',
          name: 'Bruno',
          email: 'bruno@gmail.com',
          avatar: 'avatar',
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
