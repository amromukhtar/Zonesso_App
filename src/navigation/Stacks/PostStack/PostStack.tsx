import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Post } from "@/screens";
import { PostScreenProps, PostStackParamList } from "@/navigation/types";

const Stack = createNativeStackNavigator<PostStackParamList>();

export const PostStack: React.FC<PostScreenProps> = (props) => {
  return (
    <Stack.Navigator initialRouteName="Post">
      <Stack.Screen name="Post" component={Post} />
    </Stack.Navigator>
  );
};
