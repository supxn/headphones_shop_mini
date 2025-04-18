export interface Product {
    id: number;
    img: string;
    title: string;
    price: number;
    discountPrice?: number;
    rate?: number;
    currencySign: string;
}

export interface CartProduct extends Pick<Product, 'id' | 'title' | 'price'> {
    // Дополнительные поля для корзины при необходимости
}