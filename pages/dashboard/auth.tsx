import LoginForm from '@/components/auth/LoginForm';
import RegisterForm from '@/components/auth/RegisterForm';
import { Tabs } from 'antd';
import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

const AuthPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Dashboard / auth</title>
      </Head>
      <main style={{ width: 400, margin: '50px auto' }}>
        <Tabs
          items={[
            {
              label: 'Войти',
              key: '1',
              children: <LoginForm />,
            },
            {
              label: 'Регистрация',
              key: '2',
              children: <RegisterForm />,
            },
          ]}
        />
      </main>
    </>
  );
};

export default AuthPage;
