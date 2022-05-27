import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    aspectRatio: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  rowText: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  overview: {
    paddingHorizontal: 10,
    fontSize: 16,
    lineHeight: 25,
  },
  genreRow: {
    flexDirection: 'row',
  },
  genre: {
    marginHorizontal: 10,
    marginTop: 10,
  },
});

export default styles;
