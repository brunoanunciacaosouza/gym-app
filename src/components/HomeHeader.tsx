import { Heading, HStack, Text, VStack } from "@gluestack-ui/themed";
import { UserPhoto } from "./UserPhoto";

export function HomeHeader() {
  return (
    <HStack bg="#202024" pt="$16" pb="$5" px="$8" alignItems="center" gap="$4">
      <UserPhoto
        source={{ uri: "https://avatars.githubusercontent.com/u/85529074?v=4" }}
        alt="Imagem do usuário"
        w="$16"
        h="$16"
      />

      <VStack>
        <Text color="#E1E1E6" fontSize="$sm">
          Olá,{" "}
        </Text>

        <Heading color="#E1E1E6" fontSize="$md">
          Bruno Souza
        </Heading>
      </VStack>
    </HStack>
  );
}
