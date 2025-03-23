import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../store/store';
import { login } from '../features/auth/authSlice';
import AuthTemplate from '../components/templates/AuthTemplate';
import LoginCard from '../components/organisms/LoginCard';
import { loginSchema } from '../schemas/validationSchemas';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  );

  const [formData, setFormData] = useState({ username: '', password: '' });
  const [errors, setErrors] = useState<{
    username?: string;
    password?: string;
  }>({});

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    const validationResult = loginSchema.safeParse(formData);

    if (!validationResult.success) {
      const fieldErrors: { username?: string; password?: string } = {};
      validationResult.error.errors.forEach((err) => {
        fieldErrors[err.path[0] as keyof typeof fieldErrors] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    if (formData.username === 'admin' && formData.password === 'password') {
      dispatch(login(formData.username));
      navigate('/dashboard');
    } else {
      setErrors({ password: 'Invalid credentials! Try admin/password.' });
    }
  };

  return (
    <AuthTemplate>
      <LoginCard
        formData={formData}
        onChange={handleChange}
        onLogin={handleLogin}
        errors={errors}
      />
    </AuthTemplate>
  );
};

export default Login;
