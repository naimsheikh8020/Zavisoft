import Logo from "./Logo.svg"
import Category1 from "./category2.svg"
import Category2 from "./category2.svg"
import HeroImg1 from "./HeroIMG1.jpg"
import HeroImg2 from "./HeroImg2.jpg"
import HeroImg3 from "./HeroImg3.jpg"
import Shoes from "./SHOES.svg"
import reviewshoes1 from "./reviewshoe1.png"
import reviewshoes2 from "./reviewshoe2.png"
import reviewshoes3 from "./reviewshoe3.png"
import Logoo from "./Logoo.svg"
import Avetar1 from "./Avetar1.png"
import Avetar2 from "./Aveter2.png"
import Avetar3 from "./Aveter3.png"
import type { Review } from "../types/ReviewCardPropos"
import Kicks from "./Kicks.svg"
import k from "./k.svg"
import k1 from "./k1.svg"
import i from "./i.svg"
import c from "./c.svg"
import s from "./s.svg"

import kicksfooterlog from "./kicksfooter.svg"
import productDetails1 from "./ProductDetails1.png"
import productDetails2 from "./ProductDetails2.png"
import productDetails3 from "./ProductDetails3.png"
import productDetails4 from "./ProductDetails4.png"
import type { Product } from "../types/ProductType"
export const assets = {
  Logo,
  Logoo,
  Category1,
  Category2,
  HeroImg1,
  HeroImg2,
  HeroImg3,
  Shoes,
  reviewshoes1,
  reviewshoes2,
  reviewshoes3,
  Avetar1,
  Avetar2,
  Avetar3,
  Kicks,
  k,
  k1,
  i,
  c,
  s,
  kicksfooterlog,
  productDetails1,
  productDetails2,
  productDetails3,
  productDetails4
}




export const reviews: Review[] = [
  {
    id: 1,
    title: "Good Quality",
    description: "I highly recommend shopping from kicks",
    rating: 5,
    avatarUrl: Avetar1,
    imageUrl: reviewshoes3,
  },
  {
    id: 2,
    title: "Good Quality",
    description: "I highly recommend shopping from kicks",
    rating: 5,
    avatarUrl: Avetar2,
    imageUrl: reviewshoes2,
  },
  {
    id: 3,
    title: "Good Quality",
    description: "I highly recommend shopping from kicks",
    rating: 5,
    avatarUrl: Avetar3,
    imageUrl: reviewshoes1,
  },
];



export const products: Product[] = [
  {
    id: "adidas-4dfwd-parley-1",
    badge: "New",
    title: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    price: 125,
    imageSrc: assets.Shoes,
  },
  {
    id: "adidas-4dfwd-parley-2",
    badge: "New",
    title: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    price: 125,
    imageSrc: assets.Shoes,
  },
  {
    id: "adidas-4dfwd-parley-3",
    badge: "New",
    title: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    price: 125,
    imageSrc: assets.Shoes,
  },
  {
    id: "adidas-4dfwd-parley-4",
    badge: "New",
    title: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
    price: 125,
    imageSrc: assets.Shoes,
  },
];