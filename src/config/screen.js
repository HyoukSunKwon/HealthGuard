import { scale, moderateScale, verticalScale } from "./scaling";

export default {
  buttonText: {
    fontSize: moderateScale(20),
  },
  container: {
    backgroundColor: "#fff",
    flex: 1,
    // width: "100%",
    // height: "100%",
  },
  logoImage: {
    width: scale(90),
    height: verticalScale(90),
  },
};
