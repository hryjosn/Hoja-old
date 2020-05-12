import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Page from '@components/Page/Page';
import { observer } from 'mobx-react';
import { useStores } from '@store/store';
import { Actions } from 'react-native-router-flux';


const Profile = () => {

    return (
        <Page>
            <View style={styles.container}>
                <View style={styles.contentStyle}>
                    <Text style={styles.headerStyle}>編輯個人資料</Text>
                    <TouchableOpacity onPress={() => {
                        Actions.pop();
                    }}>
                        <Text style={{ fontSize: 20, marginVertical: 20 }}>返回</Text>
                    </TouchableOpacity>
                    <View style={{ marginVertical: 20 }}>
                        <Text style={styles.descriptionStyle}>姓名</Text>
                        <Text style={styles.descriptionStyle}>用戶名稱</Text>
                        <Text style={styles.descriptionStyle}>網站</Text>
                        <Text style={styles.descriptionStyle}>個人簡介</Text>
                    </View>
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
