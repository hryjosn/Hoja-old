import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { observer } from 'mobx-react';
import { Actions } from 'react-native-router-flux';
import AsyncStorage from '@react-native-community/async-storage';
import auth from '@react-native-firebase/auth';
// import styles from '@container/Login/Login.styles';

const Init = () => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  // Handle user state changes
  const onAuthStateChanged = (user) => {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    if (!user) {
      Actions.replace('Login');
    } else {
      Actions.replace('Main');
    }
    return subscriber; // unsubscribe on unmount
  },[]);

  if (initializing) {
    return null;
  }
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
      <Text style={{ fontSize: 34 }}>Hoja</Text>
    </View>
  );
};

export default observer(Init);
