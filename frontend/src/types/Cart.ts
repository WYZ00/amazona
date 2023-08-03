import { Product } from "./Product";

export type CartItem = Pick<
  Product,
  "name" | "slug" | "countInstock" | "price" | "_id"
> & {
  image: string | undefined;

  quantity: number;
};

export type ShippingAddress = {
  fullName: string;
  address: string;
  city: string;
  country: string;
  postalCode: string;
};

export type Cart = {
  itemsPrice: number;
  shippingPrice: number;
  taxPrice: number;
  totalPrice: number;
  cartItems: CartItem[];
  shippingAddress: ShippingAddress;
  paymentMethod: string;
};
