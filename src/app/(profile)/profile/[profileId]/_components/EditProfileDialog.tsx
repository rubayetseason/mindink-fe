"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalendarIcon, MapPin, User } from "lucide-react";
import { uploadImage } from "@/utils/uploadImage";
import Image from "next/image";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

const EditProfileDialog = () => {
  const [name, setName] = useState("John Doe");
  const [username, setUsername] = useState("johndoe");
  const [location, setLocation] = useState("Dhaka, Bangladesh");
  const [dob, setDob] = useState<Date | undefined>(new Date("2025-08-05"));
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [bannerUrl, setBannerUrl] = useState("");

  const handleSubmit = () => {
    console.log({
      name,
      username,
      location,
      dob: dob ? dob.toISOString() : null,
      thumbnailUrl,
      bannerUrl,
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default" className="flex items-center gap-2">
          <User size={16} /> Edit Profile
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-2xl dark:bg-background bg-white rounded-xl overflow-y-auto max-h-[90vh]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Edit Your Profile</DialogTitle>
        </DialogHeader>

        {/* Cover + Profile Picture */}
        <div className="relative h-52 w-full mt-2 mb-20">
          <Label
            htmlFor="banner"
            className="absolute inset-0 cursor-pointer overflow-hidden"
          >
            {bannerUrl ? (
              <Image
                src={bannerUrl}
                alt="Cover"
                fill
                className="object-cover"
              />
            ) : (
              <div className="h-full w-full bg-gray-600" />
            )}
          </Label>
          <Input
            id="banner"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={async (e) => {
              const file = e.target.files?.[0];
              if (file) {
                const url = await uploadImage(file);
                if (url) setBannerUrl(url);
              }
            }}
          />

          <Label
            htmlFor="profile"
            className="size-36 bg-gray-300 absolute -bottom-16 left-4 border-4 border-background dark:border-black rounded-full cursor-pointer overflow-hidden"
          >
            {thumbnailUrl ? (
              <Image
                src={thumbnailUrl}
                alt="Profile"
                fill
                className="object-cover"
              />
            ) : null}
          </Label>
          <Input
            id="profile"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={async (e) => {
              const file = e.target.files?.[0];
              if (file) {
                const url = await uploadImage(file);
                if (url) setThumbnailUrl(url);
              }
            }}
          />
        </div>

        {/* Form Fields */}
        <div className="space-y-5 px-2 md:px-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your full name"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="@username"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="location" className="flex items-center gap-1">
              <MapPin size={16} /> Location
            </Label>
            <Input
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="City, Country"
            />
          </div>

          {/* DOB - ShadCN Date Picker */}
          <div className="space-y-2">
            <Label className="flex items-center gap-1">
              <CalendarIcon size={16} /> Date of Birth
            </Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !dob && "text-muted-foreground"
                  )}
                >
                  {dob ? format(dob, "PPP") : <span>Select a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={dob}
                  onSelect={setDob}
                  captionLayout="dropdown"
                  fromYear={1960}
                  toYear={new Date().getFullYear()}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <DialogFooter className="px-2 md:px-4 mt-6">
          <Button type="button" onClick={handleSubmit} className="w-full">
            Save Changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default EditProfileDialog;
