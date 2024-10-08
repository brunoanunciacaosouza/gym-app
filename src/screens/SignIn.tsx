import {
  Center,
  Heading,
  Image,
  Text,
  VStack,
  ScrollView,
} from "@gluestack-ui/themed";

import BackgroundImg from "@assets/background.png";
import Logo from "@assets/logo.svg";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function SignIn() {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} bg="#121214">
        <Image
          source={BackgroundImg}
          alt="Pessoas treinando"
          w="$full"
          h={624}
          defaultSource={BackgroundImg}
          position="absolute"
        />

        <VStack flex={1} px="$10" pb="$16">
          <Center my="$24">
            <Logo />

            <Text color="#E1E1E6" fontSize="$sm">
              Treine sua mente e o seu corpo.
            </Text>
          </Center>

          <Center gap="$2">
            <Heading color="#E1E1E6">Acesse a conta</Heading>

            <Input placeholder="E-mail" keyboardType="email-address" />

            <Input placeholder="Senha" secureTextEntry />

            <Button title="Acessar" />
          </Center>

          <Center flex={1} justifyContent="flex-end" mt="$4">
            <Text color="#E1E1E6" fontSize="$sm" mb="$3" fontFamily="$body">
              Ainda não tem acesso?
            </Text>

            <Button title="Criar conta" variant="outline" />
          </Center>
        </VStack>
      </VStack>
    </ScrollView>
  );
}
