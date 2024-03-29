import axios from 'axios';
import {ActionCreator} from './store/action/action-creator';
import {ErrorStatus} from './constants';

export const createAPI = (dispatch, login) => {
  const api = axios.create({
    baseURL: `https://htmlacademy-react-2.appspot.com/six-cities`,
    timeout: 1000 * 5,
    withCredentials: true,
  });

  const onSuccess = (response) => response;
  const onFail = (err) => {
    if (err.response.status === ErrorStatus.NOT_AUTHORIZED) {
      dispatch(ActionCreator.requireAuthorization(true));
      login();
    }
    return err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
