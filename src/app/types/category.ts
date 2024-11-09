export interface Category {
    id: number;
    name: string;
    imageUrl: string;
  }
  
  export interface CategoryResponse {
    data: {
      result: Category[];
    };
  }
  