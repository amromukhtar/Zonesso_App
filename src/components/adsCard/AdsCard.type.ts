
import { HomeStackParamList, ScreenProps } from '@/navigation/types';

type HomeProps = ScreenProps<HomeStackParamList, 'Home'>;

export type AdsCardProps = Pick<HomeProps, 'navigation'>;
