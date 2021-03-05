// import React from "react";
// import { createStackNavigator } from "@react-navigation/stack";

// import GetUserInfoScreen from "../screens/GetUserInfoScreen";
// import HomeScreen from "../screens/HomeScreen";
// import colors from "../config/colors";

// const Stack = createStackNavigator();

// const GetUserInfoStack = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerTintColor: colors.lightBlue,
//         headerTitleAlign: "center",
//       }}
//     >
//       <Stack.Screen
//         name="GetUserInfoScreen"
//         component={GetUserInfoScreen}
//         options={{ title: "Get User Info" }}
//       />
//       <Stack.Screen
//         name="HomeScreen"
//         component={HomeScreen}
//         options={{ title: "Home" }}
//       />
//     </Stack.Navigator>
//   );
// };

// export default GetUserInfoStack;

import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import SignIn from "../screens/SignInScreen";
import SignUp from "../screens/SignUpScreen";
import GetUserInfo from "../screens/GetUserInfoScreen";
import Home from "../screens/HomeScreen";
import colors from "../config/colors";

const Stack = createStackNavigator();

const GetUserInfoStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: colors.lightBlue,
        headerTitleAlign: "center",
      }}
    >
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{ title: "Welcome" }}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={SignUp}
        options={{ title: "SignUp" }}
      />
      <Stack.Screen
        name="HomeScreen"
        component={Home}
        options={{ title: "Home" }}
      />
      <Stack.Screen
        name="GetUserInfo"
        component={GetUserInfo}
        options={{ title: "GetUserInfo" }}
      />
    </Stack.Navigator>
  );
};

export default GetUserInfoStack;
