import {StyleSheet} from 'react-native';

import {pallete} from '@src/common/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: pallete.blue,
    paddingTop: 50
  },
  overlay: {
    backgroundColor: pallete.green,
    flex: 1,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    paddingTop: 30,
    paddingHorizontal: 10
  },
  flatlist: {
    paddingBottom: 30
  },
  row: {
    flexDirection: 'row'
  }
});

export default styles;
