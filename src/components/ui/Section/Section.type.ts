import { BoxProps } from '@shopify/restyle';
import { Theme } from '@/theme';

export type SectionProps = {
  children?: React.ReactNode;
  title?: string;
  actionButtonText?: string;
  onButtonActionPress?: () => void;
} & BoxProps<Theme>;
