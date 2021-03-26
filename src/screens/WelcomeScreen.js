import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

import { AuthContext } from "../config/context";
import { scale, moderateScale, verticalScale } from "../config/scaling";
import colors from "../config/colors";
import screen from "../config/screen";

const WelcomeScreen = ({ navigation }) => {
  const { signIn } = React.useContext(AuthContext);
  return (
    <ImageBackground
      style={styles.background}
      source={require("../../assets/welcome-bg.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image
          style={screen.logoImage}
          source={require("../../assets/icon.png")}
        />
        <Text style={styles.titleText}> Health Guard</Text>
        <Text style={styles.subText}> Check your vaccination history</Text>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={screen.buttonContainer}
          onPress={() =>
            navigation.navigate("GetUserInfoScreen", { name: "Welcome" })
          }
        >
          <Text style={screen.buttonText}> Let's start </Text>
        </TouchableOpacity>

        <View style={styles.termsButton}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("TermsConditionScreen", {
                name: "Terms and Condition",
              })
            }
          >
            <Text style={styles.text}> Terms and Condition </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonContainer: {
    flex: 0.5,
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  buttonText: {
    fontSize: moderateScale(20),
  },
  logoContainer: {
    position: "absolute",
    top: verticalScale(100),
    alignItems: "center",
  },
  signUpButton: {
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.lightBlue_button,
    elevation: 8,
    borderRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 100,
  },
  subText: {
    fontSize: moderateScale(20),
  },
  titleText: {
    fontSize: moderateScale(32),
    fontWeight: "bold",
  },
  text: {
    fontSize: moderateScale(15),
  },
  termsButton: {
    alignItems: "center",
  },
});
export default WelcomeScreen;
