import React from 'react';
import {TextInput} from 'react-native';
import styled from 'styled-components/native';
import Text from '../Text';

const Input = (props) => {
  const {label, containerStyle} = props;
  return (
    <>
      <Text>{label ?? ''}</Text>
      <Container style={containerStyle}>
        <TextInput style={{fontSize: 16}} {...props} />
      </Container>
    </>
  );
};
export default Input;
const Container = styled.View`
  width: 100%;
  border-bottom-width: 0.5;
  padding-bottom: 5px;
  padding-left: 3px;
`;
