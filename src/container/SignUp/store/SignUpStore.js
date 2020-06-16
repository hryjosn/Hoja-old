import { action, extendObservable } from 'mobx';
import storeAction from '@store/storeAction';
import auth from '@react-native-firebase/auth';

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

class SignUpStore extends storeAction {
    constructor() {
        super();
        this.initState = initState;
        extendObservable(this, initState);
    }

    @action handleSignUp = async () => {
        const { email, password } = this.params;
        try {
            await auth().createUserWithEmailAndPassword(email, password);
            alert('User account created & signed in!');
            Actions.replace('Auth');
            this.reset();
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                console.log('That email address is already in use!');
            }
            if (error.code === 'auth/invalid-email') {
                console.log('That email address is invalid!');
            }
            console.error(error);
        }
    };
}

export default new SignUpStore();
