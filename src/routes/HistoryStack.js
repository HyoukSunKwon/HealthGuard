import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HistoryScreen from "../screens/HistoryScreen";
import colors from "../config/colors";

const Stack = createStackNavigator();

const HistoryStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: colors.lightBlue,
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="HistoryScreen"
        component={HistoryScreen}
        options={{ title: "History" }}
      />
    </Stack.Navigator>
  );
};

export default HistoryStack;
