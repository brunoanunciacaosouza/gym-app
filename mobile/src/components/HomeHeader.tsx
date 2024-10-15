import { Heading, HStack, Text, VStack, Icon } from '@gluestack-ui/themed';
import { UserPhoto } from './UserPhoto';
import { LogOut } from 'lucide-react-native';
import { useAuth } from '@hooks/useAuth';

export function HomeHeader() {
  const { user } = useAuth();
  return (
    <HStack bg="#202024" pt="$16" pb="$5" px="$8" alignItems="center" gap="$4">
      <UserPhoto
        source={{ uri: 'https://avatars.githubusercontent.com/u/85529074?v=4' }}
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

      <Icon as={LogOut} color="#C4C4CC" size="xl" />
    </HStack>
  );
}
