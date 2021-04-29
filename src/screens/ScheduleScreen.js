import React from "react";
import { StyleSheet, Button, Text, SafeAreaView } from "react-native";

import { AuthContext } from "../config/context";
import { scale, moderateScale, verticalScale } from "../config/scaling";
import colors from "../config/colors";

const ScheduleScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titleText}>
        {"\n"}
        ScheduleScreen
        <Button
          title=" edit profile "
          onPress={() => navigation.navigate("EditProfileScreen")}
        />
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  text: {
    textAlign: "center",
    fontSize: moderateScale(18),
    fontWeight: "bold",
  },
  titleText: {
    textAlign: "center",
    fontSize: moderateScale(22),
    fontWeight: "bold",
  },
  bodyText: {
    textAlign: "justify",
    fontSize: moderateScale(13),
    paddingLeft: moderateScale(10),
    paddingRight: moderateScale(10),
  },
});

export default ScheduleScreen;
