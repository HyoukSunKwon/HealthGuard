import React from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";

import colors from "../config/colors";
import screenConfig from "../config/screen";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={screenConfig.container}>
      <Image
        resizeMode="contain"
        style={screenConfig.logoImage}
        source={require("../../assets/welcome-bg.jpg")}
      />
      <View style={styles.buttonContainter}>
        <View style={styles.button}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ProfileScreen", { name: "Profile" })
            }
          >
            <Text style={styles.text}>John{"\n"}Snow</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ProfileScreen", { name: "Profile" })
            }
          >
            <Text style={styles.text}>Kathy{"\n"}Snow</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.buttonContainter}>
        <View style={styles.button}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ProfileScreen", { name: "Profile" })
            }
          >
            <Text style={styles.text}>Chloe{"\n"}Snow</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("AddAccountScreen", { name: "Add Account" })
            }
          >
            <Text style={styles.addText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    color: colors.darkGrey,
  },
  addText: {
    fontSize: 80,
  },
  buttonContainter: {
    marginLeft: "8%",
    marginRight: "11%",
    flexDirection: "row",
    height: "30%",
  },
  button: {
    marginLeft: "5%",
    backgroundColor: colors.lightBlue_button,
    width: "45%",
    height: "90%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;
