import React, {useEffect} from 'react';
import styles from './Home.styles';
import {View, ScrollView, TouchableOpacity, RefreshControl} from 'react-native';
import {Page, Header, Card} from '@components';
import {useStores} from '@store';
import {observer} from 'mobx-react';
import dayjs from 'dayjs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {BorderButton, Text} from '../../components';
import SiteBox from '@container/SitePoint/components/SiteBox/SiteBox';
import AnnouncementDetailModal from './components/AnnouncementDetailModal';
import DefaultSitePointModal from './components/DefaultSitePointModal';
import style from '@styles/globalStyle';
import AddPackageModal from '@container/ReceiptInquire/components/AddPackageModal/AddPackageModal';
const {headerStyle} = style;

const Home = () => {
  const {
    HomeStore,
    SitePointStore,
    InitStore,
    AnnouncementDetailModalStore,
    DefaultSitePointModalStore,
  } = useStores();
  const {personalMessageList, newsList, isFetching} = HomeStore;
  const {defaultWarehouse, warehouse} = InitStore;
  const {
    openModal,
    assignData,
    currentType,
    updateData,
  } = AnnouncementDetailModalStore;

  useEffect(() => {
    InitStore.init();
    HomeStore.init();
    SitePointStore.init();
  }, []);

  const displayList =
    currentType === 'announcement' ? newsList : personalMessageList;

  return (
    <Page>
      <Header nav />
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={isFetching}
            onRefresh={() => {
              HomeStore.init();
            }}
          />
        }>
        <Card>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              justifyContent: 'space-between',
              paddingHorizontal: 10,
            }}>
            <TouchableOpacity
              onPress={() => {
                updateData('currentType', 'announcement');
              }}>
              <Text style={headerStyle}>最新公告</Text>
            </TouchableOpacity>
            <View
              style={{
                borderLeftWidth: 2,
                borderLeftColor: '#D7D7D7',
              }}
            />
            <TouchableOpacity
              onPress={() => {
                updateData('currentType', 'personalData');
              }}>
              <Text style={headerStyle}>個人消息</Text>
            </TouchableOpacity>
          </View>
          <View>
            {displayList.map((item, index) => {
              const {title, content, lastupdated, type} = item;
              return (
                <TouchableOpacity
                  key={`announcement_${index}`}
                  onPress={() => {
                    assignData({
                      title,
                      content,
                      type,
                      time: dayjs(lastupdated).format('YYYY/MM/DD'),
                    });
                    openModal();
                  }}>
                  <View style={styles.container}>
                    <View>
                      <Text
                        style={{
                          fontSize: 14,
                          color: '#787878',
                        }}>
                        {dayjs(lastupdated).format('YYYY/MM/DD')}
                      </Text>
                      <Text style={{fontSize: 16, color: '#787878'}}>
                        {title}
                      </Text>
                    </View>
                    <Icon name={'angle-right'} size={16} />
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </Card>
        <Card>
          {warehouse.map((item) => {
            const {_id} = item;
            if (_id === defaultWarehouse) {
              return <SiteBox key={`SiteBox${_id}`} {...item} />;
            }
          })}
        </Card>
        <BorderButton
          style={{
            marginHorizontal: 30,
            marginTop: 50,
          }}
          text={'設定預設站點'}
          onPress={() => {
            DefaultSitePointModalStore.openModal();
          }}
        />
        <AnnouncementDetailModal />
        <DefaultSitePointModal />
        <AddPackageModal />
      </ScrollView>
    </Page>
  );
};

export default observer(Home);
