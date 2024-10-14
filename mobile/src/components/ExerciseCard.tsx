import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import {
  Heading,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
} from "@gluestack-ui/themed";

import { ChevronRight } from "lucide-react-native";

type Props = TouchableOpacityProps & {};

export function ExerciseCard({ ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack
        bg="#29292E"
        alignItems="center"
        p="$2"
        pr="$4"
        rounded="$md"
        mb="$3"
      >
        <Image
          source={{
            uri: "https://static.wixstatic.com/media/2edbed_2e9f85ee0d4b46d0b4f590b3be3e29c6~mv2.webp",
          }}
          alt="Imagem do exercício"
          w="$16"
          h="$16"
          rounded="$md"
          mr="$4"
          resizeMode="cover"
        />

        <VStack flex={1}>
          <Heading fontSize="$lg" color="white" fontFamily="$heading">
            Rosca direta
          </Heading>

          <Text fontSize="$sm" color="#C4C4CC" mt="$1" numberOfLines={2}>
            3 séries x 12 repetições
          </Text>
        </VStack>

        <Icon as={ChevronRight} color="#7C7C8A" />
      </HStack>
    </TouchableOpacity>
  );
}
