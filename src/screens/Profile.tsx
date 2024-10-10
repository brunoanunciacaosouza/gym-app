import { ScrollView, TouchableOpacity } from "react-native";
import { VStack, Center, Text, Heading } from "@gluestack-ui/themed";

import { ScreenHeader } from "@components/ScreenHeader";
import { UserPhoto } from "@components/UserPhoto";
import { Input } from "@components/Input";
import { Button } from "@components/Button";

export function Profile() {
  return (
    <VStack flex={1}>
      <ScreenHeader title="Perfil" />

      <ScrollView
        contentContainerStyle={{ paddingBottom: 36 }}
        showsVerticalScrollIndicator={false}
      >
        <Center mt="$6" px="$10">
          <UserPhoto
            source={{
              uri: "https://avatars.githubusercontent.com/u/85529074?v=4",
            }}
            alt="Foto do usuário"
            size="xl"
          />

          <TouchableOpacity>
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

          <Center w="$full" gap="$4">
            <Input placeholder="Nome" bg="#202024" />
            <Input value="email@email.com" bg="#202024" isReadOnly />
          </Center>

          <Heading
            alignSelf="flex-start"
            fontFamily="$heading"
            color="#C4C4CC"
            fontSize="$md"
            mt="$12"
            mb="$2"
          >
            Alterar senha
          </Heading>

          <Center w="$full" gap="$4">
            <Input placeholder="Senha antiga" bg="#202024" secureTextEntry />
            <Input placeholder="Nova senha" bg="#202024" secureTextEntry />
            <Input
              placeholder="Confirme a nova senha"
              bg="#202024"
              secureTextEntry
            />

            <Button title="Atualizar"/>
          </Center>
        </Center>
      </ScrollView>
    </VStack>
  );
}
