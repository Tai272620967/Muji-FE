export interface Category {
    parentId: number;
    id: number;
    name: string;
    imageUrl: string;
  }
  
  export interface CategoryResponse {
    data: {
      result: Category[];
    };
  }
  