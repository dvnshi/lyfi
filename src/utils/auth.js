import { supabase } from "./supabase";

// User Signup
export const signup = async (email, password) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  return { data, error };
};

// User Login
export const login = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
};

// Get User Session
export const getSession = () => {
  return supabase.auth.getSession();
};

// Logout
export const logout = async () => {
  const { error } = await supabase.auth.signOut();
  return error;
};
