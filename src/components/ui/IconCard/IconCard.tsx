import { createRestyleComponent, createVariant } from "@shopify/restyle";
import { Theme, fontSize } from "@/theme";
import { CardProps, CardVariants } from "./IconCard.type";
import { Box } from "../Box";
import { Text } from "../Text";
import { Image } from "../Image";
import { Touchable } from "../Touchable";
import { isIos } from "@/utils";

const InnerCard = createRestyleComponent<
  CardVariants & React.ComponentProps<typeof Box> & CardProps,
  Theme
>([createVariant({ themeKey: "cardVariants" })], Box);

export const IconCard: React.FC<CardProps> = ({
  title,
  variant,
  onPress,
  icon,
  ...rest
}) => {
  const renderCardContent = () => {
    return (
      <Box alignItems={"center"} padding="s">
        <Image height={"80%"} source={icon} />
        <Box alignItems={"center"}>
        <Text fontSize={fontSize.xs}>{title}</Text>
        </Box>
      </Box>
    );
  };

  return (
    <InnerCard
      backgroundColor="white"
      borderRadius="m"
      borderColor="border"
      height={"27%"}
      width={"30%"}
      variant={variant}
      overflow={isIos ? undefined : "hidden"}
      shadowColor="black"
      {...rest}
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
    </InnerCard>
  );
};
