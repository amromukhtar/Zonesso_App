import React from "react";
import { PostProps } from "./Post.type";
import { View, Text } from "react-native";

export const Post: React.FC<PostProps> = ({ navigation }) => {
  return (
    <View className="flex">
      <Text>HI</Text>
    </View>
  );
};
