import { createSlice } from '@reduxjs/toolkit';

const initialState = {"preloader":"","authToken":"","loginForm":{"username":"","password":""},"menu":"","selectedContact":"","contacts":[]};


export const counterSlice = createSlice({
    name: 'store',
    initialState,
    reducers: {
        modelChange: (state, action) => {
            eval('state.' + action.payload[0] + ' = "' + action.payload[1] + '"')
        },
        showPreloader: (state) => {
            state.preloader = true
        },
        hidePreloader: (state) => {
            state.preloader = false
        },
        postLoginSuccess: (state, action) => {
            state.authToken = action.payload.authToken
            state.user = action.payload.user
        },
        postLoginError: (state, action) => {
            state.errorMessage = "Přihlášení se nezdařilo"
        },
        menuCalendar: (state, action) => {
            state.menu = ""
        },
        menuContact: (state, action) => {
            state.contacts = action.payload
            state.menu = "contacts"
        },
        menuContactError: (state, action) => {
            state.errorMessage = "Kontakty se nepodařilo načíst"
        },
        selectContact: (state, action) => {
            state.selectedContact = action.payload
        },
        deselectContact: (state, action) => {
            state.selectedContact = ""
        },
    },
});

export const { postLoginSuccess, postLoginError, menuCalendar, menuContact, menuContactError, selectContact, deselectContact, modelChange, showPreloader, hidePreloader } = counterSlice.actions;

export default counterSlice.reducer;
