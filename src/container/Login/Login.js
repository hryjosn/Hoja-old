import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Page, Input,Button } from '@components';
import { observer } from 'mobx-react';
import { useStores } from '@store';
import style from '@styles/globalStyle';
import { Actions } from 'react-native-router-flux';

const { container } = style;

const Login = () => {
    const { paramsUpdate, params,handleLogin } = useStores()['LoginStore'];
    const { email, password } = params;
    return (
        <Page>
            <View style={{ ...container }}>
                <View style={{ marginTop: 40 }}>
                    <Text style={{ fontSize: 30 }}>Login</Text>
                </View>
                <View style={{ marginVertical: 20 }}>
                    <Input label={'email'}
                           value={email}
                           onChangeText={text => {
                               paramsUpdate('email', text);
                           }}/>
                </View>
                <View style={{ marginVertical: 20 }}>
                    <Input label={'password'}
                           value={password}
                           onChangeText={text => {
                               paramsUpdate('password', text);
                           }}/>
                </View>
                <View style={{ marginVertical: 20,flexDirection:"row" }}>
                    <Button onPress={()=>{Actions.replace('SignUp')}}> SignUp </Button>
                    <Button onPress={()=>{handleLogin()}}> Login </Button>
                </View>
            </View>
        </Page>
    );
};
export default observer(Login);
// const styles = StyleSheet.create({});
