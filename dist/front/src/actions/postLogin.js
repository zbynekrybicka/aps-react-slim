import axios from 'axios';
import { postLoginSuccess, postLoginError, showPreloader, hidePreloader } from '../slice';
import { store } from '../store';
import { API_URL } from '../config';

const postLogin = () => dispatch => {
    dispatch(showPreloader())
    axios.post(API_URL + '/login',
            store.getState().data.loginForm, {  }
)
        .then(response => {
            dispatch(hidePreloader())
            dispatch(postLoginSuccess(response.data))
        }).catch(error => {
            dispatch(hidePreloader())
            dispatch(postLoginError())
        })
}

export default postLogin;