import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { observer } from 'mobx-react';
import { useStores } from '@store';

import Text from '../Text';

const Header = ({ headerText, Right, backFunction, nav }) => {
    const { onChangeMenu } = useStores().LayoutStore;
    const { init } = useStores().InitStore;

    return (
        <View
            style={{
                ...styles.container,
                ...{ backgroundColor: 'black' },
            }}>
            {backFunction && (
                <TouchableOpacity
                    onPress={() => {
                        backFunction();
                    }}>
                    <View style={{ paddingLeft: 20 }}>
                        <Icon name="closecircleo" size={30} color="white" />
                    </View>
                </TouchableOpacity>
            )}
            {headerText && (
                <View style={{ justifyContent: 'center' }}>
                    <Text
                        style={{
                            color: 'white',
                            fontSize: 20,
                            fontWeight: 'bold',
                        }}>
                        {headerText}
                    </Text>
                </View>
            )}
            {Right ? <Right /> : <View style={styles.emptyBox} />}
        </View>
    );
};
export default observer(Header);

const styles = StyleSheet.create({
    emptyBox: {
        width: 45,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        alignItems: 'center',
    },
});
