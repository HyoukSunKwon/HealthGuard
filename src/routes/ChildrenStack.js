import React from "react";
import { Image, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

import { ltext } from "../config/localization";

import TermsConditionScreen from "../screens/TermsConditionScreen";
import EditChildrenScreen from "../screens/EditChildrenScreen";
import ChildrenScreen from "../screens/ChildrenScreen";
import ScheduleScreen from "../screens/ScheduleScreen";
import AddChildScreen from "../screens/AddChildScreen";
import NotificationScreen from "../screens/NotificationScreen";
import EditProfileScreen from "../screens/EditProfileScreen";
import CheckTermsConditionScreen from "../screens/CheckTermsConditionScreen";

import colors from "../config/colors";
import { moderateScale, verticalScale, scale } from "../config/scaling";

const MyCustomHeaderBackImage = () => (
  <Image
    source={require("../../assets/icons/back.png")}
    style={{
      marginLeft: scale(16),
      marginTop: verticalScale(8),
      width: scale(11),
      height: verticalScale(20),
      resizeMode: "stretch",
      tintColor: colors.blue,
    }}
  />
);

const MyCustomHeaderImage = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flexDirection: "row", marginRight: moderateScale(30) }}>
      <TouchableOpacity
        onPress={() => navigation.navigate("EditChildrenScreen")}
      >
        <Image
          source={require("../../assets/icons/edit.png")}
          style={{
            width: moderateScale(15),
            height: moderateScale(15),
            marginRight: moderateScale(20),
            tintColor: colors.blue,
          }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("NotificationScreen")}
      >
        <Image
          source={require("../../assets/icons/notification.png")}
          style={{
            width: moderateScale(15),
            height: moderateScale(15),
            tintColor: colors.blue,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const Stack = createStackNavigator();

const ChildrenStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.backgroundGrey,
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        headerTintColor: colors.blue,
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="ChildrenScreen"
        component={ChildrenScreen}
        options={{
          title: ltext("children_screen_title"),
          headerLeft: null,
          headerRight: MyCustomHeaderImage,
        }}
      />
      <Stack.Screen
        name="EditChildrenScreen"
        component={EditChildrenScreen}
        options={{
          title: ltext("edit_children_screen_title"),
          headerBackImage: MyCustomHeaderBackImage,
        }}
      />
      <Stack.Screen
        name="TermsConditionScreen"
        component={TermsConditionScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ScheduleScreen"
        component={ScheduleScreen}
        options={{ title: "", headerBackImage: MyCustomHeaderBackImage }}
      />
      <Stack.Screen
        name="AddChildScreen"
        component={AddChildScreen}
        options={{
          title: ltext("add_children_screen_title"),
          headerBackImage: MyCustomHeaderBackImage,
        }}
      />
      <Stack.Screen
        name="NotificationScreen"
        component={NotificationScreen}
        options={{
          title: ltext("notification_screen_title"),
          headerBackImage: MyCustomHeaderBackImage,
        }}
      />
      <Stack.Screen
        name="EditProfileScreen"
        component={EditProfileScreen}
        options={{
          title: ltext("edit_profile_screen_title"),
          headerBackImage: MyCustomHeaderBackImage,
        }}
      />
      <Stack.Screen
        name="CheckTermsConditionScreen"
        component={CheckTermsConditionScreen}
        options={{
          title: "",
          headerBackImage: MyCustomHeaderBackImage,
        }}
      />
    </Stack.Navigator>
  );
};

export default ChildrenStack;
