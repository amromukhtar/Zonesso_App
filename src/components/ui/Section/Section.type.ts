import { BoxProps } from '@shopify/restyle';
import { Theme } from '@/theme';

export type SectionProps = {
  children?: React.ReactNode;
  title?: string;
  actionButtonText?: string;
  hasDivider?: boolean;
  onButtonActionPress?: () => void;
} & BoxProps<Theme>;
