import {action, extendObservable} from 'mobx';
import storeAction from '@store/storeAction';
import {callLoginUser} from '@api';
import AsyncStorage from '@react-native-community/async-storage';
import {Actions} from 'react-native-router-flux';

const initState = {
  isFetching: false,
  userName: '',
  member_account: '',
  userId: '',
  valid: false,
  sessionToken: null,
  login_flag: false,
  avatar: '',
  params: {
    email: '',
    password: '',
  },
};

class LoginStore extends storeAction {
  constructor() {
    super();
    extendObservable(this, initState);
  }

  @action handleLogin = async (e) => {
    const postData = {...this.params};
    try {
      const res = await callLoginUser(postData);
      if (res.status === 200) {
        const {customer, token} = res.data.data;
        const {name, _id} = customer;
        this.assignData({token, name, id: _id});
        await AsyncStorage.setItem('token', token);
        await AsyncStorage.setItem('id', _id);
        await AsyncStorage.setItem('name', name);
        Actions.replace('Main');
      } else {
        alert('登入失敗');
      }
      this.reset();
    } catch (e) {
      console.log('Error', e.response.data.message);
      alert(e.response?.data?.message ?? '登入失敗');
      return false;
    }
  };
}

export default new LoginStore();
