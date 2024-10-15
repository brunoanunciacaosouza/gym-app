import { useState } from "react";
import { SectionList } from "react-native";

import { VStack, Heading, Text } from "@gluestack-ui/themed";

import { ScreenHeader } from "@components/ScreenHeader";
import { HistoryCard } from "@components/HistoryCard";

export function History() {
  const [exercises, setExercises] = useState([
    {
      title: "22.07.24",
      data: ["Puxada frontal", "Posteriores"],
    },
    {
      title: "23.07.24",
      data: ["Rosca direta"],
    },
  ]);
  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico de Exercícios" />

      <SectionList
        sections={exercises}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <HistoryCard />}
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
          exercises.length === 0 && { flex: 1, justifyContent: "center" }
        }
        ListEmptyComponent={() => (
          <Text color="#E1E1E6" textAlign="center">
            Não há exercícios registrados ainda.{"\n"} Vamos fazer exercícios
            hoje? `
          </Text>
        )}
        showsVerticalScrollIndicator={false}
      />
    </VStack>
  );
}