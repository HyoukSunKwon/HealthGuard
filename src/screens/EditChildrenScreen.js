import React from "react";
import { Image, StyleSheet, View, Text, SafeAreaView } from "react-native";

import { AuthContext } from "../config/context";
import { scale, moderateScale, verticalScale } from "../config/scaling";
import screen from "../config/screen";
import colors from "../config/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Card } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";

const users = [
  {
    name: "JasperMattews",
    birth: "Jan 15th 2020",
    latest: "2020-03-20",
    avatar: "https://source.unsplash.com/user/nicoleknipes",
  },
];

const EditChildrenScreen = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        {users.map((u, i) => {
          return (
            <View>
              <View key={i} style={styles.container}>
                {/* <Image source={{ uri:u.avatar }} /> */}
                <Image
                  style={styles.image}
                  source={require("../../assets/icon.png")}
                />
                <View style={styles.body}>
                  <Text style={styles.name}>{u.name}</Text>
                  <Text style={styles.birth}>BIRTH: {u.birth}</Text>
                  <Text style={styles.birth}>LATEST: {u.latest}</Text>
                </View>
              </View>
              {/* <View style={{ flex: 0.5 }} /> */}
            </View>
          );
        })}
      </View>
      <View style={styles.foot}>
        <Ionicons
          name="ios-add-circle"
          size={90}
          color={colors.blue}
          style={styles.addIcon}
          onPress={() =>
            navigation.navigate("ProfileScreen", {
              name: "ProfileScreen",
            })
          }
        ></Ionicons>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  header: {
    flex: 0.8,
  },
  foot: {
    flex: 0.2,
  },
  container: {
    // flex: 1,
    width: "100%",
    height: 96,
    backgroundColor: "white",
    flexDirection: "row",
    // justifyContent: "space-around",
    marginBottom: 10,
  },
  name: {
    fontFamily: "Noto Sans",
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 22,
    margin: 5,
  },
  birth: {
    fontFamily: "Noto Sans",
    fontSize: 12,
    color: "#1F263E",
    lineHeight: 16.34,
    margin: 5,
  },
  image: {
    flex: 1,
    resizeMode: "center",
    height: 70,
    width: 70,
    margin: 10,
    // marginLeft: 15,
    textAlignVertical: "top",
    justifyContent: "space-around",
    borderRadius: 400 / 2,
  },
  body: {
    flex: 2,
    justifyContent: "center",
  },
  icon: {
    height: 5.82,
    width: 5.82,
    flex: 1,
    justifyContent: "center",
    margin: 20,
  },
  smallIcon: {
    flexDirection: "column",
    flex: 1,
  },
  addIcon: {
    flex: 1,
    position: "absolute",
    alignSelf: "flex-end",
    bottom: 0,
    right: 0,
  },
});

export default EditChildrenScreen;
