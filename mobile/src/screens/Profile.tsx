import { useState } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
import {
  VStack,
  Center,
  Text,
  Heading,
  useToast,
  onChange,
} from '@gluestack-ui/themed';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';

import { useForm, Controller } from 'react-hook-form';

import { ScreenHeader } from '@components/ScreenHeader';
import { UserPhoto } from '@components/UserPhoto';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { ToastMessage } from '@components/ToastMessage';
import { useAuth } from '@hooks/useAuth';

type FormDataProps = {
  name: string;
  email: string;
  password: string;
  old_password: string;
  confirm_password: string;
};

export function Profile() {
  const [photoIsLoading, setPhotoIsLoading] = useState(false);
  const [userPhoto, setUserPhoto] = useState(
    'https://avatars.githubusercontent.com/u/85529074?v=4',
  );

  const { user } = useAuth();
  const { control } = useForm<FormDataProps>({
    defaultValues: {
      name: user.name,
      email: user.email,
    },
  });

  const toast = useToast();

  async function HandleUserPhotoSelect() {
    try {
      const photoSelected = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
        aspect: [4, 4],
        allowsEditing: true,
      });

      if (photoSelected.canceled) {
        return;
      }

      const photoUri = photoSelected.assets[0].uri;

      if (photoUri) {
        const photoInfo = (await FileSystem.getInfoAsync(photoUri)) as {
          size: number;
        };

        if (photoInfo.size && photoInfo.size / 1024 / 1024 > 5) {
          return toast.show({
            placement: 'top',
            render: ({ id }) => (
              <ToastMessage
                id={id}
                action="error"
                title="Imagem muito grande"
                description="Essa imagem é muito grande. Escolha uma de até 5mb"
                onClose={() => toast.close(id)}
              />
            ),
          });
        }

        setUserPhoto(photoUri);
      }
    } catch (error) {
      console.log(error);
    }
  }

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
              uri: userPhoto,
            }}
            alt="Foto do usuário"
            size="xl"
          />

          <TouchableOpacity onPress={HandleUserPhotoSelect}>
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
            <Controller
              control={control}
              name="name"
              render={({ field: { value, onChange } }) => (
                <Input
                  placeholder="Nome"
                  bg="#202024"
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />

            <Controller
              control={control}
              name="email"
              render={({ field: { value, onChange } }) => (
                <Input
                  bg="#202024"
                  placeholder="E-mail"
                  onChangeText={onChange}
                  value={value}
                  isReadOnly
                />
              )}
            />
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

            <Button title="Atualizar" />
          </Center>
        </Center>
      </ScrollView>
    </VStack>
  );
}
