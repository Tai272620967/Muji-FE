/* eslint-disable @typescript-eslint/no-explicit-any */
import { CategoryResponse } from "@/base/types/category";
import axiosInstance from "@/utils/axiosConfig";

export const fetchAllCategoryApi = async () => {
  try {
    const response = await axiosInstance.get<CategoryResponse>("/categories");

    if (response.status === 200) {
      return response.data;
    }

    throw new Error("Login failed");
  } catch (error) {
    console.error("Login API error:", error);
    throw error;
  }
};