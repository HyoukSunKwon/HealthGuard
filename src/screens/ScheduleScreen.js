import React from "react";
import { View, StyleSheet, Text, SafeAreaView, Image } from "react-native";

import { scale, moderateScale, verticalScale } from "../config/scaling";
import colors from "../config/colors";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

import TableHeader from "../component/TableHeader";
import TableItem from "../component/TableItem";
import ScheduleBlueLine from "../component/ScheduleBlueLine";

const ScheduleScreen = ({ navigation }) => {
  const [isSchedule, setIsSchedule] = React.useState(true);

  const vaccineArr = [
    {
      status: "Upcoming",
      vaccineName: "vaccine1",
      scheduleDate: "2021-04-10",
      shotDate: "",
    },
    {
      status: "Upcoming",
      vaccineName: "vaccine2",
      scheduleDate: "2021-04-10",
      shotDate: "",
    },
    {
      status: "Upcoming",
      vaccineName: "vaccine3",
      scheduleDate: "2021-04-10",
      shotDate: "",
    },
    {
      status: "Upcoming",
      vaccineName: "vaccine4",
      scheduleDate: "2021-04-10",
      shotDate: "",
    },
    {
      status: "Complete",
      vaccineName: "vaccine5",
      scheduleDate: "2021-04-10",
      shotDate: "2021-05-10",
    },
    {
      status: "Complete",
      vaccineName: "vaccine6",
      scheduleDate: "2021-04-10",
      shotDate: "2021-05-10",
    },
    {
      status: "Complete",
      vaccineName: "vaccine7",
      scheduleDate: "2021-04-10",
      shotDate: "2021-05-10",
    },
    {
      status: "Complete",
      vaccineName: "vaccine8",
      scheduleDate: "2021-04-10",
      shotDate: "2021-05-10",
    },
  ];

  renderLine = () => {
    if (isSchedule) {
      return <ScheduleBlueLine width1={35} width2={80} width3={185} />;
    } else {
      return <ScheduleBlueLine width1={183} width2={86} width3={31} />;
    }
  };

  renderLists = () => {
    if (isSchedule) {
      return (
        <View>
          {vaccineArr
            .filter(function (item) {
              return item.status == "Upcoming";
            })
            .map((data, index) => {
              return (
                <TableItem
                  key={index}
                  status={data.status}
                  vaccineName={data.vaccineName}
                  date={data.scheduleDate}
                />
              );
            })}
        </View>
      );
    } else {
      return (
        <View>
          {vaccineArr
            .filter(function (item) {
              return item.status == "Complete";
            })
            .map((data, index) => {
              return (
                <TableItem
                  key={index}
                  status={data.status}
                  vaccineName={data.vaccineName}
                  date={data.shotDate}
                />
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
                  color={colors.black}
                ></Ionicons>
                {" JAN 15, 2020"}
              </Text>
              <Text style={styles.profileInfoText}>
                <Ionicons
                  name="eyedrop-outline"
                  size={moderateScale(13)}
                  color={colors.black}
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
        <TableHeader />
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
    color: colors.black,
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
    color: colors.blue2,
  },
});

export default ScheduleScreen;
