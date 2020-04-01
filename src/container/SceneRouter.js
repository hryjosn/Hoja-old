import React from 'react';
import {View, Text} from 'react-native';
import {Scene, Router, Stack} from 'react-native-router-flux';

import Icon from 'react-native-vector-icons/FontAwesome';

const HelloHoja = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30}}>Hello Hoja</Text>
    </View>
  );
};
const SceneRouter = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene key="Auth" hideNavBar initial>
          <Scene key="Init" component={HelloHoja} hideNavBar initial />
        </Scene>
      </Stack>
    </Router>
  );
};
export default SceneRouter;
