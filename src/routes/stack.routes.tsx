import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screens/Home";
import { Section } from "../screens/Section";

const { Navigator, Screen } = createStackNavigator();

export function StackRoutes() {
  return (
    <Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Section"
    >
      <Screen name="Home" component={Home} />
      <Screen name="Section" component={Section} />
    </Navigator>
  );
}
