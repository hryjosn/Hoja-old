import React, { useEffect } from 'react';
import styles from './Home.styles';
import { View, ScrollView, TouchableOpacity, RefreshControl, Text } from 'react-native';
import Page from '@components/Page/Page';
import { useStores } from '@store';
import { observer } from 'mobx-react';
import { Button, TextButton, MyText, RectangleButton } from '@components';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

const Home = () => {
    const { paramsUpdate, params, handleSignOut } = useStores()['LoginStore'];
    return (
        <Page>
            <Icon name={'user-o'} size={16} />
            <TouchableOpacity onPress={() => {
                Actions.push('Profile');
            }}>
                <Text style={{ fontSize: 20, marginVertical: 20 }}>編輯個人資料</Text>
            </TouchableOpacity>
            <RectangleButton buttonColor={"black"} textColor={"white"} onPress={() => {
                handleSignOut();
            }}
            >
                登出
            </RectangleButton>
        </Page>
    );
};

export default observer(Home);
