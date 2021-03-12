import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "../screens/WelcomeScreen";
// import SignIn from "../screens/not-using/SignInScreen";
// import SignUp from "../screens/not-using/SignUpScreen";
// import ForgetPwd from "../screens/not-using/ForgetPwdScreen";
import User from "../screens/GetUserInfoScreen";
import TermsCondition from "../screens/TermsConditionScreen";
import colors from "../config/colors";

const Stack = createStackNavigator();

const WelcomeStack = () => {
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
        name="GetUserInfoScreen"
        component={User}
        options={{ title: "Welcome" }}
      />
      <Stack.Screen
        name="TermsConditionScreen"
        component={TermsCondition}
        options={{ title: "TermsCondition" }}
      />
      {/* <Stack.Screen
        name="SignUpScreen"
        component={SignUp}
        options={{ title: "SignUp" }}
      />
      <Stack.Screen
        name="SignInScreen"
        component={SignIn}
        options={{ title: "Login" }}
      />
      

      <Stack.Screen
        name="ForgetPwdScreen"
        component={ForgetPwd}
        options={{ title: "Forgot Password" }}
      /> */}
    </Stack.Navigator>
  );
};

export default WelcomeStack;
