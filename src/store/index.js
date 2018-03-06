const store = {
    state: {
        clientId: "",
        user: {
            name: "",
            pic: "",
            login: false
        },
        RemarkDetails: {
            cardId: undefined
        }
    },
    mutations: {
        setClientId(state, strClientId) {
            state.clientId = strClientId;
        },
        setUser(state, oUser) {
            state.user = oUser;
        },
        setCardId(state, iCardId){
            state.RemarkDetails.cardId = iCardId;
        }
    }
};

export default store;