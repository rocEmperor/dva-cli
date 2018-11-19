import { loginOut } from '../services/CommonInterface';
import { message } from 'antd';

export default {
  namespace: 'MainLayout',
  state: {

  },
  reducers: {
    concat(state, { payload }) {
      return { ...state, ...payload };
    },
  },
  effects: {
    *loginOut({ payload }, { call, put }) {
      const {code} = yield call(loginOut, payload);
      if(code == 20000){
        message.success('退出成功！');
        setTimeout(() => {
          location.href = "#/";
        },2000)
      }
    },
  },
  subscriptions: {},
};
