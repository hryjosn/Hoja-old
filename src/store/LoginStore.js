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
cd
    @action handleLogin = async () => {
        const { email, password } = this.params;
        const res = await callLoginUser({ email, password });
        if (res) {
            const { token } = res;
            if(token){
                this.assignData({ token });
                await AsyncStorage.setItem('token', token);
            }
            Actions.replace("Main")

        } else {
            alert("登入失敗")
        }
    };
    @action handleSignOut = async () => {
        try {
            const asyncStorageKeys = await AsyncStorage.getAllKeys();
            if (asyncStorageKeys.length > 0) {
                AsyncStorage.clear();
            }
            Actions.replace("Auth");
        } catch(e) {
            alert("登出失敗:",e)
        }
    };
}

export default new LoginStore();
