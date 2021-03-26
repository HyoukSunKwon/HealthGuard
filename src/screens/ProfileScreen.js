import React from "react";
import { Image, StyleSheet, View, Text, SafeAreaView } from "react-native";

import { AuthContext } from "../config/context";
import { scale, moderateScale, verticalScale } from "../config/scaling";
import screen from "../config/screen";
import colors from "../config/colors";
import { TouchableOpacity } from "react-native-gesture-handler";

const ProfileScreen = ({ navigation }) => {
  const { signOut, signUp } = React.useContext(AuthContext);
  const day = 30,
    month = "December",
    year = 2021,
    gender = "Male";

  return (
    <SafeAreaView style={screen.container}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
            style={screen.logoImage}
            source={require("../../assets/icon.png")}
          />
        </View>

        {/* <TouchableOpacity onPress={() => signUp()}>
        <Text style={styles.textCreate}> Wanna create an account? </Text>
      </TouchableOpacity> */}

        <View style={styles.editContainer}>
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
  buttonContainer: {
    backgroundColor: colors.lightBlue_button,
    width: "70%",
    height: "7%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    top: verticalScale(60),
  },
  buttonText: {
    fontSize: 18,
  },
  container: {
    alignItems: "center",
  },
  dataContainer: {
    marginTop: verticalScale(60),
    alignItems: "center",
  },
  dobGendertext: {
    fontSize: moderateScale(20),
    marginTop: verticalScale(25),
  },
  editContainer: {
    backgroundColor: colors.lightBlue_button,
    width: "70%",
    height: "7%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
    top: verticalScale(60),
  },
  textField: {
    fontSize: moderateScale(16),
  },
  logoContainer: {
    top: verticalScale(40),
    alignItems: "center",
  },
});

export default ProfileScreen;
