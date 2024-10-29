// app/layout.tsx
import 'antd/dist/reset.css'; // Importa os estilos do Ant Design
import './globals.css'; // Importa seus estilos globais
import { Inter } from 'next/font/google';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'FinApp',
  description: 'Aplicativo de Controle Financeiro',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  );
}