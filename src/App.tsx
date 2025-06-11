import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';

// Componentes públicos
import Header from './components/Header';
import Hero from './components/Hero';
import NiveisEnsino from './components/NiveisEnsino';
import Diferenciais from './components/Diferenciais';
import AtividadesExtras from './components/AtividadesExtras';
import Galeria from './components/Galeria';
import Contato from './components/Contato';
import Footer from './components/Footer';

// Componentes administrativos
import Login from './components/admin/Login';
import Register from './components/admin/Register';
import UserManagement from './components/admin/UserManagement';
import Dashboard from './components/admin/Dashboard';

// Componente para rotas protegidas
interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: 'admin' | 'editor' | 'viewer';
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ 
  children, 
  requiredRole = 'viewer' 
}) => {
  const { currentUser, userData, loading } = useAuth();
  
  if (loading) {
    return <div className="flex justify-center items-center h-screen">Carregando...</div>;
  }
  
  if (!currentUser) {
    return <Navigate to="/admin/login" />;
  }
  
  // Verificar permissões baseadas em papel
  if (userData) {
    const hasPermission = 
      (requiredRole === 'admin' && userData.role === 'admin') ||
      (requiredRole === 'editor' && ['admin', 'editor'].includes(userData.role)) ||
      (requiredRole === 'viewer');
    
    if (!hasPermission) {
      return <Navigate to="/admin/dashboard" />;
    }
  }
  
  return <>{children}</>;
};

// Layout para páginas administrativas
const AdminLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { currentUser, logout } = useAuth();
  
  const handleLogout = async () => {
    try {
      await logout();
      // Redirecionamento acontecerá via Router
    } catch (error) {
      console.error("Falha ao fazer logout", error);
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-100">
      {currentUser && (
        <nav className="bg-villa-orange text-white shadow-md">
          <div className="container mx-auto px-4 py-3">
            <div className="flex justify-between items-center">
              <div className="text-xl font-bold">Villa Happy Admin</div>
              <div className="flex space-x-4">
                <a href="/admin/dashboard" className="hover:underline">Dashboard</a>
                <a href="/admin/users" className="hover:underline">Usuários</a>
                <a href="/admin/register" className="hover:underline">Cadastrar</a>
                <a href="/" className="hover:underline">Ver Site</a>
                <button onClick={handleLogout} className="hover:underline">Sair</button>
              </div>
            </div>
          </div>
        </nav>
      )}
      <div className="container mx-auto px-4 py-8">
        {children}
      </div>
    </div>
  );
};

// Componente principal da aplicação
function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Rotas públicas */}
          <Route path="/" element={
            <div className="App">
              <Header />
              <main>
                <Hero />
                <NiveisEnsino />
                <Diferenciais />
                <AtividadesExtras />
                <Galeria />
                <Contato />
              </main>
              <Footer />
            </div>
          } />
          
          {/* Rotas administrativas */}
          <Route path="/admin/login" element={
            <AdminLayout>
              <Login />
            </AdminLayout>
          } />
          
          <Route path="/admin/dashboard" element={
            <ProtectedRoute>
              <AdminLayout>
                <Dashboard />
              </AdminLayout>
            </ProtectedRoute>
          } />
          
          <Route path="/admin/users" element={
            <ProtectedRoute requiredRole="admin">
              <AdminLayout>
                <UserManagement />
              </AdminLayout>
            </ProtectedRoute>
          } />
          
          <Route path="/admin/register" element={
            <ProtectedRoute requiredRole="admin">
              <AdminLayout>
                <Register />
              </AdminLayout>
            </ProtectedRoute>
          } />
          
          {/* Rota de fallback */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
