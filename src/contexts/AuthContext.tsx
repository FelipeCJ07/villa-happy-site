import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { 
  User, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  sendPasswordResetEmail,
  onAuthStateChanged,
  updateProfile
} from 'firebase/auth';
import { auth, db } from '../firebase/config';
import { doc, setDoc, getDoc } from 'firebase/firestore';

// Definição dos tipos
type UserRole = 'admin' | 'editor' | 'viewer';

interface UserData {
  uid: string;
  email: string | null;
  displayName: string | null;
  role: UserRole;
}

interface AuthContextType {
  currentUser: User | null;
  userData: UserData | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string, role: UserRole) => Promise<void>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  updateUserRole: (uid: string, role: UserRole) => Promise<void>;
  loading: boolean;
}

// Criação do contexto
const AuthContext = createContext<AuthContextType | null>(null);

// Hook personalizado para usar o contexto
export function useAuth() {
  return useContext(AuthContext) as AuthContextType;
}

// Provedor do contexto
export function AuthProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  // Função para buscar dados do usuário no Firestore
  async function fetchUserData(user: User) {
    try {
      const userDocRef = doc(db, 'users', user.uid);
      const userDoc = await getDoc(userDocRef);
      
      if (userDoc.exists()) {
        const userData = userDoc.data() as Omit<UserData, 'uid'>;
        setUserData({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          role: userData.role
        });
      } else {
        // Se não existir documento para o usuário, definir como viewer por padrão
        setUserData({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          role: 'viewer'
        });
      }
    } catch (error) {
      console.error("Erro ao buscar dados do usuário:", error);
    }
  }

  // Função para criar conta
  async function signup(email: string, password: string, name: string, role: UserRole = 'viewer') {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Atualizar o perfil com o nome
      await updateProfile(user, {
        displayName: name
      });
      
      // Salvar informações adicionais no Firestore
      await setDoc(doc(db, 'users', user.uid), {
        email: email,
        displayName: name,
        role: role,
        createdAt: new Date().toISOString()
      });
      
      return;
    } catch (error) {
      throw error;
    }
  }

  // Função para login
  async function login(email: string, password: string) {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      throw error;
    }
  }

  // Função para logout
  function logout() {
    return signOut(auth);
  }

  // Função para redefinir senha
  function resetPassword(email: string) {
    return sendPasswordResetEmail(auth, email);
  }

  // Função para atualizar o papel do usuário
  async function updateUserRole(uid: string, role: UserRole) {
    try {
      const userDocRef = doc(db, 'users', uid);
      await setDoc(userDocRef, { role }, { merge: true });
      
      // Atualizar o userData se for o usuário atual
      if (currentUser && currentUser.uid === uid) {
        setUserData(prev => prev ? { ...prev, role } : null);
      }
    } catch (error) {
      throw error;
    }
  }

  // Efeito para monitorar mudanças no estado de autenticação
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      
      if (user) {
        await fetchUserData(user);
      } else {
        setUserData(null);
      }
      
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    userData,
    login,
    signup,
    logout,
    resetPassword,
    updateUserRole,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
