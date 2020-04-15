import React, { useEffect } from 'react';
import styles from './Home.styles';
import { View, ScrollView, TouchableOpacity, RefreshControl, Text } from 'react-native';
import Page from '@components/Page/Page';
import { useStores } from '@store';
import { observer } from 'mobx-react';
import { Button, TextButton, MyText, RectangleButton } from '@components';

import style from '@styles/globalStyle';

const Home = () => {
    const { paramsUpdate, params, handleSignOut } = useStores()['LoginStore'];
    return (
        <Page>
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
