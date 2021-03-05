import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AuthContext } from "./src/config/context";
import LoadingScreen from "./src/screens/LoadingScreen";
import WelcomeStack from "./src/routes/WelcomeStack";
import TabStack from "./src/routes/TabNavigator";

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
        {userToken ? <TabStack /> : <WelcomeStack />}
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
