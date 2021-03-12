import React from "react";
import {
  Image,
  StyleSheet,
  View,
  Button,
  Text,
  SafeAreaView,
} from "react-native";
import { AuthContext } from "../config/context";
import colors from "../config/colors";
import WelcomeScreen from "./WelcomeScreen";

const TermsConditionScreen = ({ navigation }) => {
  const { TermsCondition } = React.useContext(AuthContext);
  return (
    <SafeAreaView style={styles.container}>
      {/* <title style={styles.text}> Terms and Conditions </title> */}
      <Text style={styles.titleText}>
        {"\n"}
        Terms and Condition
      </Text>
      <Text style={styles.text} >
        Health Guard
        {"\n"}
      </Text>

      <Text style={styles.bodyText}>
        Date Modified: March 18, 2021 {"\n"} {"\n"}
        
        Thank you for using Health Guard! {"\n"}
        We're happy you're here. Please read this Terms of Service agreement carefully before accessing or using Health Guard. 
        Because it is such an important contract between us and our users, we have tried to make it as clear as possible. 
        {"\n"}
        This App provides information only and does not operate to as a diagnosis tool and it does not subtitute fot professional medical advice and assistance.
        {"\n"}
        You will be provided vaccination recommendation and also you can manage your vaccination history through this App.
        your information such as gender and birth date will not be used anywhere except in this app for recommending vaccination.
        {"\n"}
        By cliking below, you acknowledge and agree to our use of your personal information we collerect 
        through the use of is app in the ways described in our privacy notice.
        {"\n"}
      </Text>
      <Button
        title=" I agree "
        onPress={() =>
          navigation.navigate("WelcomeScreen", { name: "Welcome" })
        }
      />
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
    fontSize: 15,
    fontWeight: "bold",
  },
  titleText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  bodyText: {
    textAlign: "justify",
    fontSize: 12,
    paddingLeft: 10,
    paddingRight: 10,
   },
});

export default TermsConditionScreen;
