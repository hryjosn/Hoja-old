import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Image, Dimensions, KeyboardAvoidingView, Platform } from 'react-native';
import { Button, TextButton, MyText, RectangleButton } from '@components';
import Page from '@components/Page/Page';
import { observer } from 'mobx-react';
import { useStores } from '@store';
import style from '@styles/globalStyle';
import { Actions } from 'react-native-router-flux';
import { checkInput } from '../../helpers';
import { Translate } from '../../translations';
import LogoIcon from '../../image/logo.png';

const { width } = Dimensions.get('window');

const { container } = style;

const Login = () => {
  const { paramsUpdate, params, handleLogin } = useStores().LoginStore;
  const { email, password,phoneNumber } = params;

  const [inputEmail, setInputEmail] = useState('');
  const [inputPhone, setInputPhone] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [selectedLogin, setSelectedLogin] = useState(true);
  const [selectedRegister, setSelectedRegister] = useState(false);

  const onPress = (buttonType) => {
    if (buttonType === 'Login') {
      setSelectedLogin(true);
      setSelectedRegister(false);

      return;
    }

    setSelectedLogin(false);
    setSelectedRegister(true);
  };

  const renderPhontTextInput = () => {
    if (selectedRegister) {
      return (
        <View style={[styles.searchSection, { marginTop: 15 }]}>
          <Image style={styles.searchIcon} source={LogoIcon} />
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            placeholder="Phone"
            autoCorrect={false}
            onChangeText={(tex) => setInputPhone(tex)}
            underlineColorAndroid="transparent"
          />
        </View>
      );
    }

    return null;
  };

  const loginButtonColor = selectedLogin ? 'black' : 'gray';
  const loginTextFontSize = selectedLogin ? 21 : 16;
  const registerButtonColor = selectedRegister ? 'black' : 'gray';
  const registerFontSize = selectedRegister ? 21 : 16;

  console.log('inputEmail =>', inputEmail);
  console.log('test validate', checkInput(inputEmail, 'isInt'));

  return (
    // <KeyboardAvoidingView
    //   enabled={Platform.OS === 'ios' ? false : true}
    //   behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    //   style={{ flex: 1 }}
    // >
      <Page>
        <View style={{ flex: 1, backgroundColor: 'pink', justifyContent: 'flex-end', alignItems: 'center' }}>
          <MyText style={{ fontSize: 36, fontWeight: '500', letterSpacing: 3 }}>
            Hoja
          </MyText>
        </View>
        <View style={{ flex: 1, backgroundColor: 'yellow', justifyContent: 'center', alignItems: 'flex-end', flexDirection: 'row' }}>
          <TextButton 
            onPress={() => onPress('Login')} 
            color={loginButtonColor}
            fontSize={loginTextFontSize}
          >
            {Translate.login}
          </TextButton>
          <View style={{ width: 20 }} />
          <TextButton 
            onPress={() => onPress('Register')} 
            color={registerButtonColor}
            fontSize={registerFontSize}
          >
            {Translate.register}
          </TextButton>
        </View>
        <View style={{ flex: 3, alignItems: 'center', marginTop: 30, width: width / 2, backgroundColor: 'pink', alignSelf: 'center' }}>
        <View style={styles.searchSection}>
          {/*<Image style={styles.searchIcon} source={LogoIcon} />*/}
          <TextInput
            keyboardType='email-address'
            autoCorrect={false}
            value={email}
            style={styles.input}
            placeholder="Email"
            onChangeText={(value) => {paramsUpdate('email',value)}}
            underlineColorAndroid="transparent"
          />
        </View>

        {renderPhontTextInput()}

        <View style={[styles.searchSection, { marginTop: 15 }]}>
          {/*<Image style={styles.searchIcon} source={LogoIcon} />*/}
          <TextInput
            secureTextEntry={true}
            style={styles.input}
            value={password}
            placeholder="Password"
            autoCorrect={false}
            onChangeText={(value) => {paramsUpdate('password',value)}}
            underlineColorAndroid="transparent"
          />
        </View>

        <View style={{ marginTop: 15 }}>
          <RectangleButton
            buttonColor={'black'}
            textColor={'#fff'}
            onPress={()=>{handleLogin()}}
          >
            {Translate.login}
          </RectangleButton>
        </View>
      </View>
      {/* <View style={{...container}}>
        <View style={{marginTop: 40}}>
          <Text style={{fontSize: 30}}>Login</Text>
        </View>
        <View style={{marginVertical: 20}}>
          <Input
            label={'email'}
            value={email}
            onChangeText={(text) => paramsUpdate('email', text)}
          />
        </View>
        <View style={{marginVertical: 20}}>
          <Input
            label={'password'}
            value={password}
            onChangeText={(text) => paramsUpdate('password', text)}
          />
        </View>
        <View style={{marginVertical: 20, flexDirection: 'row'}}>
          <Button
            onPress={() => {
              Actions.replace('SignUp');
            }}>
            {' '}
            SignUp{' '}
          </Button>
          <Button
            onPress={() => {
              handleLogin();
            }}>
            {' '}
            Login{' '}
          </Button>
        </View>
      </View> */}
    </Page>
    // </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  searchSection: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: 'gray',
    paddingLeft: 10,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginLeft: 20,
  },
  input: {
    fontSize: 18,
    height: 50,
    paddingHorizontal: 10,
    width: '100%',
    backgroundColor: '#fff',
    color: '#424242',
  },
});

export default observer(Login);
