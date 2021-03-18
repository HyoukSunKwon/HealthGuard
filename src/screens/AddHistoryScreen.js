import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

import colors from "../config/colors";
import screen from "../config/screen";


const AddHistoryScreen = ({ navigation }) => {
  let dayArr = [];

  for (let i = 1; i <= 31; i++) {
    dayArr.push({ label: i.toString(), value: i });
  }

  const monArr = [
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
  ];

  let yearArr = [];
  let year = new Date().getFullYear();
  for (let i = 1920; i <= year; i++) {
    yearArr.push({ label: i.toString(), value: i });
  }

  const vaccineTypeArr = [
    { label: "Covid19", value: "A" },
    { label: "Flu", value: "B" },
    { label: "DTap", value: "C" },
    { label: "Tdap", value: "D" },
    { label: "Hib", value: "E" },
    { label: "Hepatitis A", value: "F" },
    { label: "Hapatitis B", value: "G" },
    { label: "Papillomavirus", value: "H" },
    { label: "M-M-R", value: "I" },
    { label: "Meningococcal", value: "J" },
    { label: "Pneumococcal", value: "K" },
    { label: "Poliovirus", value: "L" },
    { label: "Rotavirus", value: "M" },
  ];
  return (
    <View style={screen.container}>
      <View style={styles.typeNameContainer}>
        <Text style={styles.typeNameText}>Type</Text>

        <DropDownPicker
          items={vaccineTypeArr}
          containerStyle={styles.typePickerStyle}
          defaultValue="A"
        />
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

      {/* <View style={styles.typeNameContainer}>
        <Text style={styles.typeNameText}>Name</Text>
        <TextInput
          style={styles.textInputStyle}
          //   onChangeText={text => onChangeText(text)}
          //   value={value}
        />
      </View> */}

      <View style={styles.noteContainer}>
        <Text style={styles.questionStyle}>Note</Text>

        <TextInput
          multiline={true}
          numberOfLines={7}
          style={styles.noteStyle}
        ></TextInput>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("HistoryScreen")}>
          <Text style={styles.button}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  typeNameContainer: {
    marginTop: "5%",
    marginBottom: "5%",
    marginLeft: "15%",
    flexDirection: "row",
  },
  typeNameText: {
    fontSize: 25,
    fontWeight: "bold",
    color: colors.darkGrey,
  },
  typePickerStyle: {
    height: "100%",
    width: "60%",
    marginLeft: "5%",
  },
  textInputStyle: {
    height: "100%",
    width: "55%",
    marginLeft: "5%",
    borderColor: colors.lightBlue,
    borderWidth: 1,
  },
  questionStyle: {
    marginTop: "8%",
    marginBottom: "5%",
    textAlign: "center",
    alignItems: "center",
    fontSize: 25,
    fontWeight: "bold",
    color: colors.darkGrey,
  },
  makeRow: {
    flexDirection: "row",
    alignSelf: "center",
  },
  dayStyle: { width: "15%" },
  monStyle: { width: "25%", marginLeft: "5%" },
  yearStyle: { width: "20%", marginLeft: "5%" },
  dateText: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: "2%",
  },
  noteContainer: {
    alignSelf: "center",
    width: "70%",
  },
  noteStyle: {
    width: "100%",
    borderColor: colors.lightBlue,
    borderWidth: 1,
  },
  buttonContainer: {
    marginTop: "8%",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    width: "60%",
    height: "10%",
    borderRadius: 30,
    backgroundColor: colors.lightBlue_button,
  },
  button: {
    fontSize: 25,
  },
});
export default AddHistoryScreen;
