import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { TouchableOpacity } from "react-native-gesture-handler";

import { AuthContext } from "../config/context";
import { scale, moderateScale, verticalScale } from "../config/scaling";

import colors from "../config/colors";
import screen from "../config/screen";

const GetUserInfoScreen = ({ navigation }) => {
  const { signIn } = React.useContext(AuthContext);

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
    <View style={screen.container}>
      <Text style={styles.questionStyle}>Date of Birth</Text>
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

      <View style={styles.genderPickerStyle}>
        <Text style={styles.questionStyle}>Gender</Text>

        <DropDownPicker
          items={genderArr}
          containerStyle={{ height: 40 }}
          defaultValue="Male"
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => signIn()}>
          <Text style={screen.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: "8%",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    width: "60%",
    height: "10%",
    backgroundColor: colors.lightBlue_button,
    borderRadius: 30,
  },
  dayStyle: {
    width: scale(50),
  },
  yearStyle: { width: moderateScale(80), marginLeft: 20 },
  dateText: {
    fontSize: moderateScale(17),
    marginBottom: scale(5),
  },
  genderPickerStyle: {
    alignSelf: "center",
    width: moderateScale(275),
  },
  makeRow: {
    flexDirection: "row",
    alignSelf: "center",
  },
  monStyle: {
    width: moderateScale(110, 0.4),
    marginLeft: scale(20),
  },
  questionStyle: {
    marginTop: verticalScale(40),
    marginBottom: scale(10),
    textAlign: "center",
    alignItems: "center",
    fontSize: moderateScale(20),
    fontWeight: "bold",
    color: colors.darkGrey,
  },
  yearStyle: {
    width: moderateScale(80),
    marginLeft: scale(20),
  },
});
export default GetUserInfoScreen;
