import LayoutComponent from './layout';

const Reports: React.FC = () => {
  return (
    <LayoutComponent>
      <div className="bg-white p-6 shadow rounded">
        <h1 className="text-2xl font-bold mb-4">Relatórios Financeiros</h1>
        <p>Aqui você pode gerar e visualizar relatórios.</p>
      </div>
    </LayoutComponent>
  );
};

export default Reports;