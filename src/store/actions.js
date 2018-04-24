const LOGIN = 'LOGIN';
// const LOGIN_OUT = 'LOGIN_OUT';

export const login = (isLogin) => {
    return {
        type: LOGIN,
        isLogin
    }
}
