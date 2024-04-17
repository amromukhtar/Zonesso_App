import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigation from "./TabNavigation";
import { AuthenticationStack } from "./Stacks";
import { RootStackParamList } from "./types";

const RootStack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigation = () => {
  const userToken = false;

  return (
    <>
      <NavigationContainer>
        <StatusBar barStyle={"light-content"} />
        <RootStack.Navigator
          screenOptions={{
            presentation: "modal",
          }}
        >
          {userToken ? (
            <RootStack.Screen
              name="HomeStack"
              options={{ headerShown: false }}
              component={TabNavigation}
            />
          ) : (
            <RootStack.Screen
              options={{
                headerShown: false,
              }}
              name="AuthenticationStack"
              component={AuthenticationStack}
            />
          )}
        </RootStack.Navigator>
      </NavigationContainer>
    </>
  );
};
