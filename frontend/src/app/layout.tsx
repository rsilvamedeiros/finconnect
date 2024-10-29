// app/layout.tsx
import React from 'react';
import { Inter } from 'next/font/google';
import dynamic from 'next/dynamic';

const inter = Inter({ subsets: ['latin'] });

// Carrega o AntdStyleProvider apenas no cliente
const AntdStyleProvider = dynamic(() => import('./components/AntdStyleProvider'), {
  ssr: false,
});

export const metadata = {
  title: 'FinApp',
  description: 'Aplicativo de Controle Financeiro',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <AntdStyleProvider>{children}</AntdStyleProvider>
      </body>
    </html>
  );
}