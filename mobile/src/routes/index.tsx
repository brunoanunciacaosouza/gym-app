import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { Box } from '@gluestack-ui/themed';

import { Loading } from '@components/Loading';

import { AuthRoutes } from './auth.routes';
import { useAuth } from '@hooks/useAuth';
import { AppRoutes } from './app.routes';

export function Routes() {
  const { user, isLoadingUserStorageData } = useAuth();

  const theme = DefaultTheme;
  theme.colors.background = '#121214';

  if (isLoadingUserStorageData) {
    return <Loading />;
  }

  return (
    <Box flex={1} bg="#121214">
      <NavigationContainer theme={theme}>
        {user.id ? <AppRoutes /> : <AuthRoutes />}
      </NavigationContainer>
    </Box>
  );
}
