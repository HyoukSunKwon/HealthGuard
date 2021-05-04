import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ChildrenScreen from "../screens/ChildrenScreen";
import HomeScreen from "../screens/not-using/HomeScreen";
import EditChildrenScreen from "../screens/EditChildrenScreen";
import colors from "../config/colors";

const Stack = createStackNavigator();
const ChildrenStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: colors.blue,
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="ChildrenScreen"
        component={ChildrenScreen}
        options={{ title: "ChildrenScreen" }}
      />
      <Stack.Screen
        name="EditChildrenScreen"
        component={EditChildrenScreen}
        options={{ title: "EditChildrenScreen" }}
      />
    </Stack.Navigator>
  );
};

export default ChildrenStack;
