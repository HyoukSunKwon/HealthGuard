import React from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TextInput,
} from "react-native";

import colors from "../../config/colors";
import screenConfig from "../../config/screen";
import { TouchableOpacity } from "react-native-gesture-handler";

const ForgetPwdScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={screenConfig.container}>
      <Image
        resizeMode="contain"
        style={screenConfig.logoImage}
        source={require("../../../assets/icon.png")}
      />
      <Text style={styles.text}>Forgot your password?</Text>
      <Text style={styles.subText}>
        {" "}
        Don't worry! We will send you an email with a reset link.
      </Text>
      <View style={styles.formContainer}>
        <View style={styles.fieldContainer}>
          <Text style={styles.formText}>Email</Text>
          <TextInput style={styles.box} placeholder="Email" />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => console.log("Reset Press")}>
            <Text style={styles.buttonText}>Reset Password</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.lightBlue_button,
    width: "70%",
    height: "25%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  buttonContainer: {
    marginTop: "10%",
    marginLeft: "25%",
    flexDirection: "row",
    height: "30%",
  },
  buttonText: {
    fontSize: 18,
  },
  box: {
    height: 40,
    width: "95%",
    borderColor: colors.darkBlue,
    borderWidth: 1,
  },
  text: {
    marginTop: "4%",
    textAlign: "center",
    fontSize: 25,
  },
  subText: {
    textAlign: "center",
  },
  fieldContainer: {
    marginTop: "5%",
  },
  formContainer: {
    marginLeft: "8%",
  },
  formText: {
    fontSize: 20,
  },
});

export default ForgetPwdScreen;
