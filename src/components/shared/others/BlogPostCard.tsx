"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { BlogPostCardProps } from "@/types";
import { formatDistanceToNow } from "date-fns";
import { Eye, Heart, MessageCircle, Repeat } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function BlogPostCard({
  postId,
  thumbnail,
  title,
  shortDescription,
  readCount,
  postedAt,
  user,
  stats,
}: BlogPostCardProps) {
  console.log(postId);

  const [liked, setLiked] = useState(false);

  return (
    <Card className="w-full mx-auto font-raleway">
      <CardHeader className="flex items-center gap-4">
        <Image
          src={user.avatar}
          alt={user.name}
          width={40}
          height={40}
          className="rounded-full object-cover"
        />
        <div className="flex-1 flex justify-between items-center">
          <div>
            <p className="font-medium">{user.name}</p>
            <p className="text-sm text-muted-foreground">
              {formatDistanceToNow(new Date(postedAt), { addSuffix: true })}
            </p>
          </div>
          <div>
            <Button>Following</Button>
          </div>
        </div>
      </CardHeader>

      <Link href="/feed/123" className="cursor-pointer">
        <CardContent className="px-4">
          <Image
            src={thumbnail}
            alt={title}
            width={800}
            height={400}
            className="rounded-md object-cover w-full h-96 mb-4"
          />
          <h2 className="text-xl font-semibold mb-1">{title}</h2>
          <p className="text-muted-foreground line-clamp-3">
            {shortDescription}
          </p>
        </CardContent>
      </Link>

      <CardFooter className="flex justify-between items-center text-lg text-muted-foreground px-4 pb-4">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setLiked((prev) => !prev)}
            className={cn("text-muted-foreground", liked && "text-red-500")}
          >
            <Heart className="h-4 w-4" />
          </Button>
          <span>{stats.likes}</span>

          <Button variant="ghost" size="icon">
            <MessageCircle className="h-4 w-4" />
          </Button>
          <span>{stats.comments}</span>

          <Button variant="ghost" size="icon">
            <Repeat className="h-4 w-4" />
          </Button>
          <span>{stats.shares}</span>
        </div>

        <div className="flex items-center gap-1">
          <Eye className="w-4 h-4" />
          <span>{readCount} reads</span>
        </div>
      </CardFooter>
    </Card>
  );
}
