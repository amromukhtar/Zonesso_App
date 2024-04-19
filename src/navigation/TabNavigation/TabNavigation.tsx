import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeStack, PostStack } from "../Stacks";
import { useAppTheme, fontSize } from "@/theme";
import { Icon, IconProps } from "@/components/ui";
import { TabParamList } from "../types";
import styles from "./TabNavigation.style";

type TabBarIconProps = {
  focused: boolean;
  color: string;
  size: number;
};
const Tab = createBottomTabNavigator<TabParamList>();
const { Navigator } = Tab;

const renderTabBarIcon = (routeName: keyof TabParamList) => {
  return (props: TabBarIconProps) => {
    const { color } = props;
    let iconName: IconProps["name"] = "compass";
    let size = fontSize.xxl;
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
};

const TabNavigation = () => {
  const { colors } = useAppTheme();

  return (
    <Navigator
      initialRouteName="HomeTab"
      screenOptions={(props) => {
        const {
          route: { name: routeName },
        } = props;
        return {
          headerShown: false,
          tabBarIcon: renderTabBarIcon(routeName),
          tabBarStyle: styles.tab,
          tabBarItemStyle: styles.tabItem,
          tabBarActiveTintColor: colors.primary,
          activeTintColor: colors.primary,
        };
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{
          title: "Home",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="ActivityTab"
        component={HomeStack}
        options={{
          title: "Activity",
        }}
      />
      <Tab.Screen
        name="PostTab"
        component={PostStack}
        options={{
          title: "Activity",
        }}
      />
      <Tab.Screen
        name="ChatTab"
        component={HomeStack}
        options={{
          title: "Chat",
        }}
      />
      <Tab.Screen
        name="UserTab"
        component={HomeStack}
        options={{
          title: "User",
        }}
      />
    </Navigator>
  );
};

export default TabNavigation;
