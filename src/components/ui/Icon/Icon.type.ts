import { BoxProps } from '@shopify/restyle';
import { Ionicons } from '@expo/vector-icons';
import { Theme } from '@/theme';

export type IconProps = {
  isPrimary?: boolean;
} & BoxProps<Theme> &
  React.ComponentPropsWithoutRef<typeof Ionicons>;
