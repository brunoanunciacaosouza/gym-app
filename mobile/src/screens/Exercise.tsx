import { useEffect, useState } from 'react';
import { TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
  VStack,
  Icon,
  HStack,
  Heading,
  Text,
  Image,
  Box,
  useToast,
} from '@gluestack-ui/themed';
import { ArrowLeft } from 'lucide-react-native';

import { Button } from '@components/Button';
import { ToastMessage } from '@components/ToastMessage';

import BodySvg from '@assets/body.svg';
import SeriesSvg from '@assets/series.svg';
import Repetitions from '@assets/repetitions.svg';

import { AppNavigatorRoutesProps } from '@routes/app.routes';

import { api } from '@services/api';
import { AppError } from '@utils/AppError';

import { ExerciseDTO } from '@dtos/ExerciseDTO';

type RouteParams = {
  exerciseId: number;
};

export function Exercise() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const toast = useToast();

  const [exercise, setExercise] = useState({} as ExerciseDTO);
  const [isLoading, setIsLoading] = useState(true);

  const route = useRoute();
  const { exerciseId } = route?.params as RouteParams;

  function handleGoBack() {
    navigation.goBack();
  }

  async function fetchExercisesDetails() {
    try {
      setIsLoading(true);

      const { data } = await api.get(`/exercises/${exerciseId}`);

      setExercise(data);
    } catch (error) {
      const isAppError = error instanceof AppError;

      const title = isAppError
        ? error.message
        : 'Não foi possível carregar os detalhes do exercício';

      toast.show({
        placement: 'top',
        render: ({ id }) => (
          <ToastMessage
            id={id}
            action="error"
            title={title}
            description={'Tente novamente mais tarde.'}
            onClose={() => toast.close(id)}
          />
        ),
      });
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchExercisesDetails();
  }, [exerciseId]);

  return (
    <VStack flex={1}>
      <VStack px="$8" bg="#202024" pt="$12">
        <TouchableOpacity onPress={handleGoBack}>
          <Icon as={ArrowLeft} color="$green500" size="xl" />
        </TouchableOpacity>

        <HStack
          justifyContent="space-between"
          alignItems="center"
          mt="$4"
          mb="$8"
        >
          <Heading
            color="#E1E1E6"
            fontFamily="$heading"
            fontSize="$lg"
            flexShrink={1}
          >
            {exercise.name}
          </Heading>

          <HStack alignItems="center">
            <BodySvg />
            <Text color="#C4C4CC" m="$1" textTransform="capitalize">
              {exercise.group}
            </Text>
          </HStack>
        </HStack>
      </VStack>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32 }}
      >
        <VStack p="$8">
          <Box rounded="$lg" mb={3} overflow="hidden">
            <Image
              source={{
                uri: `${api.defaults.baseURL}/exercises/thumb/${exercise.demo}`,
              }}
              alt="Exercício"
              mb="$3"
              resizeMode="cover"
              rounded="$lg"
              w="$full"
              h="$80"
            />
          </Box>

          <Box bg="#202024" rounded="$md" pb="$4" px="$4">
            <HStack
              alignItems="center"
              justifyContent="space-around"
              mb="$6"
              mt="$5"
            >
              <HStack>
                <SeriesSvg />
                <Text color="#C4C4CC" ml="$2">
                  {exercise.series} séries
                </Text>
              </HStack>

              <HStack>
                <Repetitions />
                <Text color="#C4C4CC" ml="$2">
                  {exercise.repetitions} repetições
                </Text>
              </HStack>
            </HStack>

            <Button title="Marcar como realizado" />
          </Box>
        </VStack>
      </ScrollView>
    </VStack>
  );
}
