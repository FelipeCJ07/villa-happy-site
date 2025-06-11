import React, { useState, useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { collection, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../../firebase/config';

interface User {
  uid: string;
  email: string;
  displayName: string;
  role: 'admin' | 'editor' | 'viewer';
  createdAt: string;
}

const UserManagement: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { userData, updateUserRole } = useAuth();

  // Verificar se o usuário atual tem permissão para gerenciar usuários
  const canManageUsers = userData?.role === 'admin';

  // Buscar todos os usuários
  useEffect(() => {
    async function fetchUsers() {
      if (!canManageUsers) return;
      
      try {
        setLoading(true);
        const usersCollection = collection(db, 'users');
        const userSnapshot = await getDocs(usersCollection);
        const userList = userSnapshot.docs.map(doc => ({
          uid: doc.id,
          ...doc.data()
        })) as User[];
        
        setUsers(userList);
      } catch (error) {
        console.error("Erro ao buscar usuários:", error);
        setError('Falha ao carregar lista de usuários.');
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, [canManageUsers]);

  // Função para atualizar o papel do usuário
  async function handleRoleChange(uid: string, newRole: 'admin' | 'editor' | 'viewer') {
    try {
      setError('');
      setSuccess('');
      
      await updateUserRole(uid, newRole);
      
      // Atualizar a lista de usuários
      setUsers(prevUsers => 
        prevUsers.map(user => 
          user.uid === uid ? { ...user, role: newRole } : user
        )
      );
      
      setSuccess('Função do usuário atualizada com sucesso!');
    } catch (error) {
      console.error("Erro ao atualizar função:", error);
      setError('Falha ao atualizar função do usuário.');
    }
  }

  // Função para excluir um usuário
  async function handleDeleteUser(uid: string) {
    if (!window.confirm('Tem certeza que deseja excluir este usuário? Esta ação não pode ser desfeita.')) {
      return;
    }
    
    try {
      setError('');
      setSuccess('');
      
      // Excluir documento do usuário no Firestore
      await deleteDoc(doc(db, 'users', uid));
      
      // Atualizar a lista de usuários
      setUsers(prevUsers => prevUsers.filter(user => user.uid !== uid));
      
      setSuccess('Usuário excluído com sucesso!');
    } catch (error) {
      console.error("Erro ao excluir usuário:", error);
      setError('Falha ao excluir usuário.');
    }
  }

  if (!canManageUsers) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <span className="block sm:inline">Você não tem permissão para gerenciar usuários.</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Gerenciamento de Usuários</h1>
      
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
          <span className="block sm:inline">{error}</span>
        </div>
      )}
      
      {success && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
          <span className="block sm:inline">{success}</span>
        </div>
      )}
      
      {loading ? (
        <div className="flex justify-center">
          <p>Carregando usuários...</p>
        </div>
      ) : (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nome
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Função
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Data de Criação
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ações
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((user) => (
                <tr key={user.uid}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{user.displayName}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">{user.email}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <select
                      value={user.role}
                      onChange={(e) => handleRoleChange(user.uid, e.target.value as 'admin' | 'editor' | 'viewer')}
                      className="text-sm text-gray-900 border rounded px-2 py-1"
                      disabled={user.uid === userData?.uid} // Não permitir alterar própria função
                    >
                      <option value="admin">Administrador</option>
                      <option value="editor">Editor</option>
                      <option value="viewer">Visualizador</option>
                    </select>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {new Date(user.createdAt).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => handleDeleteUser(user.uid)}
                      className="text-red-600 hover:text-red-900"
                      disabled={user.uid === userData?.uid} // Não permitir excluir a si mesmo
                    >
                      {user.uid === userData?.uid ? 'Usuário atual' : 'Excluir'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
