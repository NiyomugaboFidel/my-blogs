interface Blog {
    title: string;
    date: string;
    slug?: string; // Optional if not included in your blogs
    coverImage: string;
    excerpt: string;
    link: string;
    ogImage: {
      url: string;
    };
  }

import project1 from "../../public/images/img/project-1.svg";
import project2 from "../../public/images/img/e-commerce.jpeg";
import project3 from "../../public/images/img/stylos.png";
import project8 from "../../public/images/img/educationhubpng.png";
import project9 from "../../public/images/img/bookme.png";
import project4 from "../../public/images/img/boutique pic.png";
import project5 from "../../public/images/img/igitego hotel.png";
import project7 from "../../public/images/img/project7.png";
import project6 from "../../public/images/img/igitego apart.png";
import project10 from "../../public/images/img/godiscover.png";
import project11 from "../../public/images/img/carrental.png";
import greentor from "../../public/images/img/greetor.png"


  export const allBlogs: Blog[] = [
    {
      title: 'Micro AI',
      excerpt: "Micro AI is your go-to source for everything related to artificial intelligence. Discover the latest developments, research, and trends in AI technology. Whether you're looking for information on machine learning, neural networks, or AI applications, Micro AI provides comprehensive insights and resources to keep you informed and engaged with the evolving world of AI.",
      coverImage: '/images/blogs/micro-ai.png',
      date: '2023-10-13T00:00:00.000Z',
      link: 'https://micro-ai-ten.vercel.app',
      ogImage: {
        url: '/img/project-1.png'
      }
    },
    {
      title: 'nex-cent',
      excerpt: "This project is a web application built with React, Tailwind CSS, and Framer Motion. It features a modern, responsive design using Tailwind CSS for styling, while React handles the component-based structure. Framer Motion is used to add smooth animations and interactive elements. The application operates entirely on the client side, with no backend required.",
      coverImage: '/images/blogs/nex-cent.png',
      date: '2024-05-17T00:00:00.000Z',
      link: 'https://nex-cent-jade.vercel.app',
      ogImage: {
        url: '/img/project-2.png'
      }
    },
    {
      title: 'Kaptagat Education Center Kenya',
      excerpt: "A modern, user-friendly web application developed for Kaptagat Education Center in Kenya. Built with NextJS 14, Tailwind CSS, and Framer Motion, the site offers a responsive design, smooth animations, and interactive elements. Tailored for seamless navigation, it ensures an engaging online experience for students and parents alike.",
      coverImage: '/images/blogs/school-web.png',
      date: '2024-01-03T00:00:00.000Z',
      link: 'https://school-hazel-nu.vercel.app',
      ogImage: {
        url: '/img/project-2.png'
      }
    }, {
      title: 'Carpooling App',
      excerpt: 'A ride-sharing platform designed and developed using Figma and the MERN stack with Tailwind CSS and TypeScript, offering a user-friendly interface for carpooling services.',
      coverImage: project1,
      date: '2021-01-15T00:00:00.000Z',  // Start of 2021
      link: 'https://woohoocar.vercel.app',
      ogImage: {
        url: project1
      }
    },
    {
      title: 'E-commerce',
      excerpt: 'An Andela team project built using React, Redux Toolkit, Tailwind CSS, Node.js, and PostgreSQL to offer a seamless shopping experience for users.',
      coverImage: project2,
      date: '2021-04-10T00:00:00.000Z',  // Q2 of 2021
      link: 'https://destructors-ec-fe.vercel.app',
      ogImage: {
        url: project2
      }
    },
    {
      title: 'Stylos Consults',
      excerpt: 'Stylos Consults is a global stakeholder relations and consultancy firm that helps organizations navigate complex issues and build sustainable relationships with their stakeholders.',
      coverImage: project3,
      date: '2021-07-01T00:00:00.000Z',  // Mid-2021
      link: 'https://stylosconsult.com',
      ogImage: {
        url: project3
      }
    },
    {
      title: 'Igitego Boutique Hotel',
      excerpt: 'Igitego Boutique Hotel offers a modern, stylish reservation platform built using Next.js, Tailwind CSS, Node.js, and MongoDB.',
      coverImage: project4,
      date: '2021-10-05T00:00:00.000Z',  // Q4 of 2021
      link: 'https://boutique.igitegohotel.com',
      ogImage: {
        url: project4
      }
    },
    {
      title: 'Igitego Hotel',
      excerpt: 'Igitego Hotel is a hotel reservation website built using modern web technologies like Next.js, Tailwind CSS, Node.js, and MongoDB.',
      coverImage: project5,
      date: '2022-01-15T00:00:00.000Z',  // Start of 2022
      link: 'https://igitegohotel.com',
      ogImage: {
        url: project5
      }
    },
    {
      title: 'Igitego Apart Hotel',
      excerpt: 'Igitego Apart Hotel is a reservation platform for booking and managing stays at the hotel, built using the latest web technologies.',
      coverImage: project6,
      date: '2022-04-12T00:00:00.000Z',  // Q2 of 2022
      link: 'https://apart.igitegohotel.com',
      ogImage: {
        url: project6
      }
    },
    {
      title: 'E-tuze',
      excerpt: 'E-tuze is a web app that connects therapists with individuals facing mental health challenges such as depression, offering professional help and support.',
      coverImage: project7,
      date: '2022-07-05T00:00:00.000Z',  // Mid-2022
      link: 'https://e-tuze.netlify.app',
      ogImage: {
        url: project7
      }
    },
    {
      title: 'Education Hub',
      excerpt: 'Education Hub is a platform that assists students in finding universities that match their academic goals. It provides resources and guidance to make informed decisions about higher education.',
      coverImage: project8,
      date: '2022-10-20T00:00:00.000Z',  // Q4 of 2022
      link: 'https://www.educationhubafrica.com',
      ogImage: {
        url: project8
      }
    },
    {
      title: 'Bookme',
      excerpt: 'Bookme is a web application where hotels can post their listings and manage room bookings. It provides a platform for hotels to manage operations and improve customer experience.',
      coverImage: project9,
      date: '2023-01-30T00:00:00.000Z',  // Start of 2023
      link: 'https://bookme.rw',
      ogImage: {
        url: project9
      }
    },
    {
      title: 'Godiscover Africa',
      excerpt: 'Godiscover Africa helps tourists book tour packages, manage events, and provides users with a platform to book and organize their events efficiently.',
      coverImage: project10,
      date: '2023-04-18T00:00:00.000Z',  // Q2 of 2023
      link: 'https://www.godiscoverafrica.rw/',
      ogImage: {
        url: project10
      }
    },
    {
      title: 'Car Rental',
      excerpt: 'Car Rental is an online platform that allows clients to rent cars easily and efficiently, offering a seamless experience for vehicle rentals.',
      coverImage: project11,
      date: '2023-07-15T00:00:00.000Z',  // Mid-2023
      link: 'https://www.carrental.bookme.rw/',
      ogImage: {
        url: project11
      }
    },
    {
      title: 'Green Realtor revamped website',
      excerpt: 'Green Realtor\'s revamped website helps clients know more about the services and offerings of Green Realtor. It focuses on providing a user-friendly interface and better property showcasing.',
      coverImage: greentor,
      date: '2023-10-05T00:00:00.000Z',  // Q4 of 2023
      link: 'https://green-realtors.strettch.com/',
      ogImage: {
        url: greentor
      }
    }
  ];
  