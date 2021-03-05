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
      <Text style={styles.text}>
        Thank you for using Health Guard! We're happy you're here. Please read
        this Terms of Service agreement carefully before accessing or using
        Health Guard. Because it is such an important contract between us and
        our users, we have tried to make it as clear as possible. For your
        convenience, we have presented these terms in a short non-binding
        summary followed by the full legal terms.
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
  },
});

export default TermsConditionScreen;
