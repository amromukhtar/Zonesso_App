
import { HomeStackParamList, ScreenProps } from '@/navigation/types';

type HomeProps = ScreenProps<HomeStackParamList, 'Home'>;

export type ShowRoomsProps = Pick<HomeProps, 'navigation'>;

type ItemProps = {
    id: string
    title: string
    distance: string
    image: string
    icon: string
}

export type RenderItmeProps = {
    item: ItemProps
}
