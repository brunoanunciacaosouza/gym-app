import { TouchableOpacity } from 'react-native';
import { Heading, HStack, Text, VStack, Icon } from '@gluestack-ui/themed';
import { LogOut } from 'lucide-react-native';
import { UserPhoto } from './UserPhoto';

import { useAuth } from '@hooks/useAuth';

import defaultPhotoUser from '@assets/userPhotoDefault.png';

import { api } from '@services/api';

export function HomeHeader() {
  const { user, signOut } = useAuth();
  return (
    <HStack bg="#202024" pt="$16" pb="$5" px="$8" alignItems="center" gap="$4">
      <UserPhoto
        source={
          user.avatar
            ? { uri: `${api.defaults.baseURL}avatar/${user.avatar}` }
            : defaultPhotoUser
        }
        alt="Imagem do usuário"
        w="$16"
        h="$16"
      />

      <VStack flex={1}>
        <Text color="#E1E1E6" fontSize="$sm">
          Olá,{' '}
        </Text>

        <Heading color="#E1E1E6" fontSize="$md">
          {user?.name}
        </Heading>
      </VStack>

      <TouchableOpacity onPress={() => signOut()}>
        <Icon as={LogOut} color="#C4C4CC" size="xl" />
      </TouchableOpacity>
    </HStack>
  );
}
