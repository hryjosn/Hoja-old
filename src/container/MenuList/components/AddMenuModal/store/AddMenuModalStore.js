import {action, extendObservable} from 'mobx';
import storeAction from '@store/storeAction';

const initState = {
  visible: false,
  params: {
  },
};

class AddMenuModalStore extends storeAction {
  constructor() {
    super();
    this.initState = initState;
    extendObservable(this, initState);
  }
}

export default new AddMenuModalStore();
