import { action, extendObservable } from 'mobx';
import storeAction from '@store/storeAction';
import auth from '@react-native-firebase/auth';
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
    phone: ''
  },
};

class LoginStore extends storeAction {
    constructor() {
        super();
        this.initState = initState
        extendObservable(this, initState);
    }

    @action handleLogin = async () => {
        const { email, password } = this.params;
        try {
            await auth().signInWithEmailAndPassword(email, password);
            alert('Login successful!');
            Actions.replace('Main')
            this.reset();
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
            }
            if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
            }
            alert(error.code)
        }
    };
    @action handleSignOut = async () => {
        try {
            await auth().signOut();
            alert('User signed out!');
            Actions.replace('Auth')
            this.reset();
        } catch (error) {
            alert(error);
        }
    };
}

export default new LoginStore();
