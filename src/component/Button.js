import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { scale, moderateScale, verticalScale } from "../config/scaling";
import colors from "../config/colors";
import screenConfig from "../config/screen";

class Button extends Component {
  render = () => {
    const { text, action } = this.props;
    return (
      <TouchableOpacity onPress={action}>
          <View style={styles.buttonContainer}>
            <Text style={screenConfig.buttonText}>{text}</Text>
          </View>
        </TouchableOpacity>
    );
  };
}

const styles = StyleSheet.create({
    buttonContainer: {
        justifyContent: "center",
        alignSelf: "center",
        alignItems: "center",
        width: scale(200),
        height: verticalScale(40),
        backgroundColor: colors.blue,
        borderRadius: moderateScale(30),
    },
});

export default Button;
