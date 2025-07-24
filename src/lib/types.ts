

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
  image: string;
  description: string;
  videoPrimary: [string];
  featured: boolean;
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
  id: string;
  name: string;
  description: string;
  price: number;
  image: [string];
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  imageUrl: [string];
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}
