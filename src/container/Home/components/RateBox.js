import React from 'react';
import {View} from 'react-native';
import styles from '@container/Home/Home.styles';
import {Text} from '@components';

const RateBox = ({item, rate}) => {
  return (
    <View style={styles.rateBoxContainer}>
      <View style={styles.exchangeRateBox}>
        <Text style={styles.rateText}>{item}</Text>
        <Text style={styles.rate}>{rate}</Text>
      </View>
    </View>
  );
};

export default RateBox;
