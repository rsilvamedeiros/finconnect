import { Form, Input, Button } from 'antd';
import { useRouter } from 'next/router';
import React from 'react';

// Definindo a interface para os valores do formulário
interface LoginFormValues {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const router = useRouter();

  const onFinish = (values: LoginFormValues) => {
    console.log('Success:', values);
    router.push('/'); // Redireciona para o Dashboard após login
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 shadow-md rounded-md w-full max-w-sm">
        <h1 className="text-2xl font-bold mb-4 text-center">Login</h1>
        <Form
          name="login"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Por favor, insira seu nome de usuário!' }]}
          >
            <Input placeholder="Nome de usuário" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Por favor, insira sua senha!' }]}
          >
            <Input.Password placeholder="Senha" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              Entrar
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;