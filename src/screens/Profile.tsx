import { ScrollView, TouchableOpacity } from "react-native";
import { VStack, Center, Text } from "@gluestack-ui/themed";

import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";

export function Profile() {
  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />

      <ScrollView contentContainerStyle={{ paddingBottom: 36 }}>
        <Center mt="$6" px="$10">
          <UserPhoto
            source={{
              uri: "https://avatars.githubusercontent.com/u/85529074?v=4",
            }}
            alt="Foto do usuário"
            size="xl"
          />

          <TouchableOpacity
          >
            <Text
              color="$green500"
              fontFamily="$heading"
              fontSize="$md"
              mt="$2"
              mb="$8"
              ml="$6"
              textAlign="center"
            >
              Alterar foto
            </Text>
          </TouchableOpacity>
        </Center>
      </ScrollView>
    </VStack>
  );
}
