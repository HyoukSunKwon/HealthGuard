import React, { Component, Proptypes } from "react";
import { View, Text, StyleSheet } from "react-native";
import { scale, moderateScale, verticalScale } from "../config/scaling";
import colorCongif from "../config/colors";

class TableHeader extends Component {
  render = () => {
    const { key, status, vaccineName, date } = this.props;
    return (
      <View key={key}>
        <View style={styles.tableContentContainer}>
          <Text style={[styles.tableContentText, styles.checkContainer]}>
            {status}
          </Text>
          <Text style={[styles.tableContentText, styles.vaccineContainer]}>
            {vaccineName}
          </Text>
          <Text style={[styles.tableContentText, styles.dateContainer]}>
            {date}
          </Text>
        </View>
        <View style={styles.lightBlueLine} />
      </View>
    );
  };
}

const styles = StyleSheet.create({
  tableContentContainer: {
    marginTop: verticalScale(10),
    flexDirection: "row",
    width: scale(300),
    height: verticalScale(23.5),
  },
  tableContentText: {
    fontFamily: "notoSans-regular",
    color: colorCongif.black,
    textAlign: "center",
    fontSize: moderateScale(12),
  },
  checkContainer: {
    width: scale(85),
  },
  vaccineContainer: {
    width: scale(130),
  },
  dateContainer: {
    width: scale(85),
  },
  lightBlueLine: {
    borderBottomColor: colorCongif.blue2,
    alignSelf: "center",
    borderBottomWidth: 1,
    width: scale(300),
  },
});

export default TableHeader;
