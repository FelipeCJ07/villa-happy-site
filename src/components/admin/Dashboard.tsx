import React from 'react';
import { useAuth } from '../../contexts/AuthContext';

const Dashboard: React.FC = () => {
  const { userData } = useAuth();

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h1 className="text-2xl font-bold mb-6">Painel Administrativo</h1>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Bem-vindo, {userData?.displayName || 'Usuário'}</h2>
        <div className="bg-gray-50 p-4 rounded-md">
          <p className="mb-2"><span className="font-medium">Email:</span> {userData?.email}</p>
          <p className="mb-2">
            <span className="font-medium">Função:</span> {
              userData?.role === 'admin' ? 'Administrador' : 
              userData?.role === 'editor' ? 'Editor' : 'Visualizador'
            }
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card para Gerenciar Usuários - apenas para administradores */}
        {userData?.role === 'admin' && (
          <div className="bg-villa-blue bg-opacity-10 p-6 rounded-lg border border-villa-blue">
            <h3 className="text-lg font-semibold mb-3 text-villa-blue">Gerenciar Usuários</h3>
            <p className="text-gray-600 mb-4">Adicione, edite ou remova usuários do sistema administrativo.</p>
            <a 
              href="/admin/users" 
              className="inline-block bg-villa-blue text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
            >
              Acessar
            </a>
          </div>
        )}
        
        {/* Card para Cadastrar Usuários - apenas para administradores */}
        {userData?.role === 'admin' && (
          <div className="bg-villa-green bg-opacity-10 p-6 rounded-lg border border-villa-green">
            <h3 className="text-lg font-semibold mb-3 text-villa-green">Cadastrar Usuário</h3>
            <p className="text-gray-600 mb-4">Adicione novos administradores, editores ou visualizadores.</p>
            <a 
              href="/admin/register" 
              className="inline-block bg-villa-green text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
            >
              Acessar
            </a>
          </div>
        )}
        
        {/* Card para Visualizar Site - para todos */}
        <div className="bg-villa-orange bg-opacity-10 p-6 rounded-lg border border-villa-orange">
          <h3 className="text-lg font-semibold mb-3 text-villa-orange">Visualizar Site</h3>
          <p className="text-gray-600 mb-4">Acesse o site público da Escola Villa Happy.</p>
          <a 
            href="/" 
            className="inline-block bg-villa-orange text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
          >
            Acessar
          </a>
        </div>
      </div>
      
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Informações do Sistema</h2>
        <div className="bg-gray-50 p-4 rounded-md">
          <p className="mb-2"><span className="font-medium">Versão:</span> 1.0.0</p>
          <p className="mb-2"><span className="font-medium">Última atualização:</span> {new Date().toLocaleDateString()}</p>
          <p className="mb-2"><span className="font-medium">Status:</span> <span className="text-green-600">Online</span></p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
