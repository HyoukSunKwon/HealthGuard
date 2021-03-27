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
    { label: "Prefer not to answer", value: "Prefer not to answer" },
  ];

  return (
    <SafeAreaView style={screenConfig.container}>
      <View style={styles.formContainer}>
        <Text style={styles.titleText}>Date of Birth</Text>
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
          <Text style={styles.titleText}> Gender</Text>
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
  },
  buttonContainer: {
    marginLeft: "25%",
    height: "30%",
    top: verticalScale(100),
  },
  buttonText: {
    fontSize: 18,
  },
  dayStyle: {
    width: scale(50),
  },
  dateText: {
    fontSize: moderateScale(17),
    textAlign: "center",
    marginBottom: scale(5),
  },
  formContainer: {
    marginTop: verticalScale(10),
  },
  genderStyle: {
    width: moderateScale(275),
    alignSelf: "center",
    top: moderateScale(45),
  },
  makeRow: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: verticalScale(45),
  },
  monStyle: {
    width: moderateScale(110, 0.4),
    marginLeft: scale(20),
  },
  titleText: {
    fontSize: moderateScale(20),
    top: verticalScale(35),
    textAlign: "center",
    color: colors.darkGrey,
    fontWeight: "bold",
  },
  yearStyle: {
    width: moderateScale(80),
    marginLeft: scale(20),
  },
});

export default EditProfileScreen;
