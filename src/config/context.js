import React from "react";
import colors from "./colors";
import { moderateScale, scale } from "./scaling";

export const AuthContext = React.createContext();

export default {
  body: {
    fontFamily: "roboto-regular",
    color: colors.black,
    fontSize: moderateScale(12),
    margin: scale(5),
  },
};
