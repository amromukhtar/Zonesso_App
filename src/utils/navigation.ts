import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { useAppTheme } from '@/theme';

export const useTransparentHeaderOptions = (): NativeStackNavigationOptions => {
  const { colorScheme } = useAppTheme();
  return {
    headerShown: true,
    headerTitle: '',
    headerTransparent: true,
    headerBlurEffect: colorScheme === 'dark' ? 'dark' : 'light',
  };
};
