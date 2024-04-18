import {
  ColorProps,
  SpacingProps,
  BackgroundColorProps,
  LayoutProps,
  VisibleProps,
  OpacityProps,
  BorderProps,
  TypographyProps,
} from '@shopify/restyle';
import { Theme } from '@/theme';
import { IconProps } from '../Icon';

type PickerProps = {
  selectedValue: string;
  onValueChange?: (itemValue: string, itemIndex: number) => void;
  options: { label: string; value: string }[];
}
export type InputRestyleProps = SpacingProps<Theme> &
  ColorProps<Theme> &
  BackgroundColorProps<Theme> &
  LayoutProps<Theme> &
  VisibleProps<Theme> &
  OpacityProps<Theme> &
  BorderProps<Theme> &
  TypographyProps<Theme>;

export type SelectProps = {
  leftIcon?: IconProps['name'];
  leftIconSize?: number;
  hasMargin?: boolean;
  inputProps: PickerProps;
} & InputRestyleProps;
