import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { Box } from '@gluestack-ui/themed';

import { AuthRoutes } from './auth.routes';
import { useAuth } from '@hooks/useAuth';

export function Routes() {
  const { user } = useAuth();

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