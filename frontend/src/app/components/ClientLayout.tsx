// app/components/ClientLayout.tsx
"use client";

import React, { useState } from 'react';
import { Layout, Menu, Button } from 'antd';
import {
  UserOutlined,
  DashboardOutlined,
  FileTextOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const { Header, Content, Sider } = Layout;

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  // Função para mapear a rota atual para a key do menu
  const getMenuKeyFromPath = (path: string) => {
    switch (path) {
      case '/':
        return '1';
      case '/reports':
        return '2';
      case '/profile':
        return '3';
      default:
        return '1';
    }
  };

  const selectedKey = getMenuKeyFromPath(pathname);

  // Definindo os itens do menu
  const menuItems = [
    {
      key: '1',
      icon: <DashboardOutlined />,
      label: <Link href="/">Dashboard</Link>,
    },
    {
      key: '2',
      icon: <FileTextOutlined />,
      label: <Link href="/reports">Relatórios</Link>,
    },
    {
      key: '3',
      icon: <UserOutlined />,
      label: <Link href="/profile">Perfil</Link>,
    },
  ];

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout className="min-h-screen">
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        {/* Se preferir usar o trigger padrão do Sider, remova o botão abaixo */}
        <div style={{ padding: '16px', display: 'flex', justifyContent: 'center' }}>
          <Button type="primary" onClick={toggleCollapsed}>
            {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          </Button>
        </div>
        <div className="logo p-4 text-white text-center text-2xl">FinApp</div>
        <Menu theme="dark" mode="inline" selectedKeys={[selectedKey]} items={menuItems} />
      </Sider>
      <Layout>
        <Header className="bg-white p-4 shadow-md flex items-center">
          <div className="text-xl font-bold">FinApp</div>
          {/* Você pode adicionar mais elementos no header aqui */}
        </Header>
        <Content className="m-4">{children}</Content>
      </Layout>
    </Layout>
  );
}
