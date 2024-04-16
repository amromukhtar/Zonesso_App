import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "@/screens";
import { AuthStackParamList } from "@/navigation/types";
import { useTransparentHeaderOptions } from "@/utils";

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthenticationStack = () => {
  const transparentHeaderOptions = useTransparentHeaderOptions();

  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Login"
        component={Login}
        options={transparentHeaderOptions}
      />
    </Stack.Navigator>
  );
};
