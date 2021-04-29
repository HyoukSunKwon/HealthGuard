import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";

import colors from "../config/colors";

const NotificationScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>This is notification screen</Text>
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

export default NotificationScreen;
