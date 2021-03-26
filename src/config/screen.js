import { scale, moderateScale, verticalScale } from "./scaling";
import colors from "./colors";

export default {
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
  buttonContainer: {
    marginTop: "8%",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    width: scale(240),
    height: verticalScale(50),
    backgroundColor: colors.lightBlue_button,
    borderRadius: 30,
  },
  buttonText: {
    fontSize: moderateScale(20),
  },
};
