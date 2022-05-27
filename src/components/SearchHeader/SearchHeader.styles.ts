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
  },
  searchInput: {
    borderRadius: 30,
    height: 50,
    backgroundColor: pallete.white,
    width: '100%',
    paddingHorizontal: 10,
    marginTop: 30,
  },
});

export default styles;
