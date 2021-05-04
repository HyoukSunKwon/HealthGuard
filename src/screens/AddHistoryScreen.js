import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Image,
  Animated,
  Keyboard,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

import { scale, moderateScale, verticalScale } from "../config/scaling";
import colors from "../config/colors";
import screen from "../config/screen";
import KeyboardShift from "./KeyboardShift";

let dayArr = [];
for (let i = 1; i <= 31; i++) {
  dayArr.push({ label: i.toString(), value: i });
}

let monArr = [];
for (let i = 1; i <= 12; i++) {
  monArr.push({ label: i.toString(), value: i });
}

let yearArr = [];
let year = new Date().getFullYear();
for (let i = 1920; i <= year; i++) {
  yearArr.push({ label: i.toString(), value: i });
}

let keybordHeight = new Animated.Value(0);
let imageHeight = new Animated.Value(0);

class AddHistoryScreen extends Component {
  constructor() {
    super();
    this.state = {
      dayArr: [],
      monArr: [
        { label: "January", value: 1 },
        { label: "Febuary", value: 2 },
        { label: "March", value: 3 },
        { label: "April", value: 4 },
        { label: "May", value: 5 },
        { label: "June", value: 6 },
        { label: "July", value: 7 },
        { label: "August", value: 8 },
        { label: "September", value: 9 },
        { label: "October", value: 10 },
        { label: "November", value: 11 },
        { label: "December", value: 12 },
      ],
      yearArr: [],
      keybordHeight,
      imageHeight,
    };
  }

  render() {
    return (
      <KeyboardShift>
        {() => (
          <SafeAreaView style={screen.container}>
            <View style={styles.typeNameContainer}>
              <Text style={styles.typeNameText}>Type your vaccine type</Text>
            </View>
            <View>
              <TextInput style={styles.textInputStyle} />
            </View>
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
                  defaultValue={1}
                />
              </View>
              <View style={styles.yearStyle}>
                <Text style={styles.dateText}>Year</Text>
                <DropDownPicker
                  items={yearArr}
                  containerStyle={{ height: 40 }}
                  defaultValue={1920}
                />
              </View>
            </View>
            <View style={styles.noteContainer}>
              <Text style={styles.questionStyle}>Note</Text>

              <TextInput
                multiline={true}
                numberOfLines={7}
                style={styles.noteStyle}
              ></TextInput>
            </View>
            <View style={styles.btnContainer}>
              <TouchableOpacity
                style={screen.buttonContainer}
                onPress={() => navigation.navigate("HistoryScreen")}
              >
                <Text style={screen.buttonText}>Add</Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>
        )}
      </KeyboardShift>
    );
  }
}

const styles = StyleSheet.create({
  typeNameContainer: {
    marginTop: moderateScale(20),
    marginBottom: moderateScale(10),
    alignSelf: "center",
  },
  typeNameText: {
    fontSize: moderateScale(20),
    alignSelf: "center",
    fontWeight: "bold",
    color: colors.darkGrey,
  },
  textInputStyle: {
    height: moderateScale(40),
    width: moderateScale(255),
    alignSelf: "center",
    borderColor: colors.lightBlue,
    borderWidth: 1,
  },
  questionStyle: {
    marginTop: moderateScale(10),
    marginBottom: moderateScale(10),
    textAlign: "center",
    fontSize: moderateScale(20),
    fontWeight: "bold",
    color: colors.darkGrey,
  },
  makeRow: {
    flexDirection: "row",
    alignSelf: "center",
  },
  dayStyle: { width: moderateScale(60) },
  monStyle: { width: moderateScale(110, 0.4), marginLeft: moderateScale(5) },
  yearStyle: { width: moderateScale(80), marginLeft: moderateScale(5) },
  dateText: {
    fontSize: moderateScale(20),
    textAlign: "center",
    marginBottom: moderateScale(5),
    marginTop: moderateScale(10),
    fontWeight: "bold",
  },
  noteContainer: {
    alignSelf: "center",
    width: moderateScale(250),
  },
  noteStyle: {
    width: moderateScale(250),
    borderColor: colors.lightBlue,
    borderWidth: 1,
  },
  btnContainer: {
    marginTop: moderateScale(30),
  },
});
export default AddHistoryScreen;
