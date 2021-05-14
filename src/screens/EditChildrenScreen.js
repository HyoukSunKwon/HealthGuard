import React from "react";
import { Image, StyleSheet, View, Text, SafeAreaView } from "react-native";

import { AuthContext } from "../config/context";
import { scale, moderateScale, verticalScale } from "../config/scaling";
import screen from "../config/screen";
import colors from "../config/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { color } from "react-native-reanimated";

const users = [
  {
    id: 1,
    image: "../../assets/icons/logo.png",
    name: "JasperMattews",
    birth: "Jan 15th 2020",
    latest: "2020-03-20",
    avatar: "https://source.unsplash.com/user/nicoleknipes",
  },
  {
    id: 2,
    image: "../../assets/icons/logo.png",
    name: "JasperMattews",
    birth: "Jan 15th 2020",
    latest: "2020-03-20",
    avatar: "https://source.unsplash.com/user/nicoleknipes",
  },
  {
    id: 3,
    image: "../../assets/icons/logo.png",
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
        {users.map((u) => {
          return (
            <View key={u.id}>
              <View style={styles.container}>
                {/* <Image source={{ uri:u.avatar }} /> */}
                <Image
                  style={styles.image}
                  source={require("../../assets/icons/logo.png")}
                />
                <View style={styles.body}>
                  <Text style={styles.name}>{u.name}</Text>
                  <Text style={styles.birth}>BIRTH: {u.birth}</Text>
                  <Text style={styles.birth}>LATEST: {u.latest}</Text>
                </View>
                <View style={styles.smallIcon}>
                  <Image
                    style={styles.icon}
                    source={require("../../assets/icons/delete.png")}
                  />
                  <TouchableOpacity
                    onPress={() => navigation.navigate("EditProfileScreen")}
                  >
                    <Image
                      style={styles.icon}
                      source={require("../../assets/icons/edit.png")}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              {/* <View style={{ flex: 0.5 }} /> */}
            </View>
          );
        })}
      </View>
      <View style={styles.foot}>
        <TouchableOpacity
          style={styles.done}
          onPress={() =>
            navigation.navigate("ChildrenScreen", { name: "Children" })
          }
        >
          <Text style={styles.doneText}> DONE</Text>
        </TouchableOpacity>
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
    height: moderateScale(96),
    backgroundColor: colors.white,
    flexDirection: "row",
    marginBottom: scale(10),
  },
  name: {
    fontFamily: "notoSans-regular",
    fontSize: moderateScale(16),
    fontWeight: "bold",
    lineHeight: moderateScale(22),
    margin: scale(5),
  },
  birth: {
    fontFamily: "notoSans-regular",
    fontSize: moderateScale(12),
    color: "#1F263E",
    lineHeight: moderateScale(16.34),
    margin: scale(5),
  },
  image: {
    flex: 1,
    resizeMode: "center",
    height: moderateScale(70),
    width: moderateScale(70),
    margin: scale(10),
    marginLeft: scale(20),
    justifyContent: "space-around",
    borderRadius: 400 / 2,
  },
  body: {
    flex: 2,
    justifyContent: "center",
  },
  icon: {
    height: moderateScale(12),
    width: moderateScale(12),
    // flex: 1,
    justifyContent: "center",
    marginTop: scale(20),
    marginBottom: scale(5),
    marginLeft: scale(20),
  },
  smallIcon: {
    flexDirection: "column",
    flex: 1,
  },
  done: {
    backgroundColor: "blue",
    width: moderateScale(199),
    height: moderateScale(40),
    borderRadius: 30,
    alignSelf: "center",
    bottom: 0,
    left: 0,
    right: 0,
  },
  doneText: {
    fontFamily: "notoSans-regular",
    fontSize: moderateScale(16),
    color: "white",
    lineHeight: 19,
    marginTop: scale(10),
    fontWeight: "bold",
    alignSelf: "center",
  },
  dataContainer: {
    marginTop: verticalScale(60),
    textAlign: "center",
  },
  dobGendertext: {
    fontSize: moderateScale(20),
    marginTop: verticalScale(25),
  },
  editContainer: {
    top: verticalScale(60),
  },
  textField: {
    fontSize: moderateScale(16),
  },
  logoContainer: {
    top: verticalScale(40),
    alignItems: "center",
  },
});

export default EditChildrenScreen;
