import React from "react";
import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

import { AuthContext } from "../config/context";
import colors from "../config/colors";

const WelcomeScreen = ({ navigation }) => {
  const { signIn } = React.useContext(AuthContext);
  return (
    <ImageBackground
      style={styles.background}
      source={require("../../assets/welcome-bg.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../../assets/icon.png")} />
        <Text style={styles.titleText}> Health Guard</Text>
        <Text style={styles.subText}> Check your vaccination history</Text>
      </View>

      <View
        style={{
          flex: 0.5,
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <View style={styles.signUpButton}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("SignUpScreen", { name: "Sign Up" })
            }
          >
            <Text style={styles.subText}> Create Account</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.loginButton}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("SignInScreen", { name: "Sign In" })
            }
          >
            <Text style={styles.subText}> Log in </Text>
          </TouchableOpacity>
        </View>

        <View styles={styles.termsButton}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("TermsConditionScreen", {
                name: "TermsCondition",
              })
            }
          >
            <Text styles={styles.text}> Terms and condition </Text>
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
  loginButton: {
    width: 350,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.darkBlue,
    elevation: 8,
    borderRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 100,
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 80,
    alignItems: "center",
  },
  signUpButton: {
    width: "100%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.darkBlue,
    elevation: 8,
    borderRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 100,
  },
  subText: {
    fontSize: 20,
  },
  titleText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  text: {
    fontSize: 25,
  },
  termsButton: {
    width: 100,
    height: 50,
    alignItems: "center",
  },
});
export default WelcomeScreen;
