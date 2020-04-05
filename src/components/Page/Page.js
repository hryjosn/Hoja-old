import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import { isIphoneX } from '@helpers';
import { observer } from 'mobx-react';

const Page = (props) => {
    return (
        <View style={styles.container}>
            <View style={{ height: isIphoneX() ? 30 : 0 }}></View>
            <StatusBar hidden/>
            {props.children}
        </View>
    );
};

export default observer(Page);
const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#F2F2F2',
    },
});
