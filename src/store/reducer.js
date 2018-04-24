const login = (state = { isLogin: false }, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state, ...action
            }
        default:
            return state;
    }
}
export default login;