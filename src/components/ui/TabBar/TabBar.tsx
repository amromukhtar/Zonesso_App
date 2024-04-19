import { Box } from "../Box";
import { Touchable } from "../Touchable";
import { Text } from "../Text";
import { Icon } from "../Icon";
import { fontSize } from "@/theme";

export const TabBar = ({ state, descriptors, navigation }: any) => {
  const renderTabBarIcon = (routeName: string, isFocused: boolean) => {
    let iconName;
    let size = fontSize.xxl;
    let color = isFocused ? "#fd372f" : "#222";
    switch (routeName) {
      case "HomeTab":
        iconName = "home-outline";
        break;
      case "ActivityTab":
        iconName = "notifications-outline";
        break;
      case "PostTab":
        iconName = "add-circle-sharp";
        size = fontSize.xxxl;
        break;
      case "ChatTab":
        iconName = "chatbubble-outline";
        break;
      case "UserTab":
        iconName = "person-outline";
        break;
      default:
        break;
    }
    return <Icon name={iconName} size={size} color={color} />;
  };

  return (
    <Box
      backgroundColor={"white"}
      flexDirection="row"
      height={80}
      justifyContent={"space-between"}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        return (
          <Touchable key={index} onPress={onPress}>
            <Box
              flex={1}
              justifyContent={"center"}
              alignItems={"center"}
              borderTopRightRadius={"s"}
              borderTopLeftRadius={"l"}
              borderTopWidth={isFocused ? 3 : 0}
              borderColor={"primary"}
            >
              {renderTabBarIcon(route.name, isFocused)}
              <Text
                fontSize={fontSize.xs}
                style={{ color: isFocused ? "#fd372f" : "#222" }}
              >
                {label}
              </Text>
            </Box>
          </Touchable>
        );
      })}
    </Box>
  );
};
