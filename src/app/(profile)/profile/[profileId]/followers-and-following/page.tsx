"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { UserRoundCheck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import GoBackButton from "@/components/shared/others/GoBackButton";

// Mock data
const dummyUsers = new Array(6).fill(0).map((_, i) => ({
  id: i,
  name: `User ${i + 1}`,
  avatar: `https://i.pravatar.cc/150?img=${i + 1}`,
  bio: "Lorem ipsum dolor sit amet.",
}));

export default function FollowersAndFollowingPage() {
  const searchParams = useSearchParams();
  const [activeTab, setActiveTab] = useState<"followers" | "following">(
    "followers"
  );

  useEffect(() => {
    const tabParam = searchParams.get("tab");
    if (tabParam === "following") setActiveTab("following");
    else setActiveTab("followers");
  }, [searchParams]);

  return (
    <div className="font-raleway">
      <div className="px-5 py-5 flex items-center gap-4 border-b border-input">
        <GoBackButton></GoBackButton> Followers & Following
      </div>
      <Tabs
        defaultValue={activeTab}
        value={activeTab}
        onValueChange={(value) => {
          if (value === "followers" || value === "following") {
            setActiveTab(value);
          }
        }}
        className="px-5 w-full"
      >
        <TabsList className="w-full flex justify-start">
          <TabsTrigger value="followers">Followers</TabsTrigger>
          <TabsTrigger value="following">Following</TabsTrigger>
        </TabsList>

        <TabsContent value="followers" className="mt-6 space-y-6">
          {dummyUsers.map((user) => (
            <Link key={user.id} href="/profile/123">
              <div className="my-5 flex items-center gap-4">
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
                    <p className="text-sm text-muted-foreground">{user.bio}</p>
                  </div>
                  <Button variant="outline">
                    <UserRoundCheck className="w-4 h-4 mr-1" /> Follow Back
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </TabsContent>

        <TabsContent value="following" className="mt-6 space-y-6">
          {dummyUsers.map((user) => (
            <Link key={user.id} href="/profile/123">
              <div className="my-5 flex items-center gap-4">
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
                    <p className="text-sm text-muted-foreground">{user.bio}</p>
                  </div>
                  <Button variant="secondary">
                    <UserRoundCheck className="w-4 h-4 mr-1" /> Following
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
}
