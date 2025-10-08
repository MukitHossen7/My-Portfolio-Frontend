export interface IUser {
  id: number;
  name: string;
  email: string;
  role: string;
  picture: string | null;
  isStatus: string;
  isVerified: boolean;
  createdAt: string;
}

export interface IProject {
  id: number;
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  frontendRepoUrl: string;
  backendRepoUrl: string;
  liveUrl: string;
  features: string[];
  technology: string[];
  createdAt: string;
  updatedAt: string;
  owner: {
    id: number;
    email: string;
    name: string;
    role: "ADMIN" | "USER";
  };
}

interface Author {
  id: number;
  name: string;
  email: string;
}

export interface IBlog {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  thumbnail: string;
  tags: string[];
  views: number;
  status: string;
  author: Author;
  createdAt: string;
  updateAt: string;
  isFeatured: boolean;
}

export interface IBlogFormData {
  title: string;
  excerpt: string;
  content: string;
  thumbnail: string;
  tags: string[];
  isFeatured: boolean;
  status: string;
}

export interface IProjectFormData {
  id?: number;
  slug?: string;
  title: string;
  description: string;
  thumbnail: string;
  frontendRepoUrl?: string | null;
  backendRepoUrl?: string | null;
  liveUrl?: string | null;
  features: string[];
  technology: string[];
}
