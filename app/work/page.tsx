import React from "react";
import { Metadata } from "next";
const BlurImage = dynamic(() => import("components/BlurImage"));
import dynamic from "next/dynamic";
import { ArrowIcon } from "@/components/icons";
import { allBlogs } from "./blogs";

const POSTS_PER_PAGE = 5;

interface Blog {
  title: string;
  date: string;
  slug: string;
  coverImage: string;
  excerpt: string;
}

interface BlogsProps {
  initialDisplayPosts: Array<Blog>;
  posts: Array<Blog>;
  pagination: {
    currentPage: number;
    totalPages: number;
  };
}

export const metadata: Metadata = {
  title: "Blog",
  description: "Read my thoughts on software development, design, and more.",
};

export default function Blogs() {

  return (
    <div>
      {/* 2 grid and one in mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2  gap-10">
        {allBlogs.map((blog, index) => (
          <div
            key={index}
            className="text-white max-w-[300px] overflow-hidden flex flex-col justify-between gap-[15px]"
          >
            <BlurImage
              image={blog.coverImage}
              alt={blog.title}
              width={300}
              height={200}
            />
            <div className="flex flex-col"  suppressHydrationWarning>
            <a href={blog.link} className="font-bold text-lg text-gray-800">{blog.title}</a>
            <a href={blog.link} className="text-md mt-2 text-gray-800">{blog.excerpt}</a>
           
              <p className="mt-2 text-[12px] text-gray-400">
                {new Date(blog.date).toLocaleDateString()}
              </p>  
        
              {/* read more button */}
            </div>
          </div>
        ))}
      </div>
      <ul className="flex flex-col md:flex-row mt-16 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-500 dark:text-neutral-400">
        <li>
          <a
            className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://dev.to/niyo_fidele"
          >
            <ArrowIcon />
            <p className="h-7">i also publish blogs on Dev.to</p>
          </a>
        </li>
      </ul>
    </div>
  );
}
