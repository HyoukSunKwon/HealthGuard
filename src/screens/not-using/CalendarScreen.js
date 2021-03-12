import React from "react";
import {
  Image,
  StyleSheet,
  View,
  Button,
  Text,
  SafeAreaView,
} from "react-native";

import colors from "../../config/colors";

const CalendarScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}> Hello this is calendar</Text>
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

export default CalendarScreen;
