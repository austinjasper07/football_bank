// adminDataStore.ts

"use client";

import { create } from "zustand";
import { devtools } from "zustand/middleware";
import axios from "axios";
import {
  Message,
  Order,
  Player,
  Post,
  Product,
  Submission,
  User,
} from "@/lib/types";

type Login = {
  email: string;
  password: string;
};

type SafeUser = Omit<User, 'password' | "updatedAt">;

interface AdminDataState {
  players: Player[];
  selectedPlayer: Player | null;

  users: User[];
  selectedUser: User | null;

  activeUser:SafeUser | null;

  posts: Post[];
  selectedPost: Post | null;

  orders: Order[];
  selectedOrder: Order | null;

  products: Product[];
  selectedProduct: Product | null;

  messages: Message[];
  selectedMessage: Message | null;

  loading: boolean;
  message: string | null;

  signup: (data: User) => Promise<void>;
  login: (data: Login) => Promise<void>;

  fetchPlayers: () => Promise<void>;
  getPlayerById: (id: string) => Promise<void>;
  addPlayer: (data: Partial<Player>) => Promise<void>;
  updatePlayer: (id: string, data: Partial<Player>) => Promise<void>;
  deletePlayer: (id: string) => Promise<void>;

  fetchUsers: () => Promise<void>;
  addUser: (data: Partial<Player>) => Promise<void>;
  getUserById: (id: string) => Promise<void>;
  updateUser: (id: string, data: Partial<User>) => Promise<void>;
  deleteUser: (id: string) => Promise<void>;

  fetchPosts: () => Promise<void>;
  addPost: (data: Partial<Player>) => Promise<void>;
  getPostById: (id: string) => Promise<void>;
  updatePost: (id: string, data: Partial<Post>) => Promise<void>;
  deletePost: (id: string) => Promise<void>;

  fetchOrders: () => Promise<void>;
  getOrderById: (id: string) => Promise<void>;
  updateOrderStatus: (id: string, status: Order["status"]) => Promise<void>;
  deleteOrder: (id: string) => Promise<void>;

  fetchProducts: () => Promise<void>;
  getProductById: (id: string) => Promise<void>;
  addProduct: (data: Partial<Product>) => Promise<void>;
  updateProduct: (id: string, data: Partial<Product>) => Promise<void>;
  deleteProduct: (id: string) => Promise<void>;

  fetchMessages: () => Promise<void>;
  getMessageById: (id: string) => Promise<void>;
  deleteMessage: (id: string) => Promise<void>;

  submissions: Submission[];
  selectedSubmission: Submission | null;

  fetchSubmissions: () => Promise<void>;
  approveSubmission: (id: string) => void;
  rejectSubmission: (id: string, reason?: string) => void;
  getSubmissionById: (id: string) => void;
}

export const useAdminDataStore = create<AdminDataState>()(
  devtools((set, get) => ({
    players: [],
    selectedPlayer: null,
    activeUser: null,
    users: [],
    selectedUser: null,
    posts: [],
    selectedPost: null,
    orders: [],
    selectedOrder: null,
    products: [],
    selectedProduct: null,
    messages: [],
    selectedMessage: null,
    loading: false,
    message: null,
    submissions: [],
    selectedSubmission: null,

    // Players
    fetchPlayers: async () => {
      set({ loading: true });
      const res = await axios.get("/api/admin/players", {
        withCredentials: true,
      });
      set({ players: res.data, loading: false });
    },
    getPlayerById: async (id) => {
      set({ loading: true });
      const res = await axios.get(`/api/admin/players/${id}`, {
        withCredentials: true,
      });
      set({ selectedPlayer: res.data, loading: false });
    },
    addPlayer: async (data) => {
      const res = await axios.post(`/api/admin/players`, data, {
        withCredentials: true,
      });
      set((state) => ({
        players: [...state.players, res.data],
        selectedPlayer: res.data,
      }));
    },
    updatePlayer: async (id, data) => {
      const res = await axios.put(`/api/admin/players/${id}`, data, {
        withCredentials: true,
      });
      set((state) => ({
        players: state.players.map((p) => (p.id === id ? res.data : p)),
        selectedPlayer: res.data,
      }));
    },
    deletePlayer: async (id) => {
      await axios.delete(`/api/admin/players/${id}`, {
        withCredentials: true,
      });
      set((state) => ({
        players: state.players.filter((p) => p.id !== id),
        selectedPlayer:
          state.selectedPlayer?.id === id ? null : state.selectedPlayer,
      }));
    },

    // auth
    signup: async (data) => {
      set({ loading: true });
      const res = await axios.post("/api/auth/signup", data, {
        withCredentials: true,
      });
      const { user } = res.data;
      set({ activeUser: user, loading: false });
    },

    login: async (data) => {
      set({ loading: true });
      const res = await axios.post("/api/auth/login", data, {
        withCredentials: true,
      });
      console.log("Login response data:", res.data.user);
      const { user, message } = res.data;
      set({ activeUser: user as SafeUser, loading: false, message: message });
      console.log(get().activeUser);
    },

    // Admin Users
    fetchUsers: async () => {
      set({ loading: true });
      const res = await axios.get("/api/admin/users", {
        withCredentials: true,
      });
      set({ users: res.data, loading: false });
    },
    getUserById: async (id) => {
      set({ loading: true });
      const res = await axios.get(`/api/admin/users/${id}`, {
        withCredentials: true,
      });
      set({ selectedUser: res.data, loading: false });
    },
    addUser: async (data) => {
      const res = await axios.post(`/api/admin/users`, data, {
        withCredentials: true,
      });
      set((state) => ({
        users: [...state.users, res.data],
        selectedUser: res.data,
      }));
    },
    updateUser: async (id, data) => {
      const res = await axios.put(`/api/admin/users/${id}`, data, {
        withCredentials: true,
      });
      set((state) => ({
        users: state.users.map((u) => (u.id === id ? res.data : u)),
        selectedUser: res.data,
      }));
    },
    deleteUser: async (id) => {
      await axios.delete(`/api/admin/users/${id}`, {
        withCredentials: true,
      });
      set((state) => ({
        users: state.users.filter((u) => u.id !== id),
        selectedUser: state.selectedUser?.id === id ? null : state.selectedUser,
      }));
    },

    // Posts
    fetchPosts: async () => {
      set({ loading: true });
      const res = await axios.get("/api/admin/posts", {
        withCredentials: true,
      });
      set({ posts: res.data, loading: false });
    },
    getPostById: async (id) => {
      set({ loading: true });
      const res = await axios.get(`/api/admin/posts/${id}`, {
        withCredentials: true,
      });
      set({ selectedPost: res.data, loading: false });
    },
    addPost: async (data) => {
      const res = await axios.post(`/api/admin/posts`, data, {
        withCredentials: true,
      });
      set((state) => ({
        posts: [...state.posts, res.data],
        selectedPost: res.data,
      }));
    },
    updatePost: async (id: string, data: Partial<Post>): Promise<Post> => {
      const res = await axios.put(`/api/admin/posts/${id}`, data, {
        withCredentials: true,
      });
      set((state) => ({
        posts: state.posts.map((p) => (p.id === id ? res.data : p)),
        selectedPost: res.data,
      }));
      return res.data;
    },
    deletePost: async (id) => {
      await axios.delete(`/api/admin/posts/${id}`, {
        withCredentials: true,
      });
      set((state) => ({
        posts: state.posts.filter((p) => p.id !== id),
        selectedPost: state.selectedPost?.id === id ? null : state.selectedPost,
      }));
    },

    // Orders
    fetchOrders: async () => {
      set({ loading: true });
      const res = await axios.get("/api/admin/orders", {
        withCredentials: true,
      });
      set({ orders: res.data, loading: false });
    },
    getOrderById: async (id) => {
      set({ loading: true });
      const res = await axios.get(`/api/admin/orders/${id}`, {
        withCredentials: true,
      });
      set({ selectedOrder: res.data, loading: false });
    },
    updateOrderStatus: async (id, status) => {
      const res = await axios.put(`/api/admin/orders/${id}`, { status }, {
        withCredentials: true,
      });
      set((state) => ({
        orders: state.orders.map((o) => (o.id === id ? res.data : o)),
        selectedOrder: res.data,
      }));
    },
    deleteOrder: async (id) => {
      await axios.delete(`/api/admin/orders/${id}`, {
        withCredentials: true,
      });
      set((state) => ({
        orders: state.orders.filter((o) => o.id !== id),
        selectedOrder:
          state.selectedOrder?.id === id ? null : state.selectedOrder,
      }));
    },

    // Products
    fetchProducts: async () => {
      set({ loading: true });
      const res = await axios.get("/api/admin/products", {
        withCredentials: true,
      });
      set({ products: res.data, loading: false });
    },
    getProductById: async (id) => {
      set({ loading: true });
      const res = await axios.get(`/api/admin/products/${id}`, {
        withCredentials: true,
      });
      set({ selectedProduct: res.data, loading: false });
    },
    addProduct: async (data) => {
      const res = await axios.post(`/api/admin/products`, data, {
        withCredentials: true,
      });
      set((state) => ({
        products: [...state.products, res.data],
        selectedProduct: res.data,
      }));
    },
    updateProduct: async (id, data) => {
      const res = await axios.put(`/api/admin/products/${id}`, data, {
        withCredentials: true,
      });
      set((state) => ({
        products: state.products.map((p) => (p.id === id ? res.data : p)),
        selectedProduct: res.data,
      }));
    },
    deleteProduct: async (id) => {
      const res = await axios.delete(`/api/admin/products/${id}`, {
        withCredentials: true,
      });
      if (res.status === 200) {
        set(() => ({
          products: res.data,
        }));
      }
    },

    // Messages
    fetchMessages: async () => {
      set({ loading: true });
      const res = await axios.get("/api/admin/messages", {
        withCredentials: true,
      });
      set({ messages: res.data, loading: false });
    },
    getMessageById: async (id) => {
      set({ loading: true });
      const res = await axios.get(`/api/admin/messages/${id}`, {
        withCredentials: true,
      });
      set({ selectedMessage: res.data, loading: false });
    },
    deleteMessage: async (id) => {
      await axios.delete(`/api/admin/messages/${id}`, {
        withCredentials: true,
      });
      set((state) => ({
        messages: state.messages.filter((m) => m.id !== id),
        selectedMessage:
          state.selectedMessage?.id === id ? null : state.selectedMessage,
      }));
    },

    //Submissions
    fetchSubmissions: async () => {
      set({ loading: true });
      const res = await axios.get("/api/admin/submissions", {
        withCredentials: true,
      });
      set({ submissions: res.data, loading: false });
    },

    getSubmissionById: async (id) => {
      set({ loading: true });
      try {
        const res = await axios.get(`/api/admin/submissions/${id}`, {
        withCredentials: true,
      });
        set({ selectedSubmission: res.data, loading: false });
      } catch (error) {
        set({ loading: false });
        console.error("Failed to fetch submission by ID", error);
      }
    },

    approveSubmission: async (id: string): Promise<string> => {
  try {
    const res = await axios.patch(
      `/api/admin/submissions/${id}`,
      { status: "APPROVED" },
      { withCredentials: true }
    );

    const { success, message, statusCode, data } = res.data;

    if (!success || statusCode !== 200) {
      console.error("Approve failed:", message);
      return message || "Failed to approve submission.";
    }

    set((state) => ({
      submissions: state.submissions.map((s) =>
        s.id === id ? { ...s, status: "APPROVED" } : s
      ),
    }));

    return message || "Submission approved successfully.";
  } catch (error) {
    console.error("Approve error:", error);
    return "Unexpected error occurred.";
  }
},

rejectSubmission: async (id: string, reason: string): Promise<string> => {
  try {
    const res = await axios.patch(
      `/api/admin/submissions/${id}`,
      {
        status: "REJECTED",
        rejectionReason: reason,
      },
      { withCredentials: true }
    );

    const { success, message, statusCode, data } = res.data;

    if (!success || statusCode !== 200) {
      console.error("Reject failed:", message);
      return message || "Failed to reject submission.";
    }

    set((state) => ({
      submissions: state.submissions.map((s) =>
        s.id === id ? { ...s, status: "REJECTED", rejectionReason: reason } : s
      ),
    }));

    return message || "Submission rejected successfully.";
  } catch (error) {
    console.error("Reject error:", error);
    return "Unexpected error occurred.";
  }
},

  }))
);
