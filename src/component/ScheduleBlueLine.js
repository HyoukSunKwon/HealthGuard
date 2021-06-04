import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { scale, moderateScale, verticalScale } from "../config/scaling";
import colorConfig from "../config/colors";

class ScheduleBlueLine extends Component {
  render = () => {
    const { width1, width2, width3 } = this.props;
    return (
      <View style={[styles.row, styles.lineContainer]}>
        <View style={[styles.lightBlueLine, { width: scale(width1) }]} />
        <View style={[styles.blueLine, { width: scale(width2) }]} />
        <View style={[styles.lightBlueLine, { width: scale(width3) }]} />
      </View>
    );
  };
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
  },
  lineContainer: {
    marginBottom: verticalScale(25),
  },
  lightBlueLine: {
    borderBottomColor: colorConfig.blue2,
    alignSelf: "center",
    borderBottomWidth: 1,
  },
  blueLine: {
    borderBottomColor: colorConfig.blue,
    borderBottomWidth: 5,
    borderRadius: moderateScale(10),
  },
});

export default ScheduleBlueLine;
