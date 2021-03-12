import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ProfileScreen from "../screens/ProfileScreen";
import HomeScreen from "../screens/not-using/HomeScreen";
import SignUpScreen from "../screens/not-using/SignUpScreen";
import EditScreen from "../screens/EditProfileScreen";
import colors from "../config/colors";

const Stack = createStackNavigator();
const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: colors.lightBlue,
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ title: "Profile" }}
      />
      {/* <Stack.Screen
        name="SignUpScreen"
        component={SignUpScreen}
        options={{ title: "Sign Up" }}
      /> */}
      <Stack.Screen
        name="EditProfileScreen"
        component={EditScreen}
        options={{ title: "Edit Profile" }}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;
