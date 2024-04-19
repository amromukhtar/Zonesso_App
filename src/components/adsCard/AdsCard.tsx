import { Box, Touchable } from "../ui";
import { AdsCardProps } from "./AdsCard.type";
import { Image } from "react-native";

export const AdsCard: React.FC<AdsCardProps> = ({ navigation }) => {
  const onPress = () => {
    return () => {
      // navigation.navigate("AdsDetails", { title: name });
    };
  };

  const renderCardContent = () => {
    return (
      <Image
        style={{ width: "100%", height: "100%" }}
        resizeMode="contain"
        source={require("@/assets/app/slide.png")}
      />
    );
  };

  return (
    <Box
      flex={2}
      backgroundColor="white"
      flexDirection="row"
      paddingHorizontal={"m"}
    >
      {onPress ? (
        <Touchable
          activeOpacity={0.5}
          shadowColor="black"
          useForeground
          onPress={onPress}
        >
          {renderCardContent()}
        </Touchable>
      ) : (
        renderCardContent()
      )}
    </Box>
  );
};
