import GoBackButton from "@/components/shared/others/GoBackButton";
import { type Metadata } from "next";
import PeopleResult from "./_components/PeopleResult";
import PostResult from "./_components/PostResult";
import SearchForm from "../_components/SearchForm";
import HashtagResult from "./_components/HashtagResult";

export const metadata: Metadata = {
  title: "Search Result",
  description: "View the search result",
};

// ✅ Fix: Both params and searchParams must be Promise types
type Props = {
  params: Promise<{ searchTerm: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

const SearchResultPage = async ({ params, searchParams }: Props) => {
  const { searchTerm } = await params;
  const search = await searchParams;
  console.log(searchTerm, search);

  return (
    <div className="px-5 font-raleway">
      <div className="py-5 flex items-center gap-4 border-b border-input">
        <GoBackButton></GoBackButton> Search Results
      </div>
      <SearchForm></SearchForm>
      <PeopleResult></PeopleResult>
      <PostResult></PostResult>
      <HashtagResult></HashtagResult>
    </div>
  );
};

export default SearchResultPage;
