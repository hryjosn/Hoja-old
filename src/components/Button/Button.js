import React from 'react';
import {TouchableOpacity} from 'react-native';
import Text from './../Text';

const Button = ({onPress, children, style}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{...styles.buttonStyle, ...style}}>
      <Text style={styles.textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10,
  },
  buttonStyle: {
    backgroundColor: 'black',
    width: '100%',
  },
};

export default Button;
