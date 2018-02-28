const store = {
    state: {
        clientId: "",
        user: {
            name: "",
            pic: "",
            login: false
        }
    },
    mutations: {
        setClientId(state, strClientId) {
            state.clientId = strClientId;
        },
        setUser(state, oUser) {
            state.user = oUser;
        }
    }
};

export default store;