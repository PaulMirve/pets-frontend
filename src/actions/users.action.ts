import { Dispatch } from 'redux';
import api from '../api/api';
import history from '../history';
import User from '../interfaces/User';
import { postUser as postuser, login as _login } from '../reducers/users.reducers';
export const postUser = (user: User) => {
    return async (dispatch: Dispatch) => {
        user.role = "USER_ROLE";
        const response = await api.post('/api/users', user);
        dispatch(postuser(response.data));
        history.push('/');
    }
}

export const login = (usernameOrEmail: string, password: string) => {
    return async (dispatch: Dispatch) => {
        const response = await api.post('/api/auth/login', { username: usernameOrEmail, password });
        dispatch(_login(response.data.user));
        window.localStorage.setItem('user', response.data.token);
        history.push('/');
    }
}