import React from "react";
import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import { Table, Row, Rows } from "react-native-table-component";

import colors from "../config/colors";

const HistoryScreen = ({ navigation }) => {
  const tableHead = ["Type", "Name", "Date", "Notes"];
  const tableData = [
    ["Covid-19", "Moderna", "13/3/2021", "Next does in date: 30-Mar-2021"],
    ["a", "b", "c", "d"],
    ["1", "2", "3", "456\n789"],
    ["a", "b", "c", "d"],
  ];
  return (
    <View style={styles.container}>
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() =>
            navigation.navigate("AddHistoryScreen", { name: "Add History" })
          }
        >
          <Text>Add</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={(styles.buttonContainer, styles.editButtonContainer)}
        >
          <Text>Edit</Text>
        </TouchableOpacity>
      </View>
      <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
        <Row data={tableHead} style={styles.head} textStyle={styles.text} />
        <Rows data={tableData} textStyle={styles.text} />
      </Table>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonRow: { flexDirection: "row", height: "8%" },
  buttonContainer: {
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    width: "30%",
    height: "110%",
    marginBottom: "8%",
    backgroundColor: colors.lightBlue_button,
  },
  editButtonContainer: {
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    width: "30%",
    height: "110%",
    marginLeft: "40%",
    marginBottom: "8%",
    backgroundColor: colors.lightBlue_button,
  },
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: "#fff" },
  head: { height: 40, backgroundColor: "#f1f8ff" },
  text: { margin: 6 },
});

export default HistoryScreen;
