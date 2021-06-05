import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { scale, verticalScale } from "../../config/scaling";

class ContentItem extends Component {
  render = () => {
    const { key, name, vaccineName, date } = this.props;
    return (
      <View key={key}>
        <View style={styles.contentContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.name}>{name}</Text>
          </View>
          <View style={styles.typeContainer}>
            <Text style={styles.type}> {vaccineName}</Text>
          </View>
          <View style={styles.dateContainer}>
            <Text style={styles.date}> {date}</Text>
          </View>
        </View>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: "row",
    marginTop: verticalScale(10),
  },
  date: {
    fontFamily: "notoSans-regular",
    fontSize: verticalScale(12),
    textAlign: "right",
  },
  dateContainer: {
    width: scale(100),
  },
  type: {
    fontFamily: "notoSans-regular",
    fontSize: verticalScale(12),
    textAlign: "center",
  },
  typeContainer: {
    width: scale(115),
    marginLeft: scale(8),
  },
  name: {
    fontFamily: "notoSans-regular",
    fontSize: verticalScale(12),
    fontWeight: "bold",
    textAlign: "left",
  },
  nameContainer: {
    width: scale(105),
  },
});

export default ContentItem;
