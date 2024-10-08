import { Image, VStack } from "@gluestack-ui/themed";

import BackgroundImg from "@assets/background.png";

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
    </VStack>
  );
}
