import { isIos } from '@/utils';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  tabItem: {
    paddingBottom: isIos ? 0 : 4,
  },
});
