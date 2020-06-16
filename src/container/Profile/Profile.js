import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { CircleButton } from '@components';
import Page from '@components/Page/Page';
import { observer } from 'mobx-react';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

const Profile = () => {
    return (
        <Page>
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => {
                        Actions.push('MenuList');
                    }}>
                    <Text style={{ fontSize: 20, marginVertical: 20 }}>
                        菜單
                    </Text>
                </TouchableOpacity>
                <CircleButton>
                    <View />
                </CircleButton>
                <View style={{ marginVertical: 20 }}>
                    <Text style={styles.descriptionStyle}>姓名</Text>
                    <Text style={styles.descriptionStyle}>用戶名稱</Text>
                    <Text style={styles.descriptionStyle}>網站</Text>
                    <Text style={styles.descriptionStyle}>個人簡介</Text>
                </View>
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
