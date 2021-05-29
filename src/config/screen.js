import { scale, moderateScale, verticalScale } from "./scaling";
import colors from "./colors";

export default {
  container: {
    backgroundColor: colors.backgroundGrey,
    flex: 1,
    // width: "100%",
    // height: "100%",
  },
  logoImage: {
    width: scale(90),
    height: verticalScale(90),
  },
  buttonContainer: {
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    width: scale(200),
    height: verticalScale(40),
    backgroundColor: colors.blue,
    borderRadius: moderateScale(30),
  },
  buttonText: {
    fontFamily: "fredokaOne-regular",
    fontSize: moderateScale(20),
    color: colors.white,
  },
  subTitleText: {
    fontFamily: "fredokaOne-regular",
    fontSize: moderateScale(24),
    color: colors.blue,
  },
  titleText: {
    fontFamily: "fredokaOne-regular",
    fontSize: moderateScale(32),
    color: colors.blue,
  },
  // ex. title of each screen
  titleText: {
    fontFamily: "fredokaOne-regular",
    color: colors.blue,
    fontSize: moderateScale(18),
  },
  // ex. upcoming, completed text
  subTitleText: {
    fontFamily: "fredokaOne-regular",
    color: colors.blue,
    fontSize: moderateScale(14),
  },
  // ex. most of body text
  bodyText: {
    fontFamily: "roboto-regular",
    color: colors.black,
    fontSize: moderateScale(12),
    margin: scale(5),
  },
};
