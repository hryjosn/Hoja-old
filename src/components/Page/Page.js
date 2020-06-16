import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import { isIphoneX } from '@helpers';
import { observer } from 'mobx-react';

const Page = (props) => {
    return (
        <View style={styles.container}>
            <View style={{ height: isIphoneX() ? 30 : 0 }} />
            <StatusBar hidden />
            {props.children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // height: '100%',
        // backgroundColor: '#F2F2F2',
        backgroundColor: '#fff',
    },
});

export default observer(Page);
