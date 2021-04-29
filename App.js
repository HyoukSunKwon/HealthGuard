import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AuthContext } from "./src/config/context";
import LoadingScreen from "./src/screens/LoadingScreen";
import ChildrenStack from "./src/routes/ChildrenStack";
import TermsConditionStack from "./src/routes/TermsConditionStack";

export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null);

  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
      signUp: () => {
        setIsLoading(false);
        setUserToken("asdf");
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
      },
    };
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {userToken ? <ChildrenStack /> : <TermsConditionStack />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
