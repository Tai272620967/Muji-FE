"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useRouter } from "next/navigation";
import Logo from "../../../../../public/images/logo-muji.svg"; // Import SVG
import FormContainer from "@/base/components/FormComponents/FormContainer/FormContainer";
import InputField from "@/components/FormComponents/Input/Input"; // Import InputField
import { useAppDispatch } from "@/base/redux/hook";
import { login } from "@/base/redux/features/authSlice";
import { loginApi } from "@/base/utils/api/auth";
import { message } from "antd";

export default function LoginForm() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState<boolean | undefined>(undefined);

  const handleLoginSubmit = async (data: Record<string, any>) => {
    setIsLoading(true);

    try {
      const responseData = await loginApi(data);

      if (responseData) {
        message.success("You have been logged in!");
      }

      dispatch(
        login({
          user: responseData.data.user,
          accessToken: responseData.data.access_token,
        })
      );

      localStorage.setItem("accessToken", responseData.data.access_token);

      router.push("/");
    } catch (error) {
      console.error("Login Error: ", error);
      message.error("Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="logo">
        <Logo />
      </div>
      <h3>Login</h3>
      <div className="login-form-wrap">
        <div className="login-form-wrap__inner">
          <div className="form-title">
            <p>For members</p>
            <p className="form-description">
              Log in with your email address and password
            </p>
          </div>
          <FormContainer
            onSubmit={handleLoginSubmit}
            isLoading={isLoading}
            className="login-form"
          >
            <InputField
              className="login-input"
              name="username"
              required
              placeholder="email address"
            />
            <InputField
              className="login-input"
              name="password"
              required
              type="password"
              placeholder="password"
            />
            {/* <Button className="login-button mt-0" isLoading={isLoading}>{!isLoading && "Log in"}</Button> */}
          </FormContainer>
        </div>
      </div>
    </div>
  );
}
