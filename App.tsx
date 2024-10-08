import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import { Text, View } from "react-native";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_400Regular,
  });

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {fontsLoaded && (
        <Text style={{ fontFamily: "Roboto_700Bold", fontSize: 44 }}>Home</Text>
      )}
    </View>
  );
}
