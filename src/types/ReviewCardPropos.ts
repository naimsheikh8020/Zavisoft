export  interface ReviewCardProps {
  title: string;
  description: string;
  rating: number; // 0 - 5
  avatarUrl: string;
  imageUrl: string;
  maxRating?: number;
}

export interface Review {
  id: number;
  title: string;
  description: string;
  rating: number;
  avatarUrl: string;
  imageUrl: string;
}