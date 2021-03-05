import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";

import colors from "../config/colors";

const LoadingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Loading.....</Text>
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

export default LoadingScreen;
