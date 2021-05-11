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
    width: scale(240),
    height: verticalScale(50),
    backgroundColor: colors.blue,
    borderRadius: moderateScale(20),
  },
  buttonText: {
    fontFamily: "fredokaOne-regular",
    fontSize: moderateScale(20),
    color: colors.white,
  },
};
