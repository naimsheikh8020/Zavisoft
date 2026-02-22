import Logo from "./Logo.svg"
import Category1 from "./Category1.png"
import Category2 from "./category2.png"
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