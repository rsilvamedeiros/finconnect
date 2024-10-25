import { Layout, Menu } from 'antd';
import { UserOutlined, DashboardOutlined, FileTextOutlined } from '@ant-design/icons';
import Link from 'next/link';
import React, { ReactNode } from 'react';

const { Header, Content, Sider } = Layout;

interface LayoutComponentProps {
  children: ReactNode;
}

const LayoutComponent: React.FC<LayoutComponentProps> = ({ children }) => {
  return (
    <Layout className="min-h-screen">
      <Sider collapsible>
        <div className="logo p-4 text-white text-center text-2xl">FinApp</div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            <Link href="/">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<FileTextOutlined />}>
            <Link href="/reports">Relatórios</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<UserOutlined />}>
            <Link href="/profile">Perfil</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header className="bg-white p-4 shadow-md">Header - Controle Financeiro</Header>
        <Content className="m-4">{children}</Content>
      </Layout>
    </Layout>
  );
};

export default LayoutComponent;