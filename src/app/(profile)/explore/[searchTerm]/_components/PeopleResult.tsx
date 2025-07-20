import { Button } from "@/components/ui/button";
import { blogPosts } from "@/constants";
import { UserRoundCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const PeopleResult = () => {
  return (
    <div>
      <div className="my-5 flex justify-between items-center">
        <h1 className="text-2xl font-medium">People</h1>
        <h1 className="text-lg font-medium">4 Results Found</h1>
      </div>
      {blogPosts?.map((post) => (
        <div key={post?.postId} className="mt-9 flex items-center gap-4">
          <Image
            src={post?.user.avatar}
            alt={post?.user.name}
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
          <div className="flex-1 flex justify-between items-center">
            <div>
              <p className="font-medium">{post?.user.name}</p>
              <p className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic,
                odit!
              </p>
            </div>
            <div>
              <Link href={`/posts/${post?.postId}`}>
                <Button>
                  <UserRoundCheck /> Following
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PeopleResult;
