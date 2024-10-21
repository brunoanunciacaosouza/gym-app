import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { SectionList } from 'react-native';

import { VStack, Heading, Text, useToast } from '@gluestack-ui/themed';

import { ScreenHeader } from '@components/ScreenHeader';
import { HistoryCard } from '@components/HistoryCard';
import { ToastMessage } from '@components/ToastMessage';

import { api } from '@services/api';
import { AppError } from '@utils/AppError';

import { HistoryByDayDTO } from '@dtos/HistoryByDayDTO';
import { HistoryDTO } from '@dtos/HistoryDTO';
import { Loading } from '@components/Loading';

export function History() {
  const toast = useToast();

  const [exercises, setExercises] = useState<HistoryByDayDTO[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchHistory() {
    try {
      setIsLoading(true);

      const { data } = await api.get(`/history`);

      setExercises(data);
    } catch (error) {
      const isAppError = error instanceof AppError;

      const title = isAppError
        ? error.message
        : 'Não foi possível carregar o histórico';

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

  useFocusEffect(
    useCallback(() => {
      fetchHistory();
    }, []),
  );

  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico de Exercícios" />

      {isLoading ? (
        <Loading />
      ) : (
        <SectionList
          sections={exercises}
          keyExtractor={(item: HistoryDTO) => item.id}
          renderItem={({ item }) => <HistoryCard data={item} />}
          renderSectionHeader={({ section }) => (
            <Heading
              color="#C4C4CC"
              fontSize="$md"
              mt="$10"
              mb="$3"
              fontFamily="$heading"
            >
              {section.title}
            </Heading>
          )}
          style={{ paddingHorizontal: 32 }}
          contentContainerStyle={
            exercises.length === 0 && { flex: 1, justifyContent: 'center' }
          }
          ListEmptyComponent={() => (
            <Text color="#E1E1E6" textAlign="center">
              Não há exercícios registrados ainda.{'\n'} Vamos fazer exercícios
              hoje? `
            </Text>
          )}
          showsVerticalScrollIndicator={false}
        />
      )}
    </VStack>
  );
}
