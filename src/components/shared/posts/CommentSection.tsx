"use client";

import { useState } from "react";
import { Heart, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { mockComments } from "@/constants";
import { Comment } from "@/types";

const name = "John Doe";

export default function CommentSection({ postId }: { postId: string }) {
  console.log(postId);

  const [comments] = useState<Comment[]>(mockComments);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggleReplies = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="w-full max-w-3xl mx-auto mt-12 space-y-8">
      {/* Comment Input */}
      <div className="flex gap-3 items-start">
        <Button variant="outline" className="relative h-11 w-11 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src="#" alt="Avatar" />
            <AvatarFallback className="bg-transparent text-indigo-700 dark:text-indigo-500 font-medium">
              {name
                ?.split(" ")
                .map((w) => w[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
        </Button>
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <input
              type="text"
              placeholder="Write a comment..."
              className="p-3 w-full border-b-[1px] border-gray-500/50 outline-none"
            />
            <button className="bg-gradient-animate hover-pulse px-5 py-2.5 w-fit text-white text-sm font-medium flex justify-center items-center gap-3 rounded-[30px]">
              <Send size="16" /> Comment
            </button>
          </div>
        </div>
      </div>

      {/* Comment List */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="relative pl-3">
            <div className="absolute left-0 top-2 bottom-0 w-px bg-blue-800" />

            <div className="flex gap-3">
              <Button
                variant="outline"
                className="relative h-11 w-11 rounded-full"
              >
                <Avatar className="h-8 w-8">
                  <AvatarImage src="#" alt="Avatar" />
                  <AvatarFallback className="bg-transparent text-indigo-700 dark:text-indigo-500 font-medium">
                    {comment.user.name
                      ?.split(" ")
                      .map((w) => w[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
              </Button>
              <div className="flex-1">
                <div className="font-semibold">{comment.user.name}</div>
                <p className="text-sm mb-2">{comment.content}</p>
                <div className="flex gap-4 text-muted-foreground text-sm">
                  <div className="flex gap-1 items-center">
                    <Heart size={14} /> {comment.likes}
                  </div>
                  <div
                    onClick={() => toggleReplies(comment.id)}
                    className="cursor-pointer font-semibold flex gap-1 items-center"
                  >
                    <MessageSquare size={14} />
                    {expanded[comment.id]
                      ? "Hide Replies"
                      : `View Replies (${comment.replies?.length || 0})`}
                  </div>
                </div>

                {/* Replies */}
                {expanded[comment.id] &&
                  comment.replies?.map((reply) => (
                    <div
                      key={reply.id}
                      className="relative mt-4 ml-6 border-l pl-4 border-blue-800 space-y-1"
                    >
                      <div className="flex gap-3">
                        <Button
                          variant="outline"
                          className="relative h-11 w-11 rounded-full"
                        >
                          <Avatar className="h-8 w-8">
                            <AvatarImage src="#" alt="Avatar" />
                            <AvatarFallback className="bg-transparent text-indigo-700 dark:text-indigo-500 font-medium">
                              {reply.user.name
                                ?.split(" ")
                                .map((w) => w[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                        </Button>

                        <div className="flex-1">
                          <div className="font-semibold text-sm">
                            {reply.user.name}
                          </div>
                          <p className="text-sm">{reply.content}</p>
                          <div className="flex gap-2 text-sm mt-1 text-muted-foreground">
                            <div className="flex gap-1 items-center">
                              <Heart size={14} /> {reply.likes}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
