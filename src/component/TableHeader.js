import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { scale, moderateScale, verticalScale } from "../config/scaling";
import colorCongif from "../config/colors";

class TableHeader extends Component {
  render = () => {
    return (
      <View style={[styles.tableHeader]}>
        <Text style={[styles.tableHeaderText, styles.checkHeaderContainer]}>
          CHECK
        </Text>
        <Text style={styles.tableHeaderText}>|</Text>
        <Text style={[styles.tableHeaderText, styles.vaccineHeaderContainer]}>
          VACCINE
        </Text>
        <Text style={styles.tableHeaderText}>|</Text>
        <Text style={[styles.tableHeaderText, styles.dateHeaderContainer]}>
          DATE
        </Text>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  tableHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: verticalScale(13),
    backgroundColor: colorCongif.blue3,
    borderRadius: moderateScale(10),
    width: scale(300),
    height: verticalScale(23),
  },
  tableHeaderText: {
    textAlign: "center",
    fontFamily: "notoSans-bold",
    color: colorCongif.blue2,
    fontSize: moderateScale(10),
  },
  checkHeaderContainer: {
    width: scale(80),
  },
  vaccineHeaderContainer: {
    width: scale(130),
  },
  dateHeaderContainer: {
    width: scale(80),
  },
});

export default TableHeader;
