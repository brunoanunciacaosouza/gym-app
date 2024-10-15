import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import {
  Heading,
  HStack,
  Icon,
  Image,
  Text,
  VStack,
} from '@gluestack-ui/themed';

import { ChevronRight } from 'lucide-react-native';

import { ExerciseDTO } from '@dtos/ExerciseDTO';

import { api } from '@services/api';

type Props = TouchableOpacityProps & {
  data: ExerciseDTO;
};

export function ExerciseCard({ data, ...rest }: Props) {
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
            uri: `${api.defaults.baseURL}/exercises/thumb/${data.thumb}`,
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
            {data.name}
          </Heading>

          <Text fontSize="$sm" color="#C4C4CC" mt="$1" numberOfLines={2}>
            {data.series} séries x {data.repetitions} repetições
          </Text>
        </VStack>

        <Icon as={ChevronRight} color="#7C7C8A" />
      </HStack>
    </TouchableOpacity>
  );
}
