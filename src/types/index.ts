export interface BlogPostCardProps {
  postId: string;
  thumbnail: string;
  title: string;
  shortDescription: string;
  readCount: number;
  postedAt: string | Date;
  user: {
    id: string;
    name: string;
    avatar: string;
  };
  stats: {
    likes: number;
    comments: number;
    shares: number;
  };
}
