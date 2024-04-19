import React from "react";
import { Box, Button, Image, Text } from "@/components";
import { AuthStackParamList, ScreenProps } from "@/navigation/types";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { fontSize } from "@/theme";

export const Login: React.FC<ScreenProps<AuthStackParamList, "Login">> = ({
  navigation,
}) => {
  const { bottom } = useSafeAreaInsets();

  const onConnectWithPhoneNumberButtonPress = () => {};
  const onSocialNetworkConnectButtonPress = () => {};

  return (
    <Box flex={1} flexDirection="column" backgroundColor="white">
      <Box flex={2}>
        <Image
          source={require("@/assets/app/main-image.png")}
          width="100%"
          height="100%"
        />
      </Box>
      <Box flex={1} justifyContent={"center"} padding="l">
        <Button
          label="Create New Account"
          isFullWidth
          onPress={onConnectWithPhoneNumberButtonPress}
        />
        <Button
          label="Continue with Email"
          isFullWidth
          marginTop="s"
          variant={"outline"}
          onPress={onSocialNetworkConnectButtonPress}
        />
      </Box>
      <Box
        flex={1}
        padding="l"
        alignItems={"center"}
        justifyContent={"flex-end"}
        borderTopLeftRadius="xxl"
        borderTopRightRadius="xxl"
      >
        <Text marginVertical={"s"} fontSize={fontSize.xs}>
          {"By signing up, you agree to our "}
          <Text fontSize={fontSize.xs} color={"primary"}>
            {"Terms of Service "}
          </Text>
          {"& "}
          <Text fontSize={fontSize.xs} color={"primary"}>
            {"Privacy Policy"}
          </Text>
        </Text>
        <Text
          marginVertical={"s"}
          fontSize={fontSize.s}
          color={"primary"}
          textDecorationLine={"underline"}
        >
          {"Sign Up Later"}
        </Text>
        <Text marginVertical={"s"} fontSize={fontSize.xs}>
          {"Already have an account?"}
          <Text fontSize={fontSize.xs} color={"primary"}>
            {" Log in"}
          </Text>
        </Text>
      </Box>
    </Box>
  );
};
