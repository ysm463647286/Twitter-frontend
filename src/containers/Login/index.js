import { useState } from 'react';
import { Button, Input, Form, Dialog} from 'antd-mobile';
import './index.css';
const initialValues = {
  username: '阿皮',
  password: '12345'
};
const Login= () => {
  const [form] = Form.useForm()
  const onSubmit = () => {
    const values = form.getFieldsValue()
    Dialog.alert({
      content: <pre>{JSON.stringify(values, null, 2)}</pre>,
    })
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
