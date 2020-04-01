import React, {useState} from 'react';
import {View, Animated, StyleSheet} from 'react-native';
import {Input, Button, Page} from '@components';
import {logo} from '@image';
import {useStores} from '@store';
import {Actions} from 'react-native-router-flux';
import {observer} from 'mobx-react';
import HyperLink from '@container/Login/component/HyperLink';
import ForgetPasswordModal from './component/ForgetPasswordModal';
import {Text} from '@components';

const Login = () => {
  const {handleLogin, email, paramsUpdate, password} = useStores().LoginStore;
  const {modalOpen} = useStores().ForgetPasswordModalStore;
  const [logoSize] = useState(new Animated.Value(150));
  const [focusing, setFocusing] = useState(false);
  const handleAnimation = () => {
    Animated.timing(logoSize, {
      toValue: focusing ? 150 : 60,
      duration: 500,
    }).start();
  };
  return (
    <Page transparent>
      <View style={focusing ? styles.focusingStyle : styles.unFocusingStyle}>
        <Animated.Image
          style={{width: logoSize, height: logoSize}}
          source={logo}
        />
        <Text style={{fontSize: 30, textAlign: 'center', marginTop: 30}}>
          運匠集運
        </Text>
      </View>
      <View style={{padding: 30}}>
        <View>
          <Input
            onFocus={() => {
              handleAnimation(logoSize);
              setFocusing(true);
            }}
            onBlur={() => {
              handleAnimation(logoSize);
              setFocusing(false);
            }}
            value={email}
            placeholder={'Email'}
            onChangeText={(text) => {
              paramsUpdate('email', text);
            }}
          />
          <Input
            onFocus={() => {
              handleAnimation(logoSize);
              setFocusing(true);
            }}
            onBlur={() => {
              handleAnimation(logoSize);
              setFocusing(false);
            }}
            value={password}
            placeholder={'密碼'}
            secureTextEntry={true}
            onChangeText={(text) => {
              paramsUpdate('password', text);
            }}
          />
        </View>
        <View style={{marginTop: 20}}>
          <Button
            onPress={() => {
              handleLogin();
            }}>
            登入
          </Button>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Text style={{fontSize: 17}}> 忘記密碼 ? </Text>
            <HyperLink
              text={'取回密碼'}
              onPress={() => {
                modalOpen();
              }}
            />
          </View>
          <View style={{flexDirection: 'row', marginTop: 10}}>
            <Text style={{fontSize: 17}}> 還沒有帳號 ? </Text>
            <HyperLink
              text={'註冊'}
              onPress={() => {
                Actions.push('Register');
              }}
            />
          </View>
        </View>
      </View>
      <ForgetPasswordModal />
    </Page>
  );
};
export default observer(Login);
const styles = StyleSheet.create({
  focusingStyle: {
    marginTop: 10,
    alignItems: 'center',
  },
  unFocusingStyle: {
    marginTop: 10,
    alignItems: 'center',
    flex: 1,
  },
});
