import React from "react";
import { Image, StyleSheet, View, Text, SafeAreaView } from "react-native";

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
      {/* <TouchableOpacity onPress={() => signUp()}>
        <Text style={styles.textCreate}> Wanna create an account? </Text>
      </TouchableOpacity> */}

      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("EditProfileScreen", { name: "Edit Profile" })
            }
          >
            <Text style={styles.buttonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.fieldContainer}>
          <Text style={styles.Datetext}>Date of Birth</Text>
          <View style={styles.makeRow}>
            <View style={styles.dayStyle}>
              <Text style={styles.dateText}>Day</Text>
              <View style={styles.dobContainer}>
                <Text style={styles.dateTextField}> 30</Text>
              </View>
            </View>
            <View style={styles.monStyle}>
              <Text style={styles.dateText}>Month</Text>
              <View style={styles.dobContainer}>
                <Text style={styles.dateTextField}> December</Text>
              </View>
            </View>
            <View style={styles.yearStyle}>
              <Text style={styles.dateText}>Year</Text>
              <View style={styles.dobContainer}>
                <Text style={styles.dateTextField}> 2021</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.fieldContainer}>
          <Text style={styles.genderText}> Gender</Text>
          <View style={styles.genderStyle}>
            <Text style={styles.genderTextField}> M</Text>
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => signOut()}>
            <Text style={styles.buttonText}>Sign Out</Text>
          </TouchableOpacity>
        </View>
        {/* <View style={styles.button}>
          <TouchableOpacity onPress={() => console.log("Delete Press")}>
            <Text style={styles.buttonText}>Delete Account</Text>
          </TouchableOpacity>
        </View> */}
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
  Datetext: {
    fontSize: 18,
    top: 40,
  },
  dateTextField: {
    fontSize: 14,
    textAlign: "center",
  },
  dobContainer: {
    borderWidth: 1,
    borderColor: colors.darkBlue,
  },
  textCreate: {
    textAlign: "center",
    color: colors.darkBlue,
  },
  fieldContainer: {
    marginLeft: "3%",
  },
  formContainer: {
    flex: 1,
    bottom: 60,
  },
  makeRow: {
    flexDirection: "row",
    alignSelf: "center",
    marginLeft: "18%",
  },
  dayStyle: { width: "18%" },
  monStyle: { width: "30%", marginLeft: 10 },
  yearStyle: { width: "23%", marginLeft: 10 },
  dateText: {
    fontSize: 15,
    textAlign: "center",
    marginBottom: 5,
  },
  genderStyle: {
    width: "64%",
    marginLeft: "27%",
    borderWidth: 1,
    borderColor: colors.darkBlue,
  },
  genderText: {
    fontSize: 18,
    top: 22,
  },
  genderTextField: {
    textAlign: "center",
    fontSize: 14,
  },
});

export default ProfileScreen;
