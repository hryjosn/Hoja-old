import React, {useEffect} from 'react';
import styles from './Home.styles';
import {View, ScrollView, TouchableOpacity, RefreshControl,Text} from 'react-native';
import {Page, Header, Card} from '@components';
import {useStores} from '@store';
import {observer} from 'mobx-react';

import style from '@styles/globalStyle';

const Home = () => {
  return (
      <Page>
          <Text style={{fontSize:26}}> Home</Text>
      </Page>
  );
};

export default observer(Home);
