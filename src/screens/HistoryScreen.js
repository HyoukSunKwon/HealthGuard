import React from "react";
import {
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import colors from "../config/colors";
import screen from "../config/screen";

const HistoryScreen = ({ navigation }) => {
  const historyArr = [
    {
      type: "Covid-19",
      day: 1,
      month: "January",
      year: 2021,
      note:
        "Next does in date: 30-Mar-2021 dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd",
    },
    {
      type: "Covid-19",
      day: 1,
      month: "January",
      year: 2021,
      note: "Next does in date: 30-Mar-2021",
    },
    {
      type: "Covid-19",
      day: 1,
      month: "January",
      year: 2021,
      note: "Next does in date: 30-Mar-2021",
    },
    {
      type: "Covid-19",
      day: 1,
      month: "January",
      year: 2021,
      note: "Next does in date: 30-Mar-2021",
    },
    {
      type: "Covid-19",
      day: 1,
      month: "January",
      year: 2021,
      note: "Next does in date: 30-Mar-2021",
    },
    {
      type: "Covid-19",
      day: 1,
      month: "January",
      year: 2021,
      note: "Next does in date: 30-Mar-2021",
    },
    {
      type: "Covid-19",
      day: 1,
      month: "January",
      year: 2021,
      note: "Next does in date: 30-Mar-2021",
    },
  ];

  renderHistories = () => {
    return (
      <View>
        {historyArr.map((data, index) => {
          return (
            <View style={styles.container}>
              <View style={styles.listStyle}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("EditHistoryScreen")}
                >
                  <Text style={styles.type}>{data.type}</Text>
                  <Text style={styles.date}>
                    <Ionicons
                      name="calendar"
                      size={15}
                      color={colors.darkGrey}
                    ></Ionicons>
                    {data.day} {data.month}, {data.year}
                  </Text>
                  <Text numberOfLines={1} style={styles.note}>
                    {data.note}
                  </Text>
                </TouchableOpacity>
                <Ionicons
                  name="ios-arrow-forward"
                  size={30}
                  color={colors.lightBlue}
                  style={styles.arrowIcon}
                  onPress={() =>
                    navigation.navigate("AddHistoryScreen", {
                      name: "Add History",
                    })
                  }
                ></Ionicons>
              </View>
            </View>
          );
        })}
      </View>
    );
  };
  return (
    <View style={screen.container}>
      <ScrollView>{renderHistories()}</ScrollView>
      <Ionicons
        name="ios-add-circle"
        size={90}
        color={colors.lightBlue}
        style={styles.addIcon}
        onPress={() =>
          navigation.navigate("AddHistoryScreen", { name: "Add History" })
        }
      ></Ionicons>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "95%",
    marginLeft: "5%",
    marginTop: "2%",
    paddingBottom: "2%",
    borderBottomColor: colors.lightBlue_button,
    borderBottomWidth: 1,
  },
  listStyle: { paddingRight: "12%" },
  type: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.lightBlue,
  },
  date: {
    fontSize: 15,
  },
  note: { fontSize: 14 },
  arrowIcon: {
    flex: 1,
    alignItems: "center",
    position: "absolute",
    marginTop: "6%",
    right: 0,
  },
  addIcon: {
    flex: 1,
    position: "absolute",
    alignSelf: "flex-end",
    bottom: 0,
    right: 0,
  },
});

export default HistoryScreen;
