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
