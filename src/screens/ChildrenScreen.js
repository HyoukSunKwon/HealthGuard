import React from "react";
import { Image, StyleSheet, View, Text, SafeAreaView } from "react-native";

import { scale, moderateScale, verticalScale } from "../config/scaling";
import colors from "../config/colors";
// import font from "../config/context";
import { TouchableOpacity } from "react-native-gesture-handler";

const users = [
  {
    id: 1,
    name: "JasperMattews",
    birth: "Jan 15th 2020",
    latest: "2020-03-20",
    avatar: "https://source.unsplash.com/user/nicoleknipes",
  },
  {
    id: 2,
    name: "JasperMattews",
    birth: "Jan 15th 2020",
    latest: "2020-03-20",
    avatar: "https://source.unsplash.com/user/nicoleknipes",
  },
  {
    id: 3,
    name: "JasperMattews",
    birth: "Jan 15th 2020",
    latest: "2020-03-20",
    avatar: "https://source.unsplash.com/user/nicoleknipes",
  },
];

const ChildrenScreen = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.header}>
        {users.map((u) => {
          return (
            <View key={u.id}>
              <TouchableOpacity
                onPress={() => navigation.navigate("ScheduleScreen")}
              >
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
                        style={styles.icon}
                        source={require("../../assets/icons/calendar.png")}
                      />
                      <Text style={styles.birth}>BIRTH: {u.birth}</Text>
                    </View>
                    <View style={styles.lineContainer}>
                      <Image
                        style={styles.icon}
                        source={require("../../assets/icons/injection.png")}
                      />
                      <Text style={styles.birth}>LATEST: {u.latest}</Text>
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
      <View style={styles.foot}>
        <TouchableOpacity onPress={() => navigation.navigate("AddChildScreen")}>
          <Image
            style={styles.addIcon}
            source={require("../../assets/icons/add-profile.png")}
          ></Image>
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
  lineContainer: {
    flexDirection: "row",
  },
  name: {
    fontFamily: "notoSans-bold",
    fontSize: moderateScale(16),
    lineHeight: moderateScale(22),
    margin: scale(5),
    color: colors.black,
  },
  birth: {
    fontFamily: "roboto-regular",
    fontSize: moderateScale(12),
    color: colors.black,
    lineHeight: verticalScale(16.5),
    margin: scale(5),
  },
  image: {
    flex: 1,
    resizeMode: "center",
    height: verticalScale(66),
    width: scale(66),
    margin: scale(10),
    marginTop: verticalScale(15),
    justifyContent: "space-around",
    borderRadius: scale(400 / 2),
  },
  body: {
    flex: 2,
    justifyContent: "center",
  },
  addIcon: {
    alignSelf: "flex-end",
    width: scale(70),
    height: verticalScale(70),
    marginRight: moderateScale(23),
  },
  icon: {
    marginTop: verticalScale(8),
    marginLeft: scale(4),
    height: verticalScale(10),
    width: scale(10),
    resizeMode: "stretch",
  },
});

export default ChildrenScreen;
