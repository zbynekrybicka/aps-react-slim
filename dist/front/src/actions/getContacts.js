import axios from 'axios';
import { menuContact, menuContactError, showPreloader, hidePreloader } from '../slice';
import { store } from '../store';
import { API_URL } from '../config';

const getContacts = () => dispatch => {
    dispatch(showPreloader())
    axios.get(API_URL + '/contacts',
            { params: store.getState().data.user, headers: { Authorization: store.getState().data.authToken}  }
)
        .then(response => {
            dispatch(hidePreloader())
            dispatch(menuContact(response.data))
        }).catch(error => {
            dispatch(hidePreloader())
            dispatch(menuContactError())
        })
}

export default getContacts;