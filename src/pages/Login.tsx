import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../store/store';
import { login } from '../features/auth/authSlice';
import AuthTemplate from '../components/templates/AuthTemplate';
import LoginCard from '../components/organisms/LoginCard';
import React from 'react';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = (username: string, password: string) => {
    if (username === 'admin' && password === 'password') {
      dispatch(login(username));
      navigate('/dashboard');
    } else {
      alert('Invalid credentials! Try admin/password.');
    }
  };

  return (
    <AuthTemplate>
      <LoginCard onLogin={handleLogin} />
    </AuthTemplate>
  );
};

export default Login;
