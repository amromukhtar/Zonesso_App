import React from "react";
import { Box, Button, Image, Text } from "@/components";
import { AuthStackParamList, ScreenProps } from "@/navigation/types";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const Login: React.FC<ScreenProps<AuthStackParamList, "Login">> = ({
  navigation,
}) => {
  const { bottom } = useSafeAreaInsets();

  const onConnectWithPhoneNumberButtonPress = () => {};
  const onSocialNetworkConnectButtonPress = () => {};

  return (
    <Box flex={1} flexDirection="column" backgroundColor="white">
      <Box flex={1}>
        <Image
          source={require("@/assets/app/main-image.png")}
          width="100%"
          height="100%"
        />
      </Box>
      <Box
        flex={1}
        padding="l"
        borderTopLeftRadius="xxl"
        borderTopRightRadius="xxl"
      >
        <Text fontWeight="bold" variant="header">
          Get food you want.
        </Text>
        <Text marginTop="xs" variant="secondary">
          Satisfy your cravings by getting the food you love from your favourite
          restaurants delivered to you fast. Delivery & takeout from the best
          local restaurants.
        </Text>
        <Box marginTop="l">
          <Button
            label="Connect with Phone Number"
            isFullWidth
            onPress={onConnectWithPhoneNumberButtonPress}
          />
          <Button
            label="Connect with Facebook"
            isFullWidth
            variant="facebook"
            marginTop="s"
            backgroundColor="facebook"
            onPress={onSocialNetworkConnectButtonPress}
          />
          <Button
            label="Connect with Google"
            variant="google"
            marginTop="s"
            isFullWidth
            onPress={onSocialNetworkConnectButtonPress}
          />
        </Box>
      </Box>
    </Box>
  );
};


