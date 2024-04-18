import { Box, Icon } from "@/components";
import { fontSize } from "@/theme";
import React from "react";

export const Header = () => {
  return (
    <Box
      justifyContent="space-between"
      alignItems="center"
      backgroundColor="white"
      flexDirection="row"
      padding="s"
    >
      {/* <TextField
        backgroundColor="background"
        leftIcon="search"
        borderWidth={0}
        inputProps={{
          placeholder: "",
        }}
        onChange={(e, v) => console.log(v)}
      /> */}

      <Box></Box>
      <Icon name="search" size={fontSize.xl} />
    </Box>
  );
};
