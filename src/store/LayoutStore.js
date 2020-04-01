import {action, extendObservable} from 'mobx';
import storeAction from '@store/storeAction';

const initState = {
  menuVisible: false,
};

class LayoutStore extends storeAction {
  constructor() {
    super();
    this.initState = initState;
    extendObservable(this, initState);
  }

  @action onChangeMenu = async (e) => {
    this.updateData('menuVisible', !this.menuVisible);
  };
}

export default new LayoutStore();
