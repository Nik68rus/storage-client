import React from 'react';
import styles from './Auth.module.scss';
import { Button, Form, Input } from 'antd';

interface ILoginData {
  email: string;
  password: string;
}

const LoginForm = () => {
  const onSubmit = (values: ILoginData) => {
    console.log(values);
  };

  return (
    <div className={styles.formBlock}>
      <Form name="basic" labelCol={{ span: 8 }} onFinish={onSubmit}>
        <Form.Item
          label="E-mail"
          name="email"
          rules={[{ required: true, message: 'Введите почту!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Пароль"
          name="password"
          rules={[{ required: true, message: 'Введите пароль!' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Войти
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;