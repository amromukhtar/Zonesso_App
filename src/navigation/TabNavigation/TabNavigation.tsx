import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeStack, PostStack } from "../Stacks";
import {  TabBar } from "@/components/ui";
import { TabParamList } from "../types";

const Tab = createBottomTabNavigator<TabParamList>();
const { Navigator } = Tab;

const TabNavigation = () => {

  return (
    <Navigator
      initialRouteName="HomeTab"
      tabBar={TabBar}
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
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="PostTab"
        component={PostStack}
        options={{
          title: "Post",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="ChatTab"
        component={HomeStack}
        options={{
          title: "Chat",
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="UserTab"
        component={HomeStack}
        options={{
          title: "User",
          headerShown: false,
        }}
      />
    </Navigator>
  );
};

export default TabNavigation;
