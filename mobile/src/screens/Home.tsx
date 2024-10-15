import { useCallback, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { Heading, HStack, Text, useToast, VStack } from '@gluestack-ui/themed';

import { Group } from '@components/Group';
import { HomeHeader } from '@components/HomeHeader';
import { ExerciseCard } from '@components/ExerciseCard';
import { ToastMessage } from '@components/ToastMessage';

import { AppNavigatorRoutesProps } from '@routes/app.routes';

import { AppError } from '@utils/AppError';
import { api } from '@services/api';

import { ExerciseDTO } from '@dtos/ExerciseDTO';

export function Home() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const toast = useToast();

  const [groups, setGroups] = useState<string[]>([]);
  const [exercises, setExercises] = useState<ExerciseDTO[]>([]);
  const [groupSelected, setGroupSelected] = useState('Costas');

  function handleOpenExercisesDetails() {
    navigation.navigate('exercise');
  }

  async function fetchGroups() {
    try {
      const { data } = await api.get('/groups');
      setGroups(data);
    } catch (error) {
      const isAppError = error instanceof AppError;

      const title = isAppError
        ? error.message
        : 'Não foi possível carregar os grupos musculares';

      toast.show({
        placement: 'top',
        render: ({ id }) => (
          <ToastMessage
            id={id}
            action="error"
            title={title}
            description={'Tente novamente.'}
            onClose={() => toast.close(id)}
          />
        ),
      });
    }
  }

  async function fetchExercisesByGroup() {
    try {
      const { data } = await api.get(`/exercises/bygroup/${groupSelected}`);

      setExercises(data);
    } catch (error) {
      const isAppError = error instanceof AppError;

      const title = isAppError
        ? error.message
        : 'Não foi possível carregar os exercícios';

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
    }
  }

  useEffect(() => {
    fetchGroups();
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchExercisesByGroup();
    }, [groupSelected]),
  );

  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Group
            name={item}
            isActive={groupSelected.toLowerCase() === item.toLowerCase()}
            onPress={() => setGroupSelected(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 10,
        }}
        style={{
          marginVertical: 40,
          maxHeight: 44,
          minHeight: 44,
        }}
      />

      <VStack px="$8" flex={1}>
        <HStack justifyContent="space-between" mb="$5" alignItems="center">
          <Heading color="#C4C4CC" fontSize="$md" fontFamily="$heading">
            Exercícios
          </Heading>

          <Text color="#C4C4CC" fontSize="$sm" fontFamily="$body">
            {exercises.length}
          </Text>
        </HStack>

        <FlatList
          data={exercises}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <ExerciseCard onPress={handleOpenExercisesDetails} data={item} />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </VStack>
    </VStack>
  );
}
