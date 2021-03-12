import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

//import HomeStack from "../routes/HomeStack";
import ProfileStack from "../routes/ProfileStack";
//import CalendarStack from "./CalendarStack";
import HistoryStack from "./HistoryStack";
import colors from "../config/colors";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "ios-home" : "ios-home";
            // } else if (route.name === 'Calendar') {
            //   iconName = focused ? 'ios-calendar' : 'ios-calendar';
            // }else if (route.name === 'History'){
            //   iconName = focused ? 'ios-list' : 'ios-list';
          } else if (route.name === "Profile") {
            iconName = focused ? "ios-person" : "ios-person";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.lightBlue,
        inactiveTintColor: colors.grey,
      }}
    >
      <Tab.Screen name="Home" component={HistoryStack} />
      {/* <Tab.Screen name="Calendar" component={CalendarStack}/>
      <Tab.Screen name="History" component={HistoryStack}/> */}
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
