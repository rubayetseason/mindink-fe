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
    bookmarks: number;
  };
}

export interface SinglePostProps {
  post: {
    title: string;
    coverImage: string;
    content: string;
    stats: {
      likes: number;
      comments: number;
      shares: number;
      bookmarks: number;
    };
  };
}

export interface Comment {
  id: string;
  user: { name: string; avatar?: string };
  content: string;
  likes: number;
  replies?: Comment[];
}
