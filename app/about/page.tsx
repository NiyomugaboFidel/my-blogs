/* eslint-disable react/no-unescaped-entities */
"use client"; // Add this line to enable client-side interactivity

import type { Metadata } from "next";
import {
  GitHubIcon,
  ArrowIcon,
  LinkedIn,
  WhatsAppIcon,
} from "@/components/icons";

export const metadata: Metadata = {
  title: "About",
  description: "Software Developer | Fidele Niyomugabo",
};

export default function AboutPage() {
  const phoneNumber = '250798366977'; // Add your WhatsApp number here

  const handleWhatsAppRedirect = () => {
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, '_blank');
  };

  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">About Me</h1>
      <p className="my-5 text-neutral-800 dark:text-neutral-200">
        Hey, I'm Fidele.
      </p>
      <div className="prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200">
        <p>
          I'm a <b>Software Developer</b> <br />
        </p>

        <p>
          With over {new Date().getFullYear() - 2019} years of experience in software development, I specialize in web and mobile app development. I've successfully launched numerous apps across various platforms. I'm passionate about tackling complex challenges, particularly those that make a meaningful impact on people's lives.
        </p>

        <div className="flex flex-col gap-2 md:flex-row md:gap-2 mt-8">
          <button
            onClick={handleWhatsAppRedirect}
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <WhatsAppIcon />
              <div className="ml-3 font-semibold">WhatsApp</div>
            </div>
            <ArrowIcon />
          </button>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/NiyomugaboFidel"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <GitHubIcon />
              <div className="ml-3">GitHub</div>
            </div>
            <ArrowIcon />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/niyomugabo-fidele-5201312b7"
            className="flex w-full border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 no-underline items-center text-neutral-800 dark:text-neutral-200 hover:dark:bg-neutral-900 hover:bg-neutral-100 transition-all justify-between"
          >
            <div className="flex items-center">
              <LinkedIn />
              <div className="ml-3">LinkedIn</div>
            </div>
            <ArrowIcon />
          </a>
        </div>
      </div>
    </section>
  );
}
