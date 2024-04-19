import React from "react";
import { SectionProps } from "./Section.type";
import { Text } from "../Text";
import { Box } from "../Box";
import { Touchable } from "../Touchable";

export const Section: React.FC<SectionProps> = ({
  children,
  title,
  actionButtonText,
  onButtonActionPress,
  ...rest
}) => {
  const handleButtonActionPress = () => {
    if (onButtonActionPress) {
      onButtonActionPress();
    }
  };

  return (
    <Box {...rest}>
      <Box
        backgroundColor={"white"}
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        paddingHorizontal="m"
      >
        {title ? (
          <Box flex={1}>
            <Text variant="subHeader" numberOfLines={2}>
              {title}
            </Text>
          </Box>
        ) : null}
        {actionButtonText ? (
          <Touchable onPress={handleButtonActionPress} variant="transparent">
            <Text variant="primary">{actionButtonText}</Text>
          </Touchable>
        ) : null}
      </Box>
      {children}
    </Box>
  );
};
