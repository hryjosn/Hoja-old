import {action, extendObservable} from 'mobx';
import storeAction from '@store/storeAction';
import {callGetUserInfo, callUpdateWarehouse} from '@api';
import InitStore from '@container/Init/store/InitStore';

const initState = {
  visible: false,
  isFetching: false,
  list: [],
};
const api = {
  list: callGetUserInfo,
  update: callUpdateWarehouse,
};

class DefaultSitePointModalStore extends storeAction {
  constructor() {
    super();
    this.api = api;
    this.initState = initState;
    extendObservable(this, initState);
  }

  @action openModal = async () => {
    await this.getList();
    this.updateData('visible', true);
  };
  @action getList = async () => {
    this.updateData('isFetching', true);
    const res = await this.api.list({});
    if (res?.status === 200) {
      const list = res?.data?.data?.warehouse ?? [];
      this.assignData({list});
      this.updateData('name', res?.data?.data.name);
    }
    this.updateData('isFetching', false);
  };
  @action updateWarehouse = async (id) => {
    const res = await this.api.update({defaultWarehouse: id});
    if (res?.status === 200) {
      alert('設定預定站點成功');
      this.visible = false;
      await InitStore.init();
    }
  };
}

export default new DefaultSitePointModalStore();
