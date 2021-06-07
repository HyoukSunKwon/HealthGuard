import React from "react";
import { ScrollView, View, StyleSheet, Text, Image } from "react-native";

import { scale, moderateScale, verticalScale } from "../config/scaling";
import colors from "../config/colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ltext } from "../config/localization"

import ScheduleBlueLine from "../component/ScheduleBlueLine";
import VaccineItem from "../component/VaccineItem";

const ScheduleScreen = ({ navigation }) => {
  const [isSchedule, setIsSchedule] = React.useState(true);

  const vaccineArr = [
    {
      status: "-",
      vaccineName: "vaccine1",
      scheduleDate: "-",
      shotDate: "",
    },
    {
      status: "Upcoming",
      vaccineName: "vaccine2",
      scheduleDate: "May 15, 2021",
      shotDate: "",
    },
    {
      status: "Overdue",
      vaccineName: "vaccine3",
      scheduleDate: "May 5, 2021",
      shotDate: "",
    },
    {
      status: "Upcoming",
      vaccineName: "vaccine4",
      scheduleDate: "May 15, 2021",
      shotDate: "",
    },
    {
      status: "Complete",
      vaccineName: "vaccine5",
      scheduleDate: "May 15, 2021",
      shotDate: "May 19, 2021",
    },
    {
      status: "Complete",
      vaccineName: "vaccine6",
      scheduleDate: "May 15, 2021",
      shotDate: "May 19, 2021",
    },
    {
      status: "Complete",
      vaccineName: "vaccine7",
      scheduleDate: "May 15, 2021",
      shotDate: "May 19, 2021",
    },
    {
      status: "Complete",
      vaccineName: "vaccine8",
      scheduleDate: "May 15, 2021",
      shotDate: "May 19, 2021",
    },
  ];

  renderLine = () => {
    if (isSchedule) {
      return <ScheduleBlueLine width1={35} width2={80} width3={185} />;
    } else {
      return <ScheduleBlueLine width1={183} width2={86} width3={31} />;
    }
  };

  renderItems = () => {
    if (isSchedule) {
      return (
        <View>
          {vaccineArr
            .filter(function (item) {
              return item.status !== "Complete";
            })
            .map((data, index) => {
              return (
                <View key={index}>
                  <VaccineItem
                    status={data.status}
                    vaccineName={data.vaccineName}
                    date={data.scheduleDate}
                  />
                </View>
              );
            })}
        </View>
      );
    } else {
      return (
        <View>
          {vaccineArr
            .filter(function (item) {
              return item.status === "Complete";
            })
            .map((data, index) => {
              return (
                <View key={index}>
                  <VaccineItem
                    status={data.status}
                    vaccineName={data.vaccineName}
                    date={data.scheduleDate}
                  />
                </View>
              );
            })}
        </View>
      );
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileGreyContainer}>
        <View style={styles.profileContainer}>
          <View style={[styles.row, styles.profileInfoContainer]}>
            <Image
              style={styles.profileImage}
              source={require("../../assets/profile/about-us-1.jpg")}
            ></Image>
            <View style={styles.profileTextInfoContainer}>
              <View style={styles.nameContainer}>
                <Text style={styles.nameText}>Jasper Matthews</Text>
              </View>

              <View style={styles.profileTextInBetween}>
                <Text style={[styles.profileInfoText]}>
                  <Image
                    style={styles.image}
                    source={require("../../assets/icons/calendar.png")}
                  ></Image>
                  {"   JAN 15, 2020"}
                </Text>
              </View>
              <View style={styles.profileTextInBetween}>
                <Text style={styles.profileInfoText}>
                  <Image
                    style={styles.image}
                    source={require("../../assets/icons/injection.png")}
                  />
                  {`   ${ltext("last_shot")} | 2021-03-20`}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.profileTextInBetween}>
            <Text
              numberOfLines={2}
              style={[styles.profileInfoText, { paddingTop: moderateScale(3) }]}
            >
              Detail will be here maybe users type it on he page of profile
              added
            </Text>
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
              {ltext("schedule_upcoming")}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsSchedule(false)}>
            <Text
              style={[
                styles.titleStyle,
                isSchedule ? styles.deselectStyle : styles.selectStyle,
              ]}
            >
              {ltext("schedule_completed")}
            </Text>
          </TouchableOpacity>
        </View>
        <View>{renderLine()}</View>

        <View>{renderItems()}</View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  profileGreyContainer: {
    backgroundColor: colors.backgroundGrey,
    height: verticalScale(190),
    width: scale(350),
  },
  profileContainer: {
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
    fontSize: moderateScale(21),
  },
  backButton: {
    textAlign: "right",
  },
  row: {
    flexDirection: "row",
  },
  profileInfoContainer: {
    paddingTop: verticalScale(15),
    width: scale(300),
    height: verticalScale(115),
    alignSelf: "center",
  },
  profileTextInfoContainer: {
    paddingLeft: scale(16),
    width: scale(234),
    fontFamily: "notoSans-Regular",
  },
  profileImage: {
    marginTop: verticalScale(3),
    height: scale(73),
    width: scale(73),
    borderRadius: moderateScale(50),
  },
  profileInfoText: {
    color: colors.black,
    fontSize: moderateScale(14),
  },
  profileTextInBetween: {
    marginTop: verticalScale(7),
  },
  profileDetailContainer: {},
  scheduleContainer: {
    alignSelf: "center",
    width: scale(300),
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
  image: {
    height: scale(11.5),
    width: scale(11.5),
    resizeMode: "stretch",
  },
});

export default ScheduleScreen;
