import React from "react";
import { ScrollView } from "react-native";
import { HomeProps } from "./Home.type";
import { Header } from "@/components/header";
import { MainCategories } from "@/components/mainCategories";
import { AdsCard } from "@/components";
import { ShowRooms } from "@/components";
import { useSafeAreaScrollViewStyles } from "@/hooks";

export const Home: React.FC<HomeProps> = ({ navigation }) => {
  const styles = useSafeAreaScrollViewStyles(false);
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <Header />
      <MainCategories navigation={navigation} />
      <AdsCard navigation={navigation} />
      <ShowRooms navigation={navigation} />
    </ScrollView>
  );
};
