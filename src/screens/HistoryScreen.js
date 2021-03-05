import React from "react";
import {
  Image,
  StyleSheet,
  View,
  Button,
  Text,
  SafeAreaView,
} from "react-native";

import colors from "../config/colors";

const HistoryScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}> Hello this is history</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  text: {
    textAlign: "center",
  },
});

export default HistoryScreen;
