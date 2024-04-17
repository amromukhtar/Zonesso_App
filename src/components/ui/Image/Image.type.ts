import { BoxProps } from '@shopify/restyle';
import { Theme } from '@/theme';
import { ImageProps as ExpoImageProps } from 'expo-image';

export type ImageProps = BoxProps<Theme> & ExpoImageProps;
