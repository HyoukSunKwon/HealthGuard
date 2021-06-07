import React from "react";
import { StyleSheet, Text, SafeAreaView, View, ScrollView } from "react-native";

import { ltext } from "../config/localization"

import { TouchableOpacity } from "react-native-gesture-handler";

import Button from "../component/Button";
import { AuthContext } from "../config/context";
import { scale, moderateScale, verticalScale } from "../config/scaling";
import colors from "../config/colors";
import screenConfig from "../config/screen"


const TermsConditionScreen = ({ navigation }) => {
  const { signIn } = React.useContext(AuthContext);
  return (
    <SafeAreaView style={screenConfig.container}>
      <View style={styles.screenContainer}>

        <View style={styles.titleContainer}>
          <Text style={screenConfig.subTitleText}>
            {ltext("welcome")}
          </Text>
          <Text style={screenConfig.titleText}>
            {ltext("app_name")}
          </Text>
        </View>
       
        <View style={styles.cardContainer}>
          <Text style={styles.cardTitle}>{ltext("terms_title")}</Text>
          <ScrollView >
            <Text style={styles.cardText}>
              {ltext("terms_text")}
            </Text>
          </ScrollView>
        </View>

        <Button text={ltext("start")} action={() => navigation.navigate("ChildrenScreen")}/>

      </View>   
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    marginTop: verticalScale(40),
    alignSelf: "center",
    backgroundColor: colors.backgroundGrey
  },
  titleContainer: {
    alignItems: "center"
  },
  cardContainer: {
    backgroundColor: colors.white,
    elevation: 1,
    padding: moderateScale(24),
    marginTop: verticalScale(16),
    marginBottom: verticalScale(16),
    borderRadius: moderateScale(16),
    width: scale(300),
    height: verticalScale(430)
  },
  buttonContainer: {
    marginTop: verticalScale(20)
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
  }
});

export default TermsConditionScreen;
