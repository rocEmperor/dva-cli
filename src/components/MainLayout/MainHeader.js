import React from 'react';
import { Layout, Icon, Dropdown, Menu, Modal, Form, Input, Button } from 'antd';
import './MainLayout.css';
import { connect } from 'dva';
const FormItem = Form.Item;
const { Header } = Layout;

function MainHeader(props) {
  let { dispatch, form, visible } = props;
  const { getFieldDecorator } = form;

  function confirm() {
    Modal.confirm({
      title: '确认退出该账号？',
      okText: '确定',
      cancelText: '取消',
      onOk() {
        window.sessionStorage.removeItem('password_time_stamp');
        dispatch({
          type: 'MainLayout/loginOut',
          payload: {

          }
        });
      }
    });
  }
  function showModal(){
    dispatch({
      type: 'MainLayout/concat',
      payload: {
        visible: true
      }
    });
  }
  function hideModal(){
    props.form.resetFields();
    dispatch({
      type: 'MainLayout/concat',
      payload: {
        visible: false,
      }
    });
  }
  function handleSubmit(e){
    e.preventDefault();
    props.form.validateFields(['password', 'rePasswd','old_password'], (err, values) => {
      if (err) {
        return;
      }
      let param = form.getFieldsValue(['password', 'old_password']);
      dispatch({
        type: 'MainLayout/changePassword',
        payload: param
      })
    })
  }
  function checkPass2(rule, value, callback) {
    const {
      getFieldValue
    } = form;
    if (value && value !== getFieldValue('password')) {
      callback('两次输入密码不一致！');
    } else {
      callback();
    }
  }
  const menu = (
    <Menu>
      <Menu.Item>
        <a onClick={confirm}>退出登录</a>
      </Menu.Item>
      <Menu.Item>
        <a onClick={showModal.bind(this)}>修改密码</a>
      </Menu.Item>
    </Menu>
  )

  return (
    <Header className="header">
      <span className="fontLogo">XXXX</span>
      <Dropdown overlay={menu}>
        <div className="userInfo">
          欢迎你
          <Icon type="down" className="ml1 fz12" />
        </div>
      </Dropdown>
      <div className="versionButton">
      </div>
      <Modal title="修改密码" visible={visible} onCancel={hideModal.bind(this)} footer={false}>
        <Form horizontal>
          <FormItem>
            {getFieldDecorator('old_password', { rules: [{ required: true, message: '请填写原密码' }] })(<Input type="password" placeholder="请填写原密码" />)}
          </FormItem>
          <FormItem>
            {getFieldDecorator('password', { rules: [{ required: true, pattern: /^(?=.*\d)(?=.*[a-zA-Z]).{6,20}$/, whitespace: true, message: '密码格式为6~20位英文字母+数字' }] })(
              <Input type="password" placeholder="请输入6-20位新密码" autoComplete="off" onContextMenu={false} onPaste={false} onCopy={false} onCut={false} />
            )}
          </FormItem>
          <FormItem>
            {getFieldDecorator('rePasswd', { rules: [{ required: true, message: '再次输入新密码' }, { validator: checkPass2.bind(this), }] })(
              <Input type="password" placeholder="请再次输入新密码" autoComplete="off" onContextMenu={false} onPaste={false} onCopy={false} onCut={false} />
            )}
          </FormItem>
          <Button type="primary" className="bigSubmitBtn w100" onClick={handleSubmit.bind(this)}>提交</Button>
        </Form>
      </Modal>
    </Header>
  );
}
function mapStateToProps(state) {
  return { ...state.MainLayout };
}
export default connect(mapStateToProps)(Form.create()(MainHeader));
