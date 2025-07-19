import GoBackButton from "@/components/shared/others/GoBackButton";
import MiniBlogCard from "@/components/shared/others/MiniBlogCard";
import SearchForm from "./_components/SearchForm";
import TrendingTopcs from "./_components/TrendingTopcs";

const ExplorePage = () => {
  return (
    <div className="min-h-screen font-raleway">
      {/* Header */}
      <div className="px-5 py-5 flex items-center gap-4 border-b border-input">
        <GoBackButton />
        <h1 className="text-2xl font-semibold">Explore</h1>
      </div>

      {/* Search Bar */}
      <SearchForm></SearchForm>
      {/* Trending Section */}
      <TrendingTopcs></TrendingTopcs>

      {/* Mini Cards */}
      <div className="mt-10">
        <MiniBlogCard />
      </div>
    </div>
  );
};

export default ExplorePage;
