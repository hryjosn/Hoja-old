import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  rateBoxContainer: {
    width: '50%',
  },
  exchangeRateBox: {
    marginHorizontal: 4,
    marginVertical: 5,
    borderWidth: 1,
    padding: 10,
    borderColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rateText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  rate: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
  },
  promptText: {
    color: 'blue',
    marginBottom: 20,
  },
  container: {
    paddingBottom: 5,
    paddingTop: 10,
    borderBottomWidth: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomColor: '#D7D7D7',
    alignItems: 'center',
  },
});
