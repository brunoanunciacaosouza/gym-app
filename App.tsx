import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import { StatusBar, Text, View } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular,
  });

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: '#202024' }}>
      {fontsLoaded && (
        <Text style={{ fontFamily: "Roboto_700Bold", fontSize: 44 }}>Home</Text>
      )}
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
    </View>
  );
}
