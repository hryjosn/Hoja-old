import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { CircleButton, RectangleButton } from '@components';
import { useStores } from '@store';
import Page from '@components/Page/Page';
import { observer } from 'mobx-react';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

const Profile = () => {
    const { paramsUpdate, params, handleSignOut } = useStores()['LoginStore'];

    return (
        <Page>
            <View style={styles.container}>
                <CircleButton>

                </CircleButton>
                <TouchableOpacity
                    onPress={() => {
                        Actions.push('Menu');
                    }}>
                    <Text style={{ fontSize: 20, marginVertical: 20 }}>
                        我的餐廳
                    </Text>
                </TouchableOpacity>
                <View style={{ marginVertical: 20 }}>
                    <Text style={styles.descriptionStyle}>姓名</Text>
                    <Text style={styles.descriptionStyle}>用戶名稱</Text>
                    <Text style={styles.descriptionStyle}>網站</Text>
                    <Text style={styles.descriptionStyle}>個人簡介</Text>
                </View>
                <TouchableOpacity
                    onPress={() => {
                        Actions.push('Profile');
                    }}>
                    <Icon name={'user-o'} size={35} />
                </TouchableOpacity>
                <RectangleButton
                    buttonColor={'black'}
                    textColor={'white'}
                    onPress={() => {
                        handleSignOut();
                    }}>
                    登出
                </RectangleButton>
            </View>
        </Page>
    );
};

export default observer(Profile);

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 30,
        marginTop: 30,
        flex: 1,
    },
    headerStyle: {
        color: '#555555',
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    contentStyle: {
        borderWidth: 2,
        marginTop: 15,
        marginBottom: 5,
        padding: 20,
        borderTopColor: 'gray',
        borderBottomColor: 'gray',
        borderRightColor: 'gray',
        borderLeftColor: 'gray',
    },
    descriptionStyle: {
        fontSize: 16,
        paddingVertical: 5,
        color: '#7F7F7F',
    },
    rowStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
