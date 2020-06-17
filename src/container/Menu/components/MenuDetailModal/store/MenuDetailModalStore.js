import { action, extendObservable } from 'mobx';
import storeAction from '@store/storeAction';

const initState = {
    visible: false,
    params: {
        name: '',
        price: 0,
        introduction: '',
        keyWord: [],
    },
};

class MenuDetailModalStore extends storeAction {
    constructor() {
        super();
        this.initState = initState;
        extendObservable(this, initState);
    }
}

export default new MenuDetailModalStore();
