import React from "react";
import { Image, StyleSheet, View, Text, SafeAreaView } from "react-native";

import { AuthContext } from "../config/context";
import screenConfig from "../config/screen";
import colors from "../config/colors";
import { TouchableOpacity } from "react-native-gesture-handler";

const ProfileScreen = ({ navigation }) => {
  const { signOut, signUp } = React.useContext(AuthContext);
  const day = 30,
    month = "December",
    year = 2021,
    gender = "Male";

  return (
    <SafeAreaView style={screenConfig.container}>
      <View style={styles.container}>
        <Image
          // resizeMode="contain"
          style={screenConfig.logoImage}
          source={require("../../assets/icon.png")}
        />
        {/* <TouchableOpacity onPress={() => signUp()}>
        <Text style={styles.textCreate}> Wanna create an account? </Text>
      </TouchableOpacity> */}

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("EditProfileScreen", { name: "Edit Profile" })
            }
          >
            <Text style={styles.buttonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.dataContainer}>
          <Text style={styles.dobGendertext}>Date of Birth</Text>
          <Text style={styles.textField}>
            {day} {month}, {year}
          </Text>
          <Text style={styles.dobGendertext}> Gender</Text>
          <Text style={styles.textField}> {gender}</Text>
          {/* </View> */}
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => signOut()}>
            <Text style={styles.buttonText}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* <View style={styles.button}>
          <TouchableOpacity onPress={() => console.log("Delete Press")}>
            <Text style={styles.buttonText}>Delete Account</Text>
          </TouchableOpacity>*/}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    alignSelf: "center",
    width: "100%",
    height: "100%",
  },
  buttonContainer: {
    backgroundColor: colors.lightBlue_button,
    width: "70%",
    height: "7%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 18,
  },
  dataContainer: {
    marginTop: "5%",
    marginBottom: "5%",
    alignItems: "center",
    flex: 0.8,
    height: "30%",
  },
  dobGendertext: {
    fontSize: 24,
    marginTop: "8%",
  },
  // textCreate: {
  //   textAlign: "center",
  //   color: colors.darkBlue,
  // },
  dateText: {
    fontSize: 15,
    textAlign: "center",
    marginBottom: "2%",
  },
  textField: {
    fontSize: 18,
  },
});

export default ProfileScreen;
