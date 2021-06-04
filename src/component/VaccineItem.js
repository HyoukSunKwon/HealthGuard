import React, { Component } from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import colors from "../config/colors";
import colorConfig from "../config/colors";
import { scale, moderateScale, verticalScale } from "../config/scaling";

class VaccineItem extends Component {
  render = () => {
    const { status, vaccineName, date } = this.props;

    getColorStyle = (status) => {
      if (status === "Upcoming") {
        return {
          color: colorConfig.blue,
        };
      } else if (status === "Overdue") {
        return {
          color: colorConfig.red,
        };
      } else {
        return {
          color: colorConfig.black,
        };
      }
    };

    return (
      <TouchableOpacity style={styles.itemContainer}>
        <View style={styles.contentContainer}>
          <View style={styles.textLine}>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>VACCINE</Text>
            </View>

            <Text style={styles.dataText}>{vaccineName}</Text>
          </View>
          <View style={styles.textLine}>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>DATE</Text>
            </View>

            <Text style={styles.dataText}>{date}</Text>
          </View>
          <View style={styles.textLine}>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>STATUS</Text>
            </View>

            <Text style={[styles.dataText, getColorStyle(status)]}>
              {status}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
}

const styles = StyleSheet.create({
  itemContainer: {
    alignSelf: "center",
    width: scale(300),
    height: verticalScale(100),
    marginBottom: verticalScale(15),
    borderRadius: scale(10),
    borderColor: colorConfig.backgroundGrey,
    borderWidth: scale(3),
  },
  contentContainer: {
    alignSelf: "center",
    justifyContent: "center",
    height: verticalScale(80),
    width: scale(260),
    marginTop: verticalScale(10),
  },
  titleContainer: {
    width: scale(80),
    height: verticalScale(21.8),
    marginBottom: verticalScale(5),
  },
  titleText: {
    fontSize: verticalScale(14),
    fontFamily: "notoSans-bold",
    color: colorConfig.grey,
  },
  dataText: {
    fontSize: verticalScale(14),
    fontFamily: "notoSans-bold",
    color: colorConfig.black,
  },
  textLine: {
    flexDirection: "row",
  },
});

export default VaccineItem;
