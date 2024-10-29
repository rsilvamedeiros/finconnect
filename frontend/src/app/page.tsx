// app/page.tsx
import ClientLayout from './components/ClientLayout';

export default function Dashboard() {
  return (
    <ClientLayout>
      <div className="bg-white p-6 shadow rounded">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <p>Bem-vindo ao painel de controle financeiro.</p>
      </div>
    </ClientLayout>
  );
}
