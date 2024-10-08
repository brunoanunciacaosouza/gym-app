import { StatusBar, View } from "react-native";
import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";

import { GluestackUIProvider, Text } from "@gluestack-ui/themed";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular,
  });

  return (
    <GluestackUIProvider>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#202024",
        }}
      >
        {fontsLoaded && (
          <Text color="white" fontSize={34}>
            Home
          </Text>
        )}
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
      </View>
    </GluestackUIProvider>
  );
}
