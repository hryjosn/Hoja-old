import React, {useEffect} from 'react';
import styles from './Home.styles';
import {View, ScrollView, TouchableOpacity, RefreshControl,Text} from 'react-native';
import Page from '@components/Page/Page';
import {useStores} from '@store';
import {observer} from 'mobx-react';

import style from '@styles/globalStyle';

const Home = () => {
  return (
      <Page>
          <Text style={{fontSize:26}}> asdasdasdasdas</Text>
      </Page>
  );
};

export default observer(Home);
