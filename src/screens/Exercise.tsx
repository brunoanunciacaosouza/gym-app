import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";
import { VStack, Icon, HStack, Heading, Text } from "@gluestack-ui/themed";
import { ArrowLeft } from "lucide-react-native";

import { AppNavigatorRoutesProps } from "@routes/app.routes";

import BodySvg from "@assets/body.svg";

export function Exercise() {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleGoBack() {
    navigation.goBack();
  }

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
            Puxada Frontal
          </Heading>

          <HStack alignItems="center">
            <BodySvg />
            <Text color="#C4C4CC" m="$1" textTransform="capitalize">
              Costas
            </Text>
          </HStack>
        </HStack>
      </VStack>
    </VStack>
  );
}
