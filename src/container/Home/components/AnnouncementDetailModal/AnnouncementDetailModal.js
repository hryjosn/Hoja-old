import React from 'react';
import {View, StyleSheet, Modal, ScrollView, Image} from 'react-native';
import {useStores} from '@store';
import {Page, Header, Text} from '@components';
import {observer} from 'mobx-react';
import {logo} from '@image';
import style from '@styles/globalStyle';
const {headerStyle, container, descriptionStyle} = style;

const Separator = () => {
  return <View style={styles.separator} />;
};

const AnnouncementDetailModal = () => {
  const {
    visible,
    reset,
    title,
    content,
    time,
    currentType,
  } = useStores().AnnouncementDetailModalStore;

  return (
    <Modal animationType="slide" transparent={false} visible={visible}>
      <Page isModal>
        <Header
          headerText={currentType === 'announcement' ? '最新公告' : '個人消息'}
          backFunction={reset}
        />
        <ScrollView>
          <View style={container}>
            <Text style={styles.headerStyle}>
              {' '}
              {currentType === 'announcement' ? '全體訊息' : '個人訊息'}{' '}
            </Text>
            <Text style={headerStyle}> {title} </Text>
            <Text style={descriptionStyle}> {content} </Text>
            <Text style={{...descriptionStyle, textAlign: 'right'}}>
              {' '}
              {time}{' '}
            </Text>
          </View>
          <Separator />
          <View style={{alignItems: 'center'}}>
            <Image source={logo} style={{height: 30, width: 30}} />
          </View>
        </ScrollView>
      </Page>
    </Modal>
  );
};

export default observer(AnnouncementDetailModal);
const styles = StyleSheet.create({
  headerStyle: {
    fontSize: 15,
    color: 'red',
    backgroundColor: '#fad0c3',
    overflow: 'hidden',
    width: 80,
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 3,
    marginBottom: 20,
  },
  timeStyle: {
    color: 'gray',
    textAlign: 'right',
  },
});
