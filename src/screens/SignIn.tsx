import { Center, Image, Text, VStack } from "@gluestack-ui/themed";

import BackgroundImg from "@assets/background.png";
import Logo from "@assets/logo.svg";

export function SignIn() {
  return (
    <VStack flex={1} bg="#121214">
      <Image
        source={BackgroundImg}
        alt="Pessoas treinando"
        w="$full"
        h={624}
        defaultSource={BackgroundImg}
        position="absolute"
      />

      <Center my="$24">
        <Logo />

        <Text color="#E1E1E6" fontSize="$sm">
            Treine sua mente e o seu corpo.
        </Text>
      </Center>
    </VStack>
  );
}
