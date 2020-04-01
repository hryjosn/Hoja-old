import React, {useEffect} from 'react';
import {View, Modal, Alert, ScrollView, RefreshControl} from 'react-native';
import {useStores} from '@store';
import {Page, Header, Text, BorderButton} from '@components';
import {observer} from 'mobx-react';
import style from '@styles/globalStyle';

const {
  container,
  headerStyle,
  descriptionStyle,
  rowStyle,
  contentStyle,
} = style;

const DefaultSitePointModal = () => {
  const {DefaultSitePointModalStore, InitStore} = useStores();
  const {
    visible,
    isFetching,
    getList,
    list,
    updateWarehouse,
    reset,
  } = DefaultSitePointModalStore;
  const receiverName = InitStore.name;
  return (
    <Modal animationType="slide" transparent={false} visible={visible}>
      <Page isModal>
        <Header headerText="預設站點" backFunction={reset} />
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={isFetching} onRefresh={getList} />
          }>
          <View style={container}>
            <Text style={headerStyle}>預設站點</Text>
            {list.map((item, index) => {
              const {name, postalCode, address, phone, _id} = item;
              return (
                <View key={`sitePointList${index}`}>
                  <View style={contentStyle}>
                    <View>
                      <Text style={descriptionStyle} />
                      <View style={rowStyle}>
                        <Text style={headerStyle}>{name}</Text>
                        <BorderButton
                          text={'選擇預設站點'}
                          onPress={() => {
                            Alert.alert(
                              '選擇預設站點',
                              '您確定選擇此站點為預設站點嗎?',
                              [
                                {
                                  text: '取消',
                                  style: 'cancel',
                                },
                                {
                                  text: '是',
                                  onPress: () => {
                                    updateWarehouse(_id);
                                  },
                                },
                              ],
                              {cancelable: false},
                            );
                          }}
                        />
                      </View>
                      <Text style={descriptionStyle}>郵遞區號</Text>
                      <Text style={{...descriptionStyle, fontSize: 20}}>
                        {postalCode}
                      </Text>
                      <Text style={descriptionStyle}>地址</Text>
                      <Text style={{...descriptionStyle, fontSize: 20}}>
                        {address}
                      </Text>
                      <Text style={descriptionStyle}>收貨人</Text>
                      <Text style={{...descriptionStyle, fontSize: 20}}>
                        {receiverName}
                      </Text>
                      <Text style={descriptionStyle}>手機號碼</Text>
                      <Text style={{...descriptionStyle, fontSize: 20}}>
                        {phone}
                      </Text>
                    </View>
                    <View />
                  </View>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </Page>
    </Modal>
  );
};
export default observer(DefaultSitePointModal);
