import {View} from 'react-native';
import styles from '@container/Home/Home.styles';
import React from 'react';
import {Text} from '@components';

const PromptBox = () => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
      <Text style={styles.promptText}>...查看更多</Text>
    </View>
  );
};
export default PromptBox;
