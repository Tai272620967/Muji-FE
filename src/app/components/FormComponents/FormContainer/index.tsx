/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm, SubmitHandler } from 'react-hook-form';
import React from 'react';

type Inputs = Record<string, any>;

interface FormContainerProps {
  onSubmit: SubmitHandler<Inputs>;
  className?: string;
  children: React.ReactNode; // Nhận children
}

export default function FormContainer({ onSubmit, className, children }: FormContainerProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

  return (
    <form className={className} onSubmit={handleSubmit(onSubmit)}>
      {/* Truyền props register và errors cho các children */}
      {React.Children.map(children, (child) => {
        return React.cloneElement(child as React.ReactElement, { register, errors });
      })}
    </form>
  );
}


