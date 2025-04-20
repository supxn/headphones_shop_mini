export interface Product {
    id: number;
    img: string;
    title: string;
    price: number;
    discountPrice?: number;
    rate?: number;
    currencySign: string;
}
export interface CartProduct {
    id: number;
    title: string;
    price: number;
    img: string;
    quantity: number;
  }
export interface CartProps {
    cartCounter: number;
    setCartCounter: React.Dispatch<React.SetStateAction<number>>;
  }