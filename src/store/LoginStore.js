import { action, extendObservable } from 'mobx';
import storeAction from '@store/storeAction';
import { Actions } from 'react-native-router-flux';
import { callLoginUser } from '@api';
import AsyncStorage from '@react-native-community/async-storage';

const initState = {
    isFetching: false,
    userName: '',
    member_account: '',
    userId: '',
    valid: false,
    sessionToken: null,
    login_flag: false,
    avatar: '',
    userAcc:'',
    params: {
        email: '',
        password: '',
        phoneNumber: '',
    },
};

class LoginStore extends storeAction {
    constructor() {
        super();
        this.initState = initState;
        extendObservable(this, initState);
    }
    @action handleLogin = async () => {
        const {  password } = this.params;
        const postData ={password}
        if(this.userAcc.indexOf('@')!==1){
            postData.email=this.userAcc;
        }else {
            postData.phoneNumber=this.userAcc;
        }
        try {
            const res = await callLoginUser(postData);
            if (res) {
                const { token } = res;
                if (token) {
                    this.assignData({ token });
                    await AsyncStorage.setItem('token', token);
                }
                Actions.replace('Main');
            } else {
                alert('登入失敗');
            }
        } catch (e) {
            console.log('error:', e.response);
        }
    };
    @action handleSignOut = async () => {
        try {
            const asyncStorageKeys = await AsyncStorage.getAllKeys();
            if (asyncStorageKeys.length > 0) {
                AsyncStorage.clear();
            }
            Actions.replace('Auth');
        } catch (e) {
            alert('登出失敗:', e);
        }
    };
}

export default new LoginStore();
