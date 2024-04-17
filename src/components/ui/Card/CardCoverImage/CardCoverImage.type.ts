import { VariantProps } from '@shopify/restyle';
import { ImageProps } from '@/components/Image/Image.type';
import { Theme } from '@/theme';

export type CardCoverImageSizeVariants = VariantProps<
  Theme,
  'cardCoverImageSizeVariants',
  'size'
>;

export type CardCoverImageProps = ImageProps & CardCoverImageSizeVariants;
