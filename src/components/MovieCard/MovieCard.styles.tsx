import { pallete } from '@src/common/colors';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 300,
    margin: 5,
    backgroundColor: pallete.white,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  image: {
    width: '100%',
    height: '75%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  footer: {
    marginTop: 5,
    paddingHorizontal: 5
  },
  title: {
      fontWeight: 'bold'
  },
  rating: {
      marginTop: 5
  }
});

export default styles;
