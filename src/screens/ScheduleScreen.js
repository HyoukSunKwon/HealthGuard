import React from "react";
import { View, StyleSheet, Text, SafeAreaView, Image } from "react-native";

import { scale, moderateScale, verticalScale } from "../config/scaling";
import colors from "../config/colors";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const ScheduleScreen = ({ navigation }) => {
  const [isSchedule, setIsSchedule] = React.useState(true);

  const scheduleArr = [
    { status: "Upcoming", vaccineName: "vaccine1", scheduleDate: "2021-04-10" },
    { status: "Upcoming", vaccineName: "vaccine2", scheduleDate: "2021-04-10" },
    { status: "Upcoming", vaccineName: "vaccine3", scheduleDate: "2021-04-10" },
    { status: "Upcoming", vaccineName: "vaccine4", scheduleDate: "2021-04-10" },
  ];

  const completedArr = [
    { status: "Complete", vaccineName: "vaccine5", scheduleDate: "2021-04-10" },
    { status: "Complete", vaccineName: "vaccine6", scheduleDate: "2021-04-10" },
    { status: "Complete", vaccineName: "vaccine7", scheduleDate: "2021-04-10" },
    { status: "Complete", vaccineName: "vaccine8", scheduleDate: "2021-04-10" },
  ];

  renderLine = () => {
    if (isSchedule) {
      return (
        <View style={styles.row}>
          <View style={[styles.lightBlueLine, { width: scale(35) }]} />
          <View style={[styles.blueLine, { width: scale(80) }]} />
          <View style={[styles.lightBlueLine, { width: scale(185) }]} />
        </View>
      );
    } else {
      return (
        <View style={styles.row}>
          <View style={[styles.lightBlueLine, { width: scale(183) }]} />
          <View style={[styles.blueLine, { width: scale(85) }]} />
          <View style={[styles.lightBlueLine, { width: scale(32) }]} />
        </View>
      );
    }
  };

  renderLists = () => {
    if (isSchedule) {
      return (
        <View>
          {scheduleArr.map((data, index) => {
            return (
              <View key={index}>
                <View style={styles.tableContentContainer}>
                  <Text
                    style={[styles.tableContentText, styles.checkContainer]}
                  >
                    {data.status}
                  </Text>
                  <Text
                    style={[styles.tableContentText, styles.vaccineContainer]}
                  >
                    {data.vaccineName}
                  </Text>
                  <Text style={[styles.tableContentText, styles.dateContainer]}>
                    {data.scheduleDate}
                  </Text>
                </View>
                <View style={[styles.lightBlueLine, { width: scale(300) }]} />
              </View>
            );
          })}
        </View>
      );
    } else {
      return (
        <View>
          {completedArr.map((data, index) => {
            return (
              <View key={index}>
                <View style={styles.tableContentContainer}>
                  <Text
                    style={[styles.tableContentText, styles.checkContainer]}
                  >
                    {data.status}
                  </Text>
                  <Text
                    style={[styles.tableContentText, styles.vaccineContainer]}
                  >
                    {data.vaccineName}
                  </Text>
                  <Text style={[styles.tableContentText, styles.dateContainer]}>
                    {data.scheduleDate}
                  </Text>
                </View>
                <View style={[styles.lightBlueLine, { width: scale(300) }]} />
              </View>
            );
          })}
        </View>
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.profileGreyContainer}>
        <View style={styles.profileContainer}>
          <View style={styles.row}>
            <View style={styles.nameContainer}>
              <Text style={styles.nameText}>Jasper Matthews</Text>
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate("ChildrenScreen")}
            >
              <Text style={[styles.nameText, styles.backButton]}>{"<"}</Text>
            </TouchableOpacity>
          </View>

          <View style={[styles.row, styles.profileInfoContainer]}>
            <Image
              style={styles.profileImage}
              source={require("../../assets/profile/about-us-1.jpg")}
            ></Image>
            <View style={styles.profileTextInfoContainer}>
              <Text style={[styles.profileInfoText, { fontWeight: "bold" }]}>
                <Ionicons
                  name="calendar"
                  size={moderateScale(13)}
                  color={colors.blueBlack}
                ></Ionicons>
                {" JAN 15, 2020"}
              </Text>
              <Text style={styles.profileInfoText}>
                <Ionicons
                  name="eyedrop-outline"
                  size={moderateScale(13)}
                  color={colors.blueBlack}
                ></Ionicons>
                {" Last shot | 2021-03-20"}
              </Text>
              <Text
                numberOfLines={2}
                style={[
                  styles.profileInfoText,
                  { paddingTop: moderateScale(3) },
                ]}
              >
                Detail will be here maybe users type it on he page of profile
                added
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.scheduleContainer}>
        <View style={[styles.row]}>
          <TouchableOpacity onPress={() => setIsSchedule(true)}>
            <Text
              style={[
                styles.titleStyle,
                isSchedule ? styles.selectStyle : styles.deselectStyle,
              ]}
            >
              UPCOMING
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsSchedule(false)}>
            <Text
              style={[
                styles.titleStyle,
                isSchedule ? styles.deselectStyle : styles.selectStyle,
              ]}
            >
              COMPLETED
            </Text>
          </TouchableOpacity>
        </View>
        <View>{renderLine()}</View>
        <View style={[styles.row, styles.tableHeader]}>
          <Text style={[styles.tableHeaderText, styles.checkHeaderContainer]}>
            CHECK
          </Text>
          <Text style={styles.tableHeaderText}>|</Text>
          <Text style={[styles.tableHeaderText, styles.vaccineHeaderContainer]}>
            VACCINE
          </Text>
          <Text style={styles.tableHeaderText}>|</Text>
          <Text style={[styles.tableHeaderText, styles.dateHeaderContainer]}>
            DATE
          </Text>
        </View>
        {renderLists()}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: verticalScale(28),
    backgroundColor: colors.white,
    flex: 1,
  },
  profileGreyContainer: {
    backgroundColor: colors.backgroundGrey,
    height: verticalScale(190),
    width: scale(350),
  },
  profileContainer: {
    marginTop: verticalScale(40),
    width: scale(300),
    height: verticalScale(135),
    alignSelf: "center",
  },
  nameContainer: {
    width: scale(290),
  },
  nameText: {
    fontFamily: "fredokaOne-regular",
    color: colors.blue,
    fontSize: moderateScale(18),
  },
  backButton: {
    textAlign: "right",
  },
  row: {
    flexDirection: "row",
  },
  profileInfoContainer: {
    paddingTop: verticalScale(19),
    width: scale(300),
    height: verticalScale(115),
    alignSelf: "center",
  },
  profileTextInfoContainer: {
    paddingLeft: scale(14),
    width: scale(234),
    fontFamily: "notoSans-Regular",
  },
  profileImage: {
    marginTop: verticalScale(3),
    height: scale(66),
    width: scale(66),
    borderRadius: moderateScale(50),
  },
  profileInfoText: {
    color: colors.blueBlack,
  },
  scheduleContainer: {
    alignSelf: "center",
    width: scale(300),
    height: verticalScale(450),
  },
  titleStyle: {
    marginTop: verticalScale(23),
    marginBottom: verticalScale(6),
    fontFamily: "fredokaOne-regular",
    fontSize: moderateScale(14),
    width: scale(150),
    textAlign: "center",
  },
  selectStyle: {
    color: colors.blue,
  },
  deselectStyle: {
    color: colors.lightBlue2,
  },
  lightBlueLine: {
    borderBottomColor: colors.lightBlue2,
    alignSelf: "center",
    borderBottomWidth: 1,
  },
  blueLine: {
    borderBottomColor: colors.blue,
    borderBottomWidth: 5,
    borderRadius: moderateScale(10),
  },
  tableHeader: {
    alignItems: "center",
    marginTop: verticalScale(13),
    backgroundColor: colors.lightBlue,
    borderRadius: moderateScale(10),
    width: scale(300),
    height: verticalScale(23),
  },
  tableHeaderText: {
    textAlign: "center",
    fontFamily: "notoSans-bold",
    color: colors.blue2,
    fontSize: moderateScale(9),
  },
  tableContentContainer: {
    marginTop: verticalScale(10),
    flexDirection: "row",
    width: scale(300),
    height: verticalScale(23.5),
  },
  tableContentText: {
    fontFamily: "notoSans-regular",
    color: colors.blueBlack,
    textAlign: "center",
    fontSize: moderateScale(12),
  },
  checkHeaderContainer: {
    width: scale(80),
  },
  vaccineHeaderContainer: {
    width: scale(130),
  },
  dateHeaderContainer: {
    width: scale(80),
  },
  checkContainer: {
    width: scale(85),
  },
  vaccineContainer: {
    width: scale(130),
  },
  dateContainer: {
    width: scale(85),
  },
});

export default ScheduleScreen;
