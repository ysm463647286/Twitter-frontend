import { useState } from 'react';
import { 
  Button, Input, Form, Dialog
} from 'antd-mobile';
import { loginService } from '../../services/login';
import './index.css';

const initialValues = {
  username: '阿皮',
  password: '12345'
};

const Login= () => {
  const [form] = Form.useForm();

  const onSubmit = async () => {
    const values = form.getFieldsValue()
    const res = await loginService(values.username, values.password);
    if (res && res.length > 0) {
      Dialog.alert({
        content: 'Logged in successfully ！',
      });
      return;
    }
    Dialog.alert({
      content: "Wrong username or password.",
    });
  }

  return (
    <div className="login">
        <Form 
          form = {form}
          layout='horizontal' mode='card' initialValues={initialValues}
          footer={
            <Button block color='primary' onClick={onSubmit} size='large'>
              Log in
            </Button>
          }
        >
          <Form.Item label='Username' name='username'>
            <Input placeholder='Please enter username' clearable/>
          </Form.Item>
          <Form.Item label='Password' name='password'>
            <Input placeholder='Please enter password' clearable type='password' />
          </Form.Item>
        </Form>
    </div>
  );
}

export default Login;
