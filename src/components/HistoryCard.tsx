import { Heading, HStack, Text, VStack } from "@gluestack-ui/themed";

export function HistoryCard() {
  return (
    <HStack
      w="$full"
      px="$5"
      py="$4"
      mb="$3"
      bg="#202024"
      rounded="$md"
      alignItems="center"
      justifyContent="space-between"
    >
      <VStack mr="$5">
        <Heading
          color="white"
          fontSize="$md"
          textTransform="capitalize"
          fontFamily="$heading"
        >
          Costas
        </Heading>

        <Text color="#E1E1E6" fontSize="$lg" numberOfLines={1}>
          Puxada frontal
        </Text>
      </VStack>

      <Text color="#7C7C8A" fontSize="$md">
        08:56
      </Text>
    </HStack>
  );
}
