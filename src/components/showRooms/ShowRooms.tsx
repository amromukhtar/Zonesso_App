import React from "react";
import { useFetch } from "@/hooks/useFetch";
import { Carousel, Section, Box, ShowRoomCard, Touchable } from "../ui";
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
  const {
    isLoading,
    error,
    data: { sellers },
  } = useFetch({
    url: "/seller",
    queryKey: ["showRoomsServerList"],
    initialData: { sellers: [] },
  });

  if (error) {
    console.log(error);
  }

  const renderItem = (props: RenderItmeProps) => {
    const { id, title, distance, icon, image } = props.item;

    return (
      <Touchable
        activeOpacity={0.5}
        shadowColor="black"
        useForeground
        onPress={onShowRoomPress}
      >
        <ShowRoomCard
          key={id}
          title={title}
          image={image}
          icon={icon}
          distance={distance}
        />
      </Touchable>
    );
  };

  const onButtonActionPress = () => {
    navigation.navigate("Home");
  };

  const onShowRoomPress = () => {
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
          data={sellers ?? showRoomsList}
          snapEnabled
          renderItem={renderItem}
        />
      </Section>
    </Box>
  );
};
