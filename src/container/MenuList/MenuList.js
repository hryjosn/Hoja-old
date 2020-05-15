import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, ScrollView } from 'react-native';
import Page from '@components/Page/Page';
import { observer } from 'mobx-react';
import { useStores } from '@store/store';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

const MenuList = () => {
    // position: 'absolute',
    // left: 0, top: 20,
    return (
        <Page>
            <ScrollView>
                <View style={{ backgroundColor: "gray", padding: 15, height: 300 }}>
                </View>
                <View style={{ position: "absolute", top: "2%", left: "5%" }}>
                    <TouchableOpacity onPress={() => {
                        Actions.pop();
                    }}>
                        <Text style={{ fontSize: 20, color: "white" }}>返回</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ position: "absolute", top: "2%", left: "80%" }}>
                    <TouchableOpacity onPress={() => {

                    }}>
                        <Text style={{ fontSize: 20, color: "white" }}>新增菜單</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    ...styles.signboardStyle,
                    width: "85%",
                    borderRadius: 15, backgroundColor: "white",
                    position: "absolute", top: "20%", left: "7.5%",
                }}>
                    <View style={{
                        paddingTop: 15, paddingHorizontal: 15, alignItems: "flex-end"
                    }}>
                        < TouchableOpacity onPress={() => {
                            
                        }}>
                            <Icon name={'edit'} size={20} />
                        </TouchableOpacity>
                    </View>
                    <Text style={{ fontSize: 20, alignSelf: "center" }}>日日好吃</Text>
                    <Text style={{ ...styles.descriptionStyle, marginBottom: 20, alignSelf: "center" }}>
                        可配送日 : 24h後，星期三 | 可外送
                        </Text>
                </View>
                <View style={styles.container}>
                    <View style={{ ...styles.rowStyle, marginTop: 50, marginBottom: 10 }}>
                        <View style={{ ...styles.signboardStyle, height: 100, width: 100 }}>
                            <Text style={styles.descriptionStyle}>圖片</Text>
                        </View>
                        <View style={{ alignSelf: "center" }}>
                            <Text style={{ fontSize: 20, textAlign: "left" }}>義式香雞藜麥飯</Text>
                            <Text style={styles.descriptionStyle}>Short description</Text>
                        </View>
                        <View style={{ alignSelf: "center" }}>
                            <Text style={styles.descriptionStyle}>$200</Text>
                        </View>
                    </View>
                    <View style={{ ...styles.rowStyle, marginVertical: 10 }}>
                        <View style={{ ...styles.signboardStyle, height: 100, width: 100 }}>
                            <Text style={styles.descriptionStyle}>圖片</Text>
                        </View>
                        <View style={{ alignSelf: "center" }}>
                            <Text style={{ fontSize: 20 }}>義式香雞藜麥飯</Text>
                            <Text style={styles.descriptionStyle}>Short description</Text>
                        </View>
                        <View style={{ alignSelf: "center" }}>
                            <Text style={styles.descriptionStyle}>$200</Text>
                        </View>
                    </View>
                    <View style={{ ...styles.rowStyle, marginVertical: 10 }}>
                        <View style={{ ...styles.signboardStyle, height: 100, width: 100 }}>
                            <Text style={styles.descriptionStyle}>圖片</Text>
                        </View>
                        <View style={{ alignSelf: "center" }}>
                            <Text style={{ fontSize: 20 }}>義式香雞藜麥飯</Text>
                            <Text style={styles.descriptionStyle}>Short description</Text>
                        </View>
                        <View style={{ alignSelf: "center" }}>
                            <Text style={styles.descriptionStyle}>$200</Text>
                        </View>
                    </View>
                    <View style={{ ...styles.rowStyle, marginVertical: 10 }}>
                        <View style={{ ...styles.signboardStyle, height: 100, width: 100 }}>
                            <Text style={styles.descriptionStyle}>圖片</Text>
                        </View>
                        <View style={{ alignSelf: "center" }}>
                            <Text style={{ fontSize: 20 }}>義式香雞藜麥飯</Text>
                            <Text style={styles.descriptionStyle}>Short description</Text>
                        </View>
                        <View style={{ alignSelf: "center" }}>
                            <Text style={styles.descriptionStyle}>$200</Text>
                        </View>
                    </View>
                    <View style={{ ...styles.rowStyle, marginVertical: 10 }}>
                        <View style={{ ...styles.signboardStyle, height: 100, width: 100 }}>
                            <Text style={styles.descriptionStyle}>圖片</Text>
                        </View>
                        <View style={{ alignSelf: "center" }}>
                            <Text style={{ fontSize: 20 }}>義式香雞藜麥飯</Text>
                            <Text style={styles.descriptionStyle}>Short description</Text>
                        </View>
                        <View style={{ alignSelf: "center" }}>
                            <Text style={styles.descriptionStyle}>$200</Text>
                        </View>
                    </View>
                    <View style={{ ...styles.rowStyle, marginVertical: 10 }}>
                        <View style={{ ...styles.signboardStyle, height: 100, width: 100 }}>
                            <Text style={styles.descriptionStyle}>圖片</Text>
                        </View>
                        <View style={{ alignSelf: "center" }}>
                            <Text style={{ fontSize: 20 }}>義式香雞藜麥飯</Text>
                            <Text style={styles.descriptionStyle}>Short description</Text>
                        </View>
                        <View style={{ alignSelf: "center" }}>
                            <Text style={styles.descriptionStyle}>$200</Text>
                        </View>
                    </View>
                </View>
            </ScrollView >
            <View style={{ backgroundColor: "gray", padding: 15 }}>
                <View style={{ flexDirection: "row", justifyContent: 'flex-end' }}>
                    <View style={{ flex: 3 }}>
                        <Text style={{ ...styles.descriptionStyle, color: "white", textAlign: "right" }}>檢視購物車</Text>
                    </View>
                    <View style={{ flex: 2 }}>
                        <Text style={{ ...styles.descriptionStyle, color: "white", flex: 3, textAlign: "right" }}>4項餐點 $560</Text>
                    </View>
                </View>
            </View>
        </Page >

    );

};

export default observer(MenuList);

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
    signboardStyle: {
        borderColor: "gray",
        borderWidth: 2,
    },
});
