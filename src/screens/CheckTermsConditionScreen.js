import React from "react";
import { StyleSheet, Text, SafeAreaView, View, ScrollView } from "react-native";

import { ltext } from "../config/localization";

import { TouchableOpacity } from "react-native-gesture-handler";

import Button from "../component/Button";
import { AuthContext } from "../config/context";
import { scale, moderateScale, verticalScale } from "../config/scaling";
import colors from "../config/colors";
import screenConfig from "../config/screen";

const CheckTermsConditionScreen = ({ navigation }) => {
  const { signIn } = React.useContext(AuthContext);
  return (
    <SafeAreaView style={screenConfig.container}>
      <View style={styles.screenContainer}>
        <View style={styles.titleContainer}>
          <Text style={screenConfig.subTitleText}>{ltext("terms_title")}</Text>
        </View>

        <View style={styles.cardContainer}>
          <ScrollView>
            <Text style={styles.cardText}>{ltext("terms_text")}</Text>
          </ScrollView>
        </View>
      </View>
      <View style={styles.terms}>
        <Text style={styles.condition}> HEALTH GUARD Terms & Condition </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    marginTop: verticalScale(15),
    alignSelf: "center",
    backgroundColor: colors.backgroundGrey,
  },
  titleContainer: {
    alignItems: "center",
    marginBottom: verticalScale(5),
  },
  cardContainer: {
    backgroundColor: colors.white,
    elevation: 1,
    padding: moderateScale(24),
    marginTop: verticalScale(16),
    marginBottom: verticalScale(10),
    borderRadius: moderateScale(16),
    width: scale(300),
    height: verticalScale(470),
  },
  buttonContainer: {
    marginTop: verticalScale(20),
  },
  cardTitle: {
    textAlign: "center",
    fontSize: moderateScale(18),
    fontWeight: "bold",
  },
  cardText: {
    marginTop: verticalScale(16),
    textAlign: "justify",
    fontSize: moderateScale(13),
    paddingLeft: moderateScale(10),
    paddingRight: moderateScale(10),
  },
  condition: {
    fontFamily: "roboto-regular",
    fontSize: scale(12),
    color: colors.grey,
    textAlign: "center",
    marginTop: verticalScale(10),
  },
  terms: {
    height: verticalScale(40),
    backgroundColor: colors.gray1,
    marginBottom: verticalScale(20),
  },
});

export default CheckTermsConditionScreen;
