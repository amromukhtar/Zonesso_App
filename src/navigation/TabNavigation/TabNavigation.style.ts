import { isIos } from '@/utils';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  tabItem: {
    paddingBottom: isIos ? 0 : 4,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 5,
    borderTopWidth: 3,
    borderColor: '#fd372f'
  },
  tab: {
    height: 60,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    position: 'absolute',
    borderTopWidth: 0,
    elevation: 0
  },
});
