import { VariantProps, BoxProps } from '@shopify/restyle';
import { Theme } from '@/theme';
import { ImageSourcePropType, StyleProp, ViewStyle } from 'react-native/types';

export type CardVariants = VariantProps<Theme, 'cardVariants'>;

export type CardProps = BoxProps<Theme> &
  CardVariants & {
    title?: string;
    icon?: ImageSourcePropType | string;
    onPress?: () => void;
    style?: StyleProp<ViewStyle>;
  };
