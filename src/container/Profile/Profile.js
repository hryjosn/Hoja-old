import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Page, Header, BorderButton, Text, Button } from '@components';
import { observer } from 'mobx-react';
import { useStores } from '@store/store';

import style from '@styles/globalStyle';
import { Actions } from 'react-native-router-flux';

const { container, headerStyle, descriptionStyle } = style;

const Profile = () => {

    const { LoginStore } = useStores();
    const { handleSignOut } = LoginStore;
    return (
        <Page>
            <Text style={{ fontSize: 26 }}> Profile</Text>
            <View style={{ marginVertical: 20, flexDirection: 'row' }}>
                <Button onPress={() => {
                    handleSignOut()
                }}> SignOut </Button>
            </View>

        </Page>
    );
};

export default observer(Profile);

const styles = StyleSheet.create({});

