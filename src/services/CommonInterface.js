import request from '../utils/request';

const commonInterface = {

  // 系统接口
  login: (parameter) => {
    const data = JSON.stringify(parameter);
    return request('/property/user/login', data);
  },
  loginOut: (parameter) => {
    const data = JSON.stringify(parameter);
    return request('/property/user/login-out', data);
  },

};
export default commonInterface;
