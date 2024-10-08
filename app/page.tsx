import Link from "next/link";
import Image from "next/image";

import {
  ArrowIcon,
  BioIcon,
  CalenderIcon,
  LocationIcon,
} from "components/icons";
import { name, about, bio, avatar } from "lib/info";

export const revalidate = 60;

export default async function HomePage() {
  return (
    <section>
      <h1 className="font-bold text-3xl font-serif">{name}</h1>
      <p className="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200">
        {about()}
      </p>
      <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
        <Image
          alt={name}
          className=" w-[120px] h-[120px] object-cover object-center rounded-full grayscale"
          src={avatar}
          placeholder="blur"
          width={120}
          height={120}
          priority
        />
        <div className="mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 text-neutral-500 dark:text-neutral-400">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="#"
            className="flex items-center gap-2"
          >
            <LocationIcon />
            {`Kigali, Rwanda`}
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/Niyomugabofidel"
            className="flex items-center gap-2"
          >
            <CalenderIcon />
            {`started in 2019`}
          </a>
          <Link href="/work" className="flex items-center gap-2">
            <BioIcon />
            {`software developer`}
          </Link>
        </div>
      </div>
      <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
        {bio()}
      </p>
      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-500 dark:text-neutral-400">
        <li>
          <a
            className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/niyomugabo-fidele-5201312b7"
          >
            <ArrowIcon />
            <p className="h-7">follow me on linkedin</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/Niyomugabofidel"
          >
            <ArrowIcon />
            <p className="h-7">see my work on GitHub</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://docs.google.com/document/d/19u-w3QnlBRYO4teUwOT-YJSl0wi_KYTN-fR1LmeT4Eo/edit"
          >
            <ArrowIcon />
            <p className="h-7">read my resume</p>
          </a>
        </li>
      </ul>
    </section>
  );
}
