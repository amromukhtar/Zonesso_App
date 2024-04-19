import React from "react";
import { Box, Image, Icon, Text } from "../ui";
import { fontSize } from "@/theme";

export const Header = () => {
  return (
    <Box
      justifyContent="space-between"
      alignItems="center"
      backgroundColor="white"
      flexDirection="row"
      paddingTop={"m"}
      paddingHorizontal="m"
    >
      <Box flexDirection="row">
        <Image source={require("@/assets/app/Location.png")} />
        <Text marginLeft={"s"}>Dubai</Text>
      </Box>
      <Icon name="search" size={fontSize.xl} />
    </Box>
  );
};
