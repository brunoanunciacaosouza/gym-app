import { useContext } from 'react';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { Box } from '@gluestack-ui/themed';

import { AuthContext } from '@contexts/AuthContext';

import { AuthRoutes } from './auth.routes';

export function Routes() {
  const {} = useContext(AuthContext);
  const theme = DefaultTheme;

  theme.colors.background = '#121214';

  return (
    <Box flex={1} bg="#121214">
      <NavigationContainer theme={theme}>
        <AuthRoutes />
      </NavigationContainer>
    </Box>
  );
}
