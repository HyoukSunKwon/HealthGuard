import React from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TextInput,
} from "react-native";

import { AuthContext } from "../config/context";
import colors from "../config/colors";
import screenConfig from "../config/screen";
import { TouchableOpacity } from "react-native-gesture-handler";

const SignInScreen = ({ navigation }) => {
  const { signIn } = React.useContext(AuthContext);
  return (
    <SafeAreaView style={screenConfig.container}>
      <Image
        resizeMode="contain"
        style={screenConfig.logoImage}
        source={require("../../assets/icon.png")}
      />
      <View style={styles.formContainer}>
        <View style={styles.fieldContainer}>
          <Text style={styles.text}>Email</Text>
          <TextInput style={styles.box} placeholder="Email" />
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.text}>Password</Text>
          <TextInput
            style={styles.box}
            secureTextEntry={true}
            placeholder="Password"
          />
        </View>
        <TouchableOpacity
          style={styles.fieldContainer}
          onPress={() => navigation.navigate("ForgetPwdScreen")}
        >
          <Text style={styles.textForget}> Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => signIn()}>
            <Text style={styles.buttonText}> Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  box: {
    height: 40,
    width: "80%",
    borderColor: colors.darkBlue,
    borderWidth: 1,
  },
  button: {
    backgroundColor: colors.lightBlue_button,
    width: "50%",
    height: "25%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  buttonContainer: {
    marginTop: "20%",
    marginLeft: "35%",
    flexDirection: "row",
    height: "30%",
  },
  buttonText: {
    fontSize: 20,
  },
  fieldContainer: {
    marginTop: "5%",
  },
  formContainer: {
    marginLeft: "20%",
  },
  text: {
    fontSize: 20,
  },
  textForget: {
    textAlign: "justify",
    color: colors.darkBlue,
  },
});
export default SignInScreen;
