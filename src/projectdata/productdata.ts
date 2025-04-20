import productphoto from "./assets/product-photo-1.png";
import productphoto2 from "./assets/headphones2.png";
import productphoto3 from "./assets/headphones3.png";
import productphoto4 from "./assets/headphones4.png";
import productphoto5 from "./assets/headphones5.png";
import productphoto6 from "./assets/headphones6.png";
import {Product} from '../types';

export const headphones: Product[] = [
    {
        id: 1,
        img: productphoto,
        title: "Apple BYZ S852l",
        price: 2927,
        discountPrice: 3527,
        rate: 4.7,
        currencySign: "₽"
    },
    {
        id: 2,
        img: productphoto2,
        title: "Apple EarPods",
        price: 2327,
        discountPrice: undefined,
        rate: 4.5,
        currencySign: "₽"
    },
    {
        id: 3,
        img: productphoto3,
        title: "Apple EarPods",
        price: 2327,
        discountPrice: undefined,
        rate: 4.5,
        currencySign: "₽"
    },
    {
        id: 4,
        img: productphoto,
        title: "Apple EarPods",
        price: 2327,
        discountPrice: undefined,
        rate: 4.7,
        currencySign: "₽"
    },
    {
        id: 5,
        img: productphoto2,
        title: "Apple EarPods",
        price: 2327,
        discountPrice: undefined,
        rate: 4.5,
        currencySign: "₽"
    },
    {
        id: 6,
        img: productphoto3,
        title: "Apple EarPods",
        price: 2327,
        discountPrice: undefined,
        rate: 4.5,
        currencySign: "₽"
    }

];
export const headphones2: Product[] = [
    {
        id: 7,
        img: productphoto4,
        title: "Apple AirPods",
        price: 9527,
        discountPrice: undefined,
        rate: 4.7,
        currencySign: "₽"
    },
    {
        id: 8,
        img: productphoto5,
        title: "GERLAX GH-04",
        price: 6527,
        discountPrice: undefined,
        rate: 4.7,
        currencySign: "₽"
    },
    {
        id: 9,
        img: productphoto6,
        title: "BOROFONE BO4",
        price: 7527,
        discountPrice: undefined,
        rate: 4.7,
        currencySign: "₽"
    }
]