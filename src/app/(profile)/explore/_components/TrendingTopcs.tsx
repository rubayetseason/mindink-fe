import { trendingTopics } from "@/constants";
import { TrendingUp } from "lucide-react";

const TrendingTopcs = () => {
  return (
    <div className="px-5 mt-2">
      <h2 className="text-lg font-semibold flex items-center gap-2">
        <TrendingUp size={18} /> Trending Topics
      </h2>
      <div className="mt-4 flex flex-wrap gap-3">
        {trendingTopics.map((topic, index) => (
          <span
            key={index}
            className="px-4 py-2 text-sm rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
          >
            #{topic}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TrendingTopcs;
