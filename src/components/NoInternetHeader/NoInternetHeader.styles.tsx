import {StyleSheet} from 'react-native';

import { pallete } from '@src/common/colors';

const styles = StyleSheet.create({
  header: {
    padding: 30,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: pallete.white,
    lineHeight: 40
  },
});

export default styles;
