import React from "react";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";

import screenConfig from "../config/screen";
import colors from "../config/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { scale, moderateScale, verticalScale } from "../config/scaling";
import DropDownPicker from "react-native-dropdown-picker";

const EditProfileScreen = ({ navigation }) => {
  let dayArr = [];

  for (let i = 1; i <= 31; i++) {
    dayArr.push({ label: i.toString(), value: i });
  }

  const monArr = [
    { label: "January", value: "January" },
    { label: "Febuary", value: "Febuary" },
    { label: "March", value: "March" },
    { label: "April", value: "April" },
    { label: "May", value: "May" },
    { label: "June", value: "June" },
    { label: "July", value: "July" },
    { label: "August", value: "August" },
    { label: "September", value: "September" },
    { label: "October", value: "October" },
    { label: "November", value: "November" },
    { label: "December", value: "December" },
  ];

  let yearArr = [];
  let year = new Date().getFullYear();
  for (let i = year; i >= 1920; i--) {
    yearArr.push({ label: i.toString(), value: i });
  }

  const genderArr = [
    { label: "Male", value: "Male" },
    { label: "Female", value: "Female" },
    { label: "Other", value: "Other" },
  ];

  return (
    <SafeAreaView style={screenConfig.container}>
      <View style={styles.formContainer}>
        <Text style={styles.Datetext}>Date of Birth</Text>
        <View style={styles.makeRow}>
          <View style={styles.dayStyle}>
            <Text style={styles.dateText}>Day</Text>
            <DropDownPicker
              items={dayArr}
              defaultValue={1}
              containerStyle={{ height: 40 }}
            />
          </View>
          <View style={styles.monStyle}>
            <Text style={styles.dateText}>Month</Text>
            <DropDownPicker
              items={monArr}
              containerStyle={{ height: 40 }}
              defaultValue="January"
            />
          </View>
          <View style={styles.yearStyle}>
            <Text style={styles.dateText}>Year</Text>
            <DropDownPicker
              items={yearArr}
              containerStyle={{ height: 40 }}
              defaultValue={year}
            />
          </View>
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.genderText}> Gender</Text>
          <View style={styles.genderStyle}>
            <DropDownPicker
              items={genderArr}
              containerStyle={{ height: 40 }}
              defaultValue="Male"
            />
          </View>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => console.log("Save Press")}>
            <Text style={styles.buttonText}>Save Profile</Text>
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
    height: "20%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: "5%",
  },
  buttonContainer: {
    marginLeft: "25%",
    height: "30%",
  },
  buttonText: {
    fontSize: 18,
  },
  Datetext: {
    fontSize: moderateScale(18, 0.25),
    top: 55,
    textAlign: "center",
  },
  formContainer: {
    bottom: 60,
    marginTop: verticalScale(30),
  },
  makeRow: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: verticalScale(70),
  },
  dayStyle: { width: scale(50) },
  monStyle: { width: moderateScale(110, 0.4), marginLeft: 10 },
  yearStyle: { width: moderateScale(80), marginLeft: 10 },
  dateText: {
    fontSize: 15,
    textAlign: "center",
    marginBottom: 5,
  },
  genderStyle: {
    width: moderateScale(250),
    alignSelf: "center",
    top: moderateScale(30, 0.4),
  },
  genderText: {
    fontSize: moderateScale(18, 0.25),
    top: 22,
    textAlign: "center",
  },
});

export default EditProfileScreen;
