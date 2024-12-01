/* eslint-disable @typescript-eslint/no-explicit-any */
import { ProductResponse } from "@/base/types/Product";
import axiosInstance from "@/utils/axiosConfig";
import axios from "axios";

export const fetchAllProductApi = async () => {
  try {
    const response = await axiosInstance.get<ProductResponse>("/products");

    if (response.status === 200) {
      return response.data;
    }

    throw new Error("Fetch all product failed");
  } catch (error) {
    console.error("Fetch all product API error:", error);
    throw error;
  }
};

// export const fetchProductByCategoryId = async (categoryId: string) => {
//   try {
//     const response = await axiosInstance.get<ProductResponse>(
//       `/products/category/${categoryId}`
//     );

//     if (response.status === 200) {
//       return response.data;
//     }
//     throw new Error("Fetch all product by categoryId failed");
//   } catch (error) {
//     console.error("Fetch all product by categoryId API error:", error);
//     throw error;
//   }
// };

// export const fetchProductByCategoryId = async (
//   categoryId: string,
//   page: number = 1,
//   size: number = 4
// ): Promise<ProductResponse> => {
//   try {
//     const response = await axiosInstance.get<ProductResponse>(
//       `/products/category/${categoryId}?page=${page}?size=${size}`
//     );

//     return response.data; // Trả về dữ liệu nếu thành công
//   } catch (error: unknown) {
//     if (axios.isAxiosError(error)) {
//       console.error(
//         "Fetch product by categoryId API error:",
//         error.response?.data || error.message
//       );
//     } else {
//       console.error("Unexpected error:", error);
//     }
//     throw new Error("Failed to fetch products by categoryId.");
//   }
// };

export const fetchProductsBySubCategoryId = async (
  categoryId: string,
  page: number = 1,
  size: number = 4
): Promise<ProductResponse> => {
  try {
    const response = await axiosInstance.get<ProductResponse>(
      `/products/sub-category/${categoryId}`,
      {
        params: { page, size }, // Đảm bảo rằng params chứa đúng `page` và `size`
      }
    );
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      console.error(
        "Fetch product by categoryId API error:",
        error.response?.data || error.message
      );
    } else {
      console.error("Unexpected error:", error);
    }
    throw new Error("Failed to fetch products by categoryId.");
  }
};
