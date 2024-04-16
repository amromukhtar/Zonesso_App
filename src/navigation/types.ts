import {
  BottomTabNavigationProp,
  BottomTabScreenProps,
} from '@react-navigation/bottom-tabs';
import {
  CompositeNavigationProp,
  CompositeScreenProps,
  NavigatorScreenParams,
  ParamListBase,
} from '@react-navigation/native';
import {
  NativeStackScreenProps,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

// Stack Param List
export type RootStackParamList = {
  HomeStack: undefined;
  AuthenticationStack: undefined;
};

export type AuthStackParamList = {
  Login: undefined;
};

export type HomeStackParamList = {
  Home: undefined;
  MotorListing: undefined;
  ListingDescription: undefined;
  Post: undefined;
};

export type ActivityStackParamList = {
};

export type PostStackParamList = {
  Post: undefined;
};

export type ChatStackParamList = {
};

export type UserStackParamList = {
};


export type TabParamList = {
  HomeTab: NavigatorScreenParams<HomeStackParamList>;
  ActivityTab: NavigatorScreenParams<ActivityStackParamList>;
  PostTab: NavigatorScreenParams<PostStackParamList>;
  ChatTab: NavigatorScreenParams<ChatStackParamList>;
  UserTab: NavigatorScreenParams<UserStackParamList>;
};

// Screen Props
export type HomeScreenProps = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, 'HomeTab'>,
  CompositeScreenProps<
    NativeStackScreenProps<HomeStackParamList>,
    NativeStackScreenProps<RootStackParamList>
  >
>;

export type ActivityScreenProps = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, 'ActivityTab'>,
  CompositeScreenProps<
    NativeStackScreenProps<ActivityStackParamList>,
    NativeStackScreenProps<RootStackParamList>
  >
>;

export type PostScreenProps = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, 'PostTab'>,
  CompositeScreenProps<
    NativeStackScreenProps<UserStackParamList>,
    NativeStackScreenProps<RootStackParamList>
  >
>;

export type ChatScreenProps = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, 'ChatTab'>,
  CompositeScreenProps<
    NativeStackScreenProps<ChatStackParamList>,
    NativeStackScreenProps<RootStackParamList>
  >
>;

export type UserScreenProps = CompositeScreenProps<
  BottomTabScreenProps<TabParamList, 'UserTab'>,
  CompositeScreenProps<
    NativeStackScreenProps<UserStackParamList>,
    NativeStackScreenProps<RootStackParamList>
  >
>;

export type ScreenProps<
  T extends ParamListBase,
  K extends keyof T,
> = NativeStackScreenProps<T, K>;

// Navigation Props
export type HomeStackNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, 'HomeTab'>,
  NativeStackNavigationProp<RootStackParamList & HomeStackParamList>
>;

export type ActivityStackNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, 'ActivityTab'>,
  NativeStackNavigationProp<RootStackParamList & ActivityStackParamList>
>;

export type PostStackNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, 'PostTab'>,
  NativeStackNavigationProp<RootStackParamList & PostStackParamList>
>;

export type ChatStackNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, 'ChatTab'>,
  NativeStackNavigationProp<RootStackParamList & UserStackParamList>
>;

export type UserStackNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabParamList, 'UserTab'>,
  NativeStackNavigationProp<RootStackParamList & UserStackParamList>
>;
