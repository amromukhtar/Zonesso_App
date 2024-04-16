import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, MotorListing, ListingDescription, Post } from "@/screens";
import { HomeScreenProps, HomeStackParamList } from "@/navigation/types";

const Stack = createNativeStackNavigator<HomeStackParamList>();

export const HomeStack: React.FC<HomeScreenProps> = (props) => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Post" component={Post} />
      <Stack.Screen name="MotorListing" component={MotorListing} />
      <Stack.Screen name="ListingDescription" component={ListingDescription} />
    </Stack.Navigator>
  );
};
