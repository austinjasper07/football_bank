

export type Player = {
  id: string;
  firstName: string;
  lastName: string;
  dob: string;
  country: string;
  countryCode: string;
  position: string;
  height: string;
  weight: string;
  foot: string;
  email: string;
  phone: string;
  cvUrl: string;
  imageUrl: string[];
  description: string;
  videoPrimary: string;
  videoAdditional: string[];
  featured: boolean;
  playerOfTheWeek: boolean;
  createdAt: string;
  updatedAt: string;
};

export enum Role {
  admin,
  user,
  player,
  scout,
  club,
}

export type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  password: string;
  subscribed: boolean;
  createdAt: string;
  updatedAt: string;
};

export type Product = {
  id: string
  name: string
  description: string
  price: number
  image: string[]
  featured: boolean
  discount?: number
  createdAt: string
  updatedAt: string
  sizes: string[]
  colors: string[]
  stock: number
  category: 'boots' | 'gloves' | 'kits' | 'ball' | 'accessory'
}

export interface Post {
  id: string;
  title: string;
  content: string;
  summary: string;
  author: string;
  imageUrl: string;
  category: string;
  status: "Draft" | "Published" | "Archived";
  featured: boolean;
   tags?: string[];
  views: number;
  createdAt: string;
  updatedAt: string;
}

export type CartItem = {
  id: string
  name: string
  price: number
  quantity: number
  image: string
  size?: string
  color?: string
}

export type OrderItem = {
  id: string
  name: string
  description?: string
  quantity: number
  price: number
  type: 'product' | 'subscription'
  imageUrl?: string
}
export type Order = {
  id: string
  userId: string
  items: Array<{ name: string; quantity: number; price: number }>
  status: 'pending' | 'completed' | 'cancelled'
  createdAt: string
}

export type Message = {
  id: string
  name: string
  email: string
  subject: string
  read: boolean;
  content: string
  createdAt: string
}

export type SubmissionStatus = "pending" | "approved" | "rejected";

export type Submission = {
  id: string;
  name: string;
  email: string;
  phone: string;
  country: string;
  position: string;
  age: number;
  location: string;
  submittedAt: string;
  status: "PENDING" | "APPROVED" | "REJECTED";
  bio: string;
  experience: string;
  achievements: string[];
  documents: string[];
  rejectionReason?: string;
};
