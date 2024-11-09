/* eslint-disable @typescript-eslint/no-explicit-any */
import axiosInstance from "@/utils/axiosConfig";

export const loginApi = async (data: Record<string, any>) => {
  try {
    const response = await axiosInstance.post("/auth/login", data);

    if (response.status === 200) {
      return response.data;
    }

    throw new Error("Login failed");
  } catch (error) {
    console.error("Login API error:", error);
    throw error;
  }
};

export const logoutApi = async () => {
  try {
    const response = await axiosInstance.post("/auth/logout");

    if (response.status === 200) {
        return response.data;
    }

    throw new Error("Logout failed");
  } catch (error) {
    console.error("Logout API error:", error);
  }
};
