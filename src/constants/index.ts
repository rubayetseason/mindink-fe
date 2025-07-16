import { Comment } from "@/types";

export const blogPosts = [
  {
    postId: "post-001",
    thumbnail: "https://picsum.photos/600/300",
    title: "The Power of Morning Routines for Developers",
    shortDescription:
      "Starting your day with a consistent routine can drastically improve your focus and productivity. Discover how top developers plan their mornings.",
    readCount: 1054,
    postedAt: "2025-07-14T08:15:00Z",
    user: {
      id: "user-01",
      name: "Alice Johnson",
      avatar: "https://picsum.photos/200",
    },
    stats: {
      likes: 120,
      comments: 18,
      shares: 9,
      bookmarks: 7,
    },
  },
  {
    postId: "post-002",
    thumbnail: "https://picsum.photos/200/300",
    title: "Tailwind CSS Tips You Probably Didn't Know",
    shortDescription:
      "Tailwind is more powerful than you think. Here are some hidden utilities, performance tips, and layout tricks for faster UIs.",
    readCount: 867,
    postedAt: "2025-07-12T14:30:00Z",
    user: {
      id: "user-02",
      name: "Mohammed Saif",
      avatar: "https://picsum.photos/200",
    },
    stats: {
      likes: 88,
      comments: 10,
      shares: 5,
      bookmarks: 7,
    },
  },
  {
    postId: "post-003",
    thumbnail: "https://picsum.photos/200/300",
    title: "Building a Scalable API with Next.js 15 App Router",
    shortDescription:
      "Explore best practices for building robust and scalable APIs using Next.js 15’s app directory, with edge functions and route handlers.",
    readCount: 1432,
    postedAt: "2025-07-10T10:00:00Z",
    user: {
      id: "user-03",
      name: "Samantha Lee",
      avatar: "https://picsum.photos/200",
    },
    stats: {
      likes: 160,
      comments: 25,
      shares: 14,
      bookmarks: 7,
    },
  },
  {
    postId: "post-004",
    thumbnail: "https://picsum.photos/200/300",
    title: "How to Stay Motivated During Side Projects",
    shortDescription:
      "Side projects can be exciting at first but hard to finish. Here are practical strategies to stay on track and actually ship.",
    readCount: 592,
    postedAt: "2025-07-08T16:45:00Z",
    user: {
      id: "user-04",
      name: "Daniel Green",
      avatar: "https://picsum.photos/200",
    },
    stats: {
      likes: 60,
      comments: 8,
      shares: 3,
      bookmarks: 7,
    },
  },
];

export const samplePost = {
  id: "post-123",
  title: "Why Developers Should Embrace Morning Routines",
  coverImage: "https://picsum.photos/900/400",
  content: `
    <p>In a world of late-night coding and caffeine, the idea of waking up early can feel alien. But many successful developers swear by structured morning routines.</p>
    <h2>The Benefits of Morning Routines</h2>
    <ul>
      <li>Better focus and mental clarity</li>
      <li>Dedicated time for learning and reflection</li>
      <li>Improved physical and mental health</li>
    </ul>
    <p>Whether it's journaling, exercising, or simply drinking coffee in peace, morning rituals can set a powerful tone for your entire day.</p>
    <blockquote>“Win the morning, win the day.”</blockquote>
    <p>Start small. Wake up 15 minutes earlier tomorrow and build from there.</p>
  `,
  stats: {
    likes: 128,
    comments: 24,
    shares: 12,
    bookmarks: 7,
  },
};

export const mockComments: Comment[] = [
  {
    id: "1",
    user: { name: "Alice Johnson" },
    content: "Great post! I especially liked the part about routines.",
    likes: 4,
    replies: [
      {
        id: "1-1",
        user: { name: "John Doe" },
        content: "Thanks Alice! Glad it helped.",
        likes: 2,
      },
    ],
  },
  {
    id: "2",
    user: { name: "Samantha Lee" },
    content: "This changed my perspective on mornings completely!",
    likes: 7,
  },
];
