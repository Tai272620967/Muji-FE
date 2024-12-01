export interface Product {
    id: number;
    name: string;
    minPrice: number;
    maxPrice: number;
    description: string;
    imageUrl: string;
    stockQuantity: number;
  }
  
  export interface ProductResponse {
    data: {
      result: Product[];
    };
  }
  