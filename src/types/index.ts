export interface BlogPostCardProps {
  postId: string;
  thumbnail: string;
  coverImage: string;
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
    hashtags: string[];
  };
  myposts?: boolean;
}

export interface SinglePostProps {
  post: {
    title: string;
    thumbnail: string;
    coverImage: string;
    content: string;
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
      hashtags: string[];
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
