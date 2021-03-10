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
import screenConfig from "../config/screen";
import colors from "../config/colors";
import { TouchableOpacity } from "react-native-gesture-handler";

const ProfileScreen = ({ navigation }) => {
  const { signOut, signUp } = React.useContext(AuthContext);
  return (
    <SafeAreaView style={screenConfig.container}>
      <Image
        resizeMode="contain"
        style={screenConfig.logoImage}
        source={require("../../assets/icon.png")}
      />
      <TouchableOpacity onPress={() => signUp()}>
        <Text style={styles.textCreate}> Wanna create an account? </Text>
      </TouchableOpacity>

      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => console.log("Edit Press")}>
            <Text style={styles.buttonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.fieldContainer}>
          <Text style={styles.text}>Date of Birth</Text>
          <TextInput style={styles.box} placeholder="Date of Birth" />
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.text}> Gender</Text>
          <TextInput style={styles.box} placeholder="Gender" />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => signOut()}>
            <Text style={styles.buttonText}>Sign Out</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => console.log("Delete Press")}>
            <Text style={styles.buttonText}>Delete Account</Text>
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
    width: "70%",
    height: "25%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: "5%",
  },
  buttonContainer: {
    flex: 1,
    marginLeft: "25%",
    flexDirection: "column",
    height: "30%",
  },
  buttonText: {
    fontSize: 18,
  },
  text: {
    fontSize: 18,
  },
  textCreate: {
    textAlign: "center",
    color: colors.darkBlue,
  },
  fieldContainer: {
    marginLeft: "10%",
  },
  formContainer: {
    flex: 1,
    bottom: 60,
  },
});

export default ProfileScreen;
