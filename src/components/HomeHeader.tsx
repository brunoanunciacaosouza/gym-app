import { Heading, HStack, Text, VStack } from "@gluestack-ui/themed";

export function HomeHeader() {
  return (
    <HStack bg="#202024" pt="$16" pb="$5" px="$8" alignItems="center">
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
