import {action, extendObservable} from 'mobx';
import storeAction from '@store/storeAction';
import {
  callGetExchangeRate,
  callGetPersonalMessage,
  callGetPackageCount,
  callGetNews,
} from '@api';
import {Actions} from 'react-native-router-flux';

const initState = {
  isFetching: false,
  visible: false,
  title: '',
  content: '',
  currentType: 'announcement',
  time: '',
};

class AnnouncementDetailModalStore extends storeAction {
  constructor() {
    super();
    this.initState = initState;
    extendObservable(this, initState);
  }
}

export default new AnnouncementDetailModalStore();
