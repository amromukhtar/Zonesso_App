import React from "react";

import { HomeProps } from "./Home.type";
import { Header } from "@/components/header";
import { Box } from "@/components/ui";
import { MainCategories } from "@/components/mainCategories";
import { ScrollView, Text } from "react-native";
import { useSafeAreaScrollViewStyles } from "@/hooks";

export const Home: React.FC<HomeProps> = ({ navigation }) => {
  const styles = useSafeAreaScrollViewStyles(false);
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <Header />
      <MainCategories />
      <Box flex={1}>
        <Text>HELLO</Text>
      </Box>
    </ScrollView>
  );
};
