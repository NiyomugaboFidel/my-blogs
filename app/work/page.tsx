import React from "react";
import { Metadata } from "next";
const BlurImage = dynamic(() => import("components/BlurImage"));
import dynamic from "next/dynamic";
import { ArrowIcon } from "@/components/icons";

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
  const allBlogs = [
    {
      title: 'Micro AI',
      excerpt: "Micro AI is your go-to source for everything related to artificial intelligence. Discover the latest developments, research, and trends in AI technology. Whether you're looking for information on machine learning, neural networks, or AI applications, Micro AI provides comprehensive insights and resources to keep you informed and engaged with the evolving world of AI.",
      coverImage: '/img/project-1.png',
      date: '2024-10-03T00:00:00.000Z',
      link: 'https://micro-ai-ten.vercel.app',
      ogImage: {
        url: '/img/project-1.png'
      }
    },
    {
      title: 'nex-cent',
      excerpt: "This project is a web application built with React, Tailwind CSS, and Framer Motion. It features a modern, responsive design using Tailwind CSS for styling, while React handles the component-based structure. Framer Motion is used to add smooth animations and interactive elements. The application operates entirely on the client side, with no backend required.",
      coverImage: '/img/project-2.png',
      date: '2024-10-03T00:00:00.000Z',
      link: 'https://nex-cent-jade.vercel.app',
      ogImage: {
        url: '/img/project-2.png'
      }
    }
    

]
  return (
    <div>
      {/* 2 grid and one in mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {allBlogs.map((blog, index) => (
          <div
            key={index}
            className="text-white max-w-[300px] overflow-hidden flex flex-col justify-between"
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
