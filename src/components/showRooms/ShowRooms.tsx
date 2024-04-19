import React from "react";
import { useFetch } from "@/hooks/useFetch";
import { Carousel, Section, Box, ShowRoomCard } from "@/components";
import { Dimensions } from "react-native";
import { ShowRoomsProps, RenderItmeProps } from "./ShowRooms.type";

const showRoomsList = [
  {
    id: "alksf",
    title: "Toyota Motors",
    distance: "1.2 Km away",
    icon: require("@/assets/app/Toyota Logo.png"),
    image: require("@/assets/app/Toyota Pic.png"),
  },
  {
    id: "lakjfskl",
    title: "Toyota Motors",
    distance: "1.2 Km away",
    icon: require("@/assets/app/Toyota Logo.png"),
    image: require("@/assets/app/Toyota Pic.png"),
  },
  {
    id: "alksfj",
    title: "Toyota Motors",
    distance: "1.2 Km away",
    icon: require("@/assets/app/Toyota Logo.png"),
    image: require("@/assets/app/Toyota Pic.png"),
  },
];

export const ShowRooms: React.FC<ShowRoomsProps> = ({ navigation }) => {
  // const {
  //   isLoading,
  //   error,
  //   data: { restaurants },
  // } = useFetch({
  //   url: '/restaurant/recommended',
  //   queryKey: ['recommended-restaurants'],
  //   initialData: { restaurants: [] },
  // });

  const renderItem = (props: RenderItmeProps) => {
    const { id, title, distance, icon, image } = props.item;
    const imageUrl = "";
    return (
      <ShowRoomCard
        key={id}
        title={title}
        image={image}
        icon={icon}
        distance={distance}
      />
    );
  };

  const onButtonActionPress = () => {
    navigation.navigate("Home");
  };

  const onPlaceItemPress = (id: string) => {
    navigation.navigate("Home");
  };

  return (
    <Box flex={3}>
      <Section
        title={"Show Rooms"}
        actionButtonText={"View all"}
        onButtonActionPress={onButtonActionPress}
      >
        <Carousel
          width={Dimensions.get("window").width}
          numItemsPerSlide={2.4}
          data={showRoomsList}
          snapEnabled
          renderItem={renderItem}
        />
      </Section>
    </Box>
  );
};
