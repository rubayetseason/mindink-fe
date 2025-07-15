import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FollowingTab from "./_components/FollowingTab";
import ForYouTab from "./_components/ForYouTab";

const FeedPage = () => {
  return (
    <div>
      <Tabs defaultValue="following">
        <TabsList className="sticky top-0 w-full text-xl rounded-none">
          <TabsTrigger value="foryou">For You</TabsTrigger>
          <TabsTrigger value="following">Following</TabsTrigger>
        </TabsList>
        <TabsContent value="foryou">
          <ForYouTab></ForYouTab>
        </TabsContent>
        <TabsContent value="following">
          <FollowingTab></FollowingTab>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FeedPage;
