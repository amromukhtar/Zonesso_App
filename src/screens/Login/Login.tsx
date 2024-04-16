import React from "react";
import { LoginProps } from "./Login.type";
import { View, Text } from "react-native";

export const Login: React.FC<LoginProps> = ({ navigation }) => {
  return (
    <View>
      <Text>Login</Text>
    </View>
  );
};
