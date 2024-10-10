import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import {
  Center,
  Heading,
  Image,
  Text,
  VStack,
  ScrollView,
} from "@gluestack-ui/themed";

import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

import { Input } from "@components/Input";
import { Button } from "@components/Button";

import BackgroundImg from "@assets/background.png";
import Logo from "@assets/logo.svg";

export function SignUp() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  function handleGoBack() {
    navigation.navigate("signIn");
  }

  function handleSignUp() {
    console.log(name);
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1}>
        <Image
          source={BackgroundImg}
          alt="Pessoas treinando"
          w="$full"
          h={624}
          defaultSource={BackgroundImg}
          position="absolute"
        />

        <VStack flex={1} px="$10" pb="$16">
          <Center my="$24">
            <Logo />

            <Text color="#E1E1E6" fontSize="$sm">
              Treine sua mente e o seu corpo.
            </Text>
          </Center>

          <Center gap="$2" flex={1}>
            <Heading color="#E1E1E6">Crie sua conta</Heading>

            <Input placeholder="Nome" onChangeText={setName} />

            <Input
              placeholder="E-mail"
              keyboardType="email-address"
              onChangeText={setEmail}
            />

            <Input
              placeholder="Senha"
              secureTextEntry
              onChangeText={setPassword}
            />

            <Input
              placeholder="Confirme a senha"
              secureTextEntry
              onChangeText={setPasswordConfirm}
            />

            <Button title="Criar e acessar" onPress={handleSignUp} />
          </Center>

          <Button
            title="Voltar para o Login"
            variant="outline"
            mt="$12"
            onPress={handleGoBack}
          />
        </VStack>
      </VStack>
    </ScrollView>
  );
}
