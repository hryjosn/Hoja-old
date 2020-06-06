import React, { useEffect } from 'react';
import styles from './Home.styles';
import {
  View,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
  Text,
  FlatList,
} from 'react-native';
import Page from '@components/Page/Page';
import { useStores } from '@store';
import { observer } from 'mobx-react';
import { Button, TextButton, MyText, RectangleButton } from '@components';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

const Home = () => {
  const { paramsUpdate, params, handleSignOut } = useStores()['LoginStore'];
  const list = [{ name: 'Fin' }, { name: 'Jack' }, { name: 'Tom' }];
  return (
    <Page>
      <View style={styles.container}>
        <View
          style={{
            ...styles.rowStyle,
            marginBottom: 20,
            marginTop: 20,
          }}>
          <View style={{ alignItems: 'flex-start' }}>
            <TouchableOpacity
              onPress={() => {
                Actions.push('Profile');
              }}>
              <Icon name={'user-o'} size={35} />
            </TouchableOpacity>
          </View>
          <View style={{ alignItems: 'flex-end' }}>
            <RectangleButton
              buttonColor={'black'}
              textColor={'white'}
              onPress={() => {
                handleSignOut();
              }}>
              登出
            </RectangleButton>
          </View>
        </View>

        <FlatList
          data={list}
          onEndReached={() => {}}
          onEndReachedThreshold={0.1}
          keyExtractor={(item, index) => `newBrokerList${index}`}
          renderItem={({ item, index }) => {
            console.log(list);
            const { name } = item;
            return (
              <View key={`newBrokerList${index}`}>
                <View style={styles.contentStyle}>
                  <Text style={{ fontSize: 20 }}>{name}</Text>
                  <View
                    style={{
                      ...styles.contentStyle,
                      height: 350,
                      width: 375,
                    }}>
                    <Text style={styles.descriptionStyle}>圖片</Text>
                  </View>
                  <Text style={styles.descriptionStyle}>
                    Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                    Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum
                    Lorem Ipsum Lorem Ipsums Lorem Ipsum Lorem Ipsum{' '}
                  </Text>
                </View>
              </View>
            );
          }}
        />
      </View>
    </Page>
  );
};

export default observer(Home);
