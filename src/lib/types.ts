

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
  imageUrl: string;
  description: string;
  videoPrimary: [string];
  featured: boolean;
  playerOfTheWeek: boolean;
  createdAt: string;
  updatedAt: string;
};

enum Role {
  admin,
  user,
  player
}

export type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: Role;
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
  imageUrl: string;
  category: string;
  featured: boolean;
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
