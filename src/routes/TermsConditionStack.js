import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import TermsConditionScreen from "../screens/TermsConditionScreen";
import ChildrenScreen from "../screens/ChildrenScreen";
import ScheduleScreen from "../screens/ScheduleScreen";
import AddChildScreen from "../screens/AddChildScreen";
import NotificationScreen from "../screens/NotificationScreen";
import EditProfileScreen from "../screens/EditProfileScreen";

const Stack = createStackNavigator();

const TermsConditionStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="TermsConditionScreen"
        component={TermsConditionScreen}
      />
      <Stack.Screen name="ChildrenScreen" component={ChildrenScreen} />
      <Stack.Screen name="ScheduleScreen" component={ScheduleScreen} />
      <Stack.Screen name="AddChildScreen" component={AddChildScreen} />
      <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
      <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
    </Stack.Navigator>
  );
};

export default TermsConditionStack;
