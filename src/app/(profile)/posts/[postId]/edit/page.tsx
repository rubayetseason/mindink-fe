"use client";
import CreatePostEditor from "@/app/(profile)/create-post/_components/CreatePostEditor";
import GoBackButton from "@/components/shared/others/GoBackButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { uploadImage } from "@/utils/uploadImage";
import { Plus, Sparkles, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const EditPostPage = () => {
  const [bannerUrl, setBannerUrl] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");

  const handleAddTag = () => {
    const newTag = tagInput.trim();
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag]);
      setTagInput("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className="relative">
      <div className="fixed bottom-12 right-32">
        <div className="relative inline-flex group">
          <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#4b749f] via-[#0968e5] to-[#456fe8] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-pulse"></div>
          <h1
            className="px-8 py-4 relative inline-flex justify-center items-center gap-3 text-base font-bold text-black dark:text-white transition-all duration-200 bg-white dark:bg-black rounded-[30px] focus:outline-none"
            role="button"
          >
            <Sparkles /> Ask AI
          </h1>
        </div>
      </div>

      <div className="px-5 py-5 font-raleway flex items-center gap-4 border-b border-input">
        <GoBackButton></GoBackButton> Edit Post
      </div>

      <div>
        <div>
          <div>
            <input
              type="text"
              className="mx-3 my-5 px-5 py-4 w-full text-2xl font-medium border-b border-input outline-none"
              placeholder="What's on your mind? Enter a title here..."
            />
          </div>
          {/* images upload */}
          <div className="px-5 flex items-center gap-5">
            <div className="w-[30%] space-y-2">
              <Label
                htmlFor="file"
                className="bg-muted h-96 w-full flex items-center justify-center cursor-pointer m-auto overflow-hidden rounded-xl"
              >
                {thumbnailUrl ? (
                  <Image
                    src={thumbnailUrl}
                    alt="file"
                    width={1000}
                    height={1000}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <h1 className="text-gray-500 dark:text-gray-400 text-lg font-medium">
                    Thumbnail
                  </h1>
                )}
              </Label>
              <Input
                id="file"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={async (e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    const imageUrl = await uploadImage(file);
                    if (imageUrl) {
                      setThumbnailUrl(imageUrl);
                    }
                  }
                }}
              />
            </div>
            <div className="w-[70%] space-y-2">
              <Label
                htmlFor="file"
                className="bg-muted h-96 w-full flex items-center justify-center cursor-pointer m-auto overflow-hidden rounded-xl"
              >
                {bannerUrl ? (
                  <Image
                    src={bannerUrl}
                    alt="file"
                    width={1000}
                    height={1000}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <h1 className="text-gray-500 dark:text-gray-400 text-lg font-medium">
                    Banner
                  </h1>
                )}
              </Label>
              <Input
                id="file"
                type="file"
                accept="image/*"
                className="hidden"
                onChange={async (e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    const imageUrl = await uploadImage(file);
                    if (imageUrl) {
                      setBannerUrl(imageUrl);
                    }
                  }
                }}
              />
            </div>
          </div>
        </div>

        <div className="mx-3">
          <textarea
            className="my-5 px-5 py-4 w-full text-lg
                   font-normal border-b border-input overflow-hidden resize-none outline-none"
            placeholder="Enter a short description here..."
            rows={3}
          ></textarea>
        </div>

        <div className="px-5 space-y-3">
          <div className="flex items-center gap-2">
            <Input
              type="text"
              placeholder="Enter tag..."
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              className="h-12 text-xl w-full max-w-sm"
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleAddTag();
                }
              }}
            />
            <button
              type="button"
              onClick={handleAddTag}
              className="px-5 py-2 bg-black dark:bg-white text-white dark:text-black flex items-center gap-2 rounded-full"
            >
              <Plus className="w-5 h-5" /> Add Tag
            </button>
          </div>

          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="flex items-center gap-1 px-3 py-1 rounded-full bg-muted text-sm"
                >
                  {tag}
                  <X
                    className="w-4 h-4 cursor-pointer"
                    onClick={() => handleRemoveTag(tag)}
                  />
                </span>
              ))}
            </div>
          )}
        </div>

        <CreatePostEditor></CreatePostEditor>
      </div>
    </div>
  );
};

export default EditPostPage;
