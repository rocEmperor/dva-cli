import commonInterface from './../services/CommonInterface';

import { routerRedux } from 'dva/router';
export default {
  namespace: 'login',
  state: {
    token: ""
  },
  reducers: {},
  effects: {
    *login({ payload }, { call, put }) {
      const {code,data} = yield call(commonInterface.login, payload);
      if (code == 20000) {
        sessionStorage.setItem('QXToken', data.token);
        sessionStorage.setItem('username', payload.username);
        sessionStorage.removeItem('current');
        sessionStorage.removeItem('openKeys');
        yield put(routerRedux.push('/indexPage'));
      }
    }
  },
  subscriptions: {},
};
