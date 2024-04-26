export interface TProduct {
  _id: number;
  id: number;
  title: string;
  description: string;
  rating: number;
  review: number;
  imageURL: string;
  price: number;
  flashSale: boolean;
  category: string;
  createdAt: string;
  updatedAt: string;
  discount: number;
  countdown?: number;
}

export interface TResponseData {
  success: boolean;
  statusCode: number;
  message: string;
  data: TProduct[];
}

export interface TCategories {
  _id: string;
  total: number;
  items: TProduct[];
}
