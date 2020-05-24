import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import Text from '../Text';
const Input = (props) => {
  const { label, containerStyle } = props;
  return (
    <>
      <Text>{label ?? ''}</Text>
      <View style={styles.inputStyle}>
        <TextInput style={{ fontSize: 16 }} {...props} />
      </View>
    </>
  );
};
export default Input;
const styles = StyleSheet.create({
  inputStyle: {
    width: '100%',
    borderBottomWidth: 0.5,
    paddingBottom: 5,
    paddingLeft: 3,
  },
});
