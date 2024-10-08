import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const { Navigator, Screen } = createBottomTabNavigator();

import { Home } from "@screens/Home";
import { History } from "@screens/History";
import { Profile } from "@screens/Profile";
import { Exercise } from "@screens/Exercise";

export function AppRoutes() {
  return (
    <Navigator>
      <Screen name="home" component={Home} />

      <Screen name="history" component={History} />

      <Screen name="profile" component={Profile} />

      <Screen name="exercise" component={Exercise} />
    </Navigator>
  );
}
