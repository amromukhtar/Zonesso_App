import { Box } from "@/components";
import { AdsCardProps } from "./AdsCard.type";
import { Image } from "react-native";

export const AdsCard: React.FC<AdsCardProps> = ({ navigation }) => {
  const onCardPress = (name: string) => {
    return () => {
      // navigation.navigate("RestaurantList", { title: name });
    };
  };

  return (
    <Box
      flex={2}
      backgroundColor="white"
      flexDirection="row"
      paddingHorizontal={"m"}
    >
      <Image
        style={{ width: "100%", height: "100%" }}
        resizeMode="contain"
        source={require("@/assets/app/slide.png")}
      />
    </Box>
  );
};
