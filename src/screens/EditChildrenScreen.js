import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { TouchableOpacity } from "react-native-gesture-handler";

import { AuthContext } from "../config/context";
import { scale, moderateScale, verticalScale } from "../config/scaling";
import { ltext } from "../config/localization"

import Button from "../component/Button";
import colors from "../config/colors";
import screen from "../config/screen";
import { color } from "react-native-reanimated";

const EditChildrenScreen = ({ navigation }) => {
  const { signIn } = React.useContext(AuthContext);
  const [text, onChangeText] = React.useState("Useless Text");

  let dayArr = [];

  for (let i = 1; i <= 31; i++) {
    dayArr.push({ label: i.toString(), value: i });
  }

  let yearArr = [];
  let year = new Date().getFullYear();
  for (let i = year; i >= 1920; i--) {
    yearArr.push({ label: i.toString(), value: i });
  }

  const image = [
    {
      id: "1",
      photo: "First Item",
    },
    {
      id: "2",
      photo: "Second Item",
    },
    {
      id: "3",
      photo: "Third Item",
    },
  ];

  const Item = ({ onPress, backgroundColor }) => (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.iconContainer, backgroundColor]}
    >
      <Image style={styles.icon} source={require("../../assets/icon.png")} />
    </TouchableOpacity>
  );

  const [selectedId, setSelectedId] = React.useState(null);

  const renderItem = ({ item }) => {
    const backgroundColor =
      item.id === selectedId ? colors.white : colors.blue2;

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={{ backgroundColor }}
      />
    );
  };

  return (
    <SafeAreaView style={screen.container}>
      <ScrollView>
        <View style={styles.imageContainer}>
          <View style={[styles.makeRow, styles.profileImageText]}>
            <Text style={styles.fieldText}>{ltext("choose_profile_img_title")}</Text>
            <Text style={styles.star}>*</Text>
          </View>
          {/* <View style={styles.iconContainer}>
            <Image
              style={styles.icon}
              source={require("../../assets/icon.png")}
            />
          </View> */}
          <FlatList
            horizontal
            data={image}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            extraData={selectedId}
          />
        </View>

        <View style={styles.nameContainer}>
          <View style={styles.makeRow}>
            <Text style={styles.fieldText}>{ltext("name_field_title")}</Text>
            <Text style={styles.star}>*</Text>
          </View>
          <View style={styles.makeRow}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              placeholder={ltext("firstname_field_placeholder")}
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              placeholder={ltext("lastname_field_placeholder")}
            />
          </View>
        </View>

        <View style={styles.birthContainer}>
          <View style={styles.makeRow}>
            <Text style={styles.fieldText}>{ltext("date_field_title")}</Text>
            <Text style={styles.star}>*</Text>
          </View>

          <View style={styles.makeRow}>
            <DropDownPicker
              items={ltext("month_array")}
              containerStyle={styles.monStyle}
              placeholderStyle={styles.makeCenter}
              selectedLabelStyle={{ textAlign: "center" }}
              arrowColor={colors.blue}
              // style={{ borderRadius: moderateScale(30, 2) }}
              //defaultValue="January"
              placeholder={ltext("date_field_month")}
            />

            <DropDownPicker
              items={dayArr}
              //defaultValue={1}
              containerStyle={styles.monStyle}
              placeholderStyle={styles.makeCenter}
              selectedLabelStyle={{ textAlign: "center" }}
              arrowColor={colors.blue}
              placeholder={ltext("date_field_day")}
            />
          </View>

          <DropDownPicker
            items={yearArr}
            containerStyle={styles.yearStyle}
            //defaultValue={year}
            placeholderStyle={styles.makeCenter}
            selectedLabelStyle={{ textAlign: "center" }}
            arrowColor={colors.blue}
            placeholder={ltext("date_field_year")}
          />
        </View>

        <View style={styles.genderPickerStyle}>
          <View style={styles.makeRow}>
            <Text style={styles.fieldText}>{ltext("gender_field_title")}</Text>
            <Text style={styles.star}>*</Text>
          </View>
          <DropDownPicker
            items={ltext("gender_array")}
            containerStyle={styles.yearStyle}
            selectedLabelStyle={{ textAlign: "center" }}
            arrowColor={colors.blue}
            placeholder={ltext("gender_field_title")}
          />
        </View>

        <View style={styles.additionalContainer}>
          <Text style={styles.fieldText}>{ltext("additional_field_title")}</Text>
          <View style={styles.additionalText}>
            <TextInput
              onChangeText={onChangeText}
              numberOfLines={4}
              multiline={true}
              placeholder={ltext("additional_field_placeholder")}
            />
          </View>
        </View>

        <Button text={ltext("save_child_button_text")} action={() => navigation.navigate("ChildrenScreen")}/>
   
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  additionalContainer: {
    marginTop: moderateScale(15),
    marginLeft: moderateScale(24),
    marginBottom: verticalScale(16),
  },
  additionalText: {
    elevation: 1,
    width: scale(305),
    height: verticalScale(115),
    borderRadius: moderateScale(12, 2),
    borderColor: colors.white,
    borderWidth: moderateScale(1),
    textAlign: "center",
    backgroundColor: colors.white,
    marginLeft: scale(5),
    paddingLeft: scale(10),
    paddingRight: scale(10)
  },
  birthContainer: {
    marginTop: moderateScale(15),
    marginLeft: moderateScale(24),
  },
  fieldText: {
    fontFamily: "notoSans-regular",
    fontSize: moderateScale(12),
  },
  icon: {
    width: 70,
    height: 70,
    borderRadius: moderateScale(100, 2),
  },
  iconContainer: {
    width: 70,
    height: 70,
    borderRadius: moderateScale(100, 2),
    borderStyle: "dashed",
    borderColor: colors.blue,
    borderWidth: 1.5,
    marginLeft: scale(10),
    overflow: "hidden"
  },
  input: {
    elevation: 1,
    width: scale(150),
    height: verticalScale(35),
    borderRadius: moderateScale(30, 2),
    borderColor: colors.white,
    borderWidth: moderateScale(1),
    textAlign: "center",
    backgroundColor: colors.white,
    marginLeft: scale(5),
  },
  imageContainer: {
    marginTop: moderateScale(20),
    marginLeft: moderateScale(24),
  },
  star: {
    color: colors.red,
    fontSize: moderateScale(12),
    marginLeft: scale(2),
  },
  makeCenter: {
    textAlign: "center",
    color: colors.grey,
  },
  makeRow: {
    flexDirection: "row",
  },
  monStyle: {
    elevation: 3,
    width: scale(150),
    height: verticalScale(35),
    borderRadius: moderateScale(30, 2),
    marginLeft: scale(5),
  },
  nameContainer: {
    marginTop: moderateScale(20),
    marginLeft: moderateScale(24),
  },
  yearStyle: {
    elevation: 2,
    width: scale(305),
    height: verticalScale(35),
    borderRadius: moderateScale(30, 2),
    marginLeft: scale(5),
  },
  genderPickerStyle: {
    elevation: 1,
    marginTop: moderateScale(15),
    marginLeft: moderateScale(24),
  },

  questionStyle: {
    marginTop: verticalScale(40),
    marginBottom: scale(10),
    textAlign: "center",
    alignItems: "center",
    fontSize: moderateScale(20),
    fontWeight: "bold",
    color: colors.darkGrey,
  },

  btnContainer: {
    marginTop: moderateScale(20),
  },

  profileImageText: {
    marginBottom: verticalScale(10)
  }
});
export default EditChildrenScreen;
