import { fontSize } from "@/theme";
import { CardProps } from "./ShowRoomCard.type";
import { Box } from "../Box";
import { Text } from "../Text";
import { Image } from "../Image";
import { Touchable } from "../Touchable";
import { isIos } from "@/utils";

export const ShowRoomCard: React.FC<CardProps> = ({
  title,
  distance,
  image,
  icon,
  variant,
  onPress,
  ...rest
}) => {
  const renderCardContent = () => {
    return (
      <Box>
        <Image height={130} source={image} borderRadius={"l"} />
        <Box flexDirection="row" marginTop={"s"}>
          <Image height={30} width={40} source={icon} borderRadius={"m"} />
          <Box marginLeft={"s"}>
            <Text fontSize={fontSize.xs}>{title}</Text>
            <Text fontSize={fontSize.xs}>{distance}</Text>
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <Box marginLeft={"m"} overflow={isIos ? undefined : "hidden"} {...rest}>
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
