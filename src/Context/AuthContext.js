import { createContext, useContext } from 'react';
import { createClient } from '@supabase/supabase-js';
import conf from '@/components/Supabase/conf';

// Create a single supabase client for interacting with your database
export const supabase = createClient(conf.supabaseUrl, conf.supabaseKey);
export const AuthContext = createContext();
export const AuthProvider = AuthContext.Provider;
export const useAuth = () => useContext(AuthContext);
