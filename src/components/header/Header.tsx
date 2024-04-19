import React from "react";
import { Picker } from "@react-native-picker/picker";
import { Box, Icon } from "../ui";
import { fontSize } from "@/theme";

export const Header = () => {
  return (
    <Box
      justifyContent="space-between"
      alignItems="center"
      backgroundColor="white"
      flexDirection="row"
      paddingHorizontal="m"
    >
      <Picker onValueChange={(itemValue, itemIndex) => {}}>
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
      <Icon name="search" size={fontSize.xl} />
    </Box>
  );
};
