import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, MotorListing, ListingDescription, Post } from "@/screens";
import { HomeScreenProps, HomeStackParamList } from "@/navigation/types";

const Stack = createNativeStackNavigator<HomeStackParamList>();

export const HomeStack: React.FC<HomeScreenProps> = (props) => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Post"
        component={Post}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MotorListing"
        component={MotorListing}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ListingDescription"
        component={ListingDescription}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
