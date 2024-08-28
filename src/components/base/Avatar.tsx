import React from "react";
import LazyImage from "./LazyImage";
import { AVATAR_URL } from "@/constants/common";

interface AvatarProps {
  url?: string;
  alt?: string;
  className?: string;
}
const Avatar = ({ url, alt = "", className = "" }: AvatarProps) => {
  return (
    <LazyImage
      imageUrl={url}
      alt={alt}
      fallBackIcon={
        <img src={AVATAR_URL} width={56} height={56} className="rounded-full" />
      }
      imgStyles={`w-14 h-14 rounded-full p-[2px] border-2 border-red-500 object-contain cursor-pointer ${className}`}
    />
  );
};

export default Avatar;
