import React from 'react';

const TechLogos = () => {
  const technologies = [
    { name: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
    { name: 'Vue', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg' },
    { name: 'JavaScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png' },
    { name: 'TypeScript', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg' },
    { name: 'Express', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png' },
    { name: 'Node.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg' },
    { name: 'Figma', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg' },
    { name: 'Next.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg' },
    { name: 'Java', logo: 'https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg' },
    { name: 'Git', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg' },
    // { name: 'Vercel', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Vercel_logo.svg' },
    { name: 'PHP', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg' },
    { name: 'CSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/62/CSS3_logo.svg' },
    { name: 'Sass', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg' },
    { name: 'Tailwind CSS', logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
    { name: 'Bootstrap', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg' },
    // { name: 'REST API', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Restfull.png' },
  ];

  return (
    <>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4">
      {technologies.map((tech, index) => (
        <div key={index} className="flex flex-col items-center">
          <img
            src={tech.logo}
            alt={`${tech.name} logo`}
            className="w-8 h-8 object-contain mb-2"
          />
          <span className="text-center text-sm font-medium">{tech.name}</span>
        </div>
      ))} 
    </div> 
    </>
  );
};

export default TechLogos;
