import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import {observer} from 'mobx-react';
import {Actions} from 'react-native-router-flux';
import AsyncStorage from '@react-native-community/async-storage';
import {logo} from '@image';
import styles from '@container/Login/Login.styles';
import {useStores} from '@store';

const Init = () => {
  const {init} = useStores().InitStore;
  useEffect(() => {
    init();
    (async function () {
      const token = await AsyncStorage.getItem('token');
      if (token) {
        Actions.replace('Main');
      } else {
        Actions.replace('Login');
      }
    })();
  }, []);
  return (
    <View style={{marginTop: 100, alignItems: 'center', height: '100%'}}>
      <Image source={logo} style={styles.logoStyle} />
    </View>
  );
};

export default observer(Init);
