import React from "react";
import colors from "./colors";
import { moderateScale } from "./scaling";

export const AuthContext = React.createContext();

export default {
  // ex. title of each screen
  title: {
    fontFamily: "fredokaOne-regular",
    color: colors.blue,
    fontSize: moderateScale(18),
  },
  // ex. upcoming, completed text
  subTitle: {
    fontFamily: "fredokaOne-regular",
    color: colors.blue,
    fontSize: moderateScale(14),
  },
  // ex. most of body text
  body: {
    fontFamily: "roboto-regular",
    color: colors.black,
    fontSize: moderateScale(12),
    margin: scale(5),
  },
};
