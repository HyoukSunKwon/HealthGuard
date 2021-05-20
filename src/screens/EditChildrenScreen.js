import React from "react";
import { Image, StyleSheet, View, Text, SafeAreaView } from "react-native";

import { scale, moderateScale, verticalScale } from "../config/scaling";
import colors from "../config/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import screen from "../config/screen";

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
                  <View style={styles.lineContainer}>
                    <Image
                      style={styles.lineIcon}
                      source={require("../../assets/icons/calendar.png")}
                    />
                    <Text style={styles.birth}>BIRTH: {u.birth}</Text>
                  </View>
                  <View style={styles.lineContainer}>
                    <Image
                      style={styles.lineIcon}
                      source={require("../../assets/icons/injection.png")}
                    />
                    <Text style={styles.birth}>LATEST: {u.latest}</Text>
                  </View>
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
            </View>
          );
        })}
      </View>
      <View style={styles.foot}>
        <TouchableOpacity
          style={screen.buttonContainer}
          onPress={() =>
            navigation.navigate("ChildrenScreen", { name: "Children" })
          }
        >
          <Text style={screen.buttonText}> DONE</Text>
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
  lineContainer: {
    flexDirection: "row",
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
    borderRadius: scale(400 / 2),
  },
  body: {
    flex: 2,
    justifyContent: "center",
  },
  icon: {
    height: moderateScale(12),
    width: moderateScale(12),
    justifyContent: "center",
    marginTop: scale(20),
    marginBottom: scale(5),
    marginLeft: scale(20),
  },
  smallIcon: {
    flexDirection: "column",
    flex: 0.6,
  },
  // done: {
  //   backgroundColor: "blue",
  //   width: moderateScale(199),
  //   height: moderateScale(40),
  //   borderRadius: scale(30),
  //   alignSelf: "center",
  // },
  // doneText: {
  //   fontFamily: "notoSans-regular",
  //   fontSize: moderateScale(16),
  //   color: "white",
  //   lineHeight: moderateScale(19),
  //   marginTop: scale(10),
  //   fontWeight: "bold",
  //   alignSelf: "center",
  // },
  dataContainer: {
    marginTop: verticalScale(60),
    textAlign: "center",
  },
  lineIcon: {
    width: moderateScale(10),
    height: moderateScale(10),
    marginTop: scale(8),
    marginBottom: scale(10),
  },
});

export default EditChildrenScreen;
