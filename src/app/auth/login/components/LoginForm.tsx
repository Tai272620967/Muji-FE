'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from '../../../../styles/LoginForm.module.scss';
import Logo from '../../../../../public/images/logo-muji.svg'; // Import SVG
import FormContainer from '@/base/components/FormComponents/FormContainer';
import InputField from '@/components/FormComponents/Input/Input'; // Import InputField
import { Button } from '@/base/components/Button/Button';

export default function LoginForm() {
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean | undefined>(undefined);
  const router = useRouter();

  const handleLoginSubmit = async (data: Record<string, any>) => {
    // setError(null);
    setIsLoading(true);
  
    // Thêm setTimeout để delay 2 giây trước khi gọi API
    setTimeout(async () => {
      try {
        const response = await fetch('http://localhost:8080/api/v1/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
  
        if (!response.ok) {
          throw new Error('Login failed');
        }
  
        const responseData = await response.json();
        setIsLoading(false);
        localStorage.setItem('accessToken', responseData.data.access_token);
        router.push('/');
      } catch (error) {
        console.log(error);
        setError('Invalid credentials');
        setIsLoading(false);
      }
    }, 1000);
  };  

  return (
    <div className="login-container">
      <div className="logo">
        <Logo />
      </div>
      <h3>Login</h3>
      <div className="login-form-wrap">
        <div className='login-form-wrap__inner'>
          <div className='form-title'>
            <p>For members</p>
            <p className='form-description'>Log in with your email address and password</p>
          </div>
          <FormContainer onSubmit={handleLoginSubmit} className="login-form">
            <InputField className="login-input" name="username" required placeholder='email address'/>
            <InputField className="login-input" name="password" required type="password" placeholder='password'/>
            <Button className="login-button mt-0" isLoading={isLoading}>{!isLoading && "Log in"}</Button>
          </FormContainer>
        </div>
      </div>
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
}


