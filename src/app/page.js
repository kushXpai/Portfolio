"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../components/ui/lamp.jsx";
import { twMerge } from "tailwind-merge";
import { calsans } from "../fonts/calsans.js";
import { TracingBeam } from "../components/ui/tracing-beam.jsx";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import { AnimatedTooltip } from "../components/ui/animated-tooltip";
import css from "styled-jsx/css";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-slate-950">
      <div className="w-full">
        <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
          >
            Kush Pai <br /> Software Developer
          </motion.h1>
        </LampContainer>
      </div>
      {/* <div className="w-full">
        <TracingBeam className="px-6">
          <div className="max-w-2xl mx-auto antialiased pt-4 relative">
            {dummyContent.map((item, index) => (
              <div key={`content-${index}`} className="mb-10">
                <h2 className="bg-black text-white rounded-full text-sm w-fit px-4 py-1 mb-4">
                  {item.badge}
                </h2>

                <p className="text-xl text-white mb-4">
                  {item.title}
                </p>

                <div className="text-sm text-white prose prose-sm dark:prose-invert">
                  {item?.image && (
                    <Image
                      src={item.image}
                      alt="blog thumbnail"
                      height="1000"
                      width="1000"
                      className="rounded-lg mb-10 object-cover"
                    />
                  )}
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </TracingBeam>
      </div> */}

      <div className="w-full mx-auto" style={{ maxWidth: '80%' }}>
        <div className="flex flex-wrap -m-2">
          <div className="w-full sm:w-1/2 xl:w-1/4 p-2">
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                  {projects[0].name}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4 mb-6">
                  <Image
                    src={projects[0].image}
                    height="1000"
                    width="1000"
                    className="h-45 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                  {projects[0].description}
                </CardItem>
                <div className=" mb-10 mt-5">
                  <CardItem translateZ={20} as={Link} href={projects[0].github} target="__blank" className="rounded-xl text-xs font-normal dark:text-white">
                    Github →
                  </CardItem>
                </div>

                <div className="flex flex-row w-full">
                  <AnimatedTooltip items={projectTechStack[0]} />
                </div>
              </CardBody>
            </CardContainer>
          </div>
          <div className="w-full sm:w-1/2 xl:w-1/4 p-2">
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                  {projects[1].name}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4 mb-6">
                  <Image
                    src={projects[1].image}
                    height="1000"
                    width="1000"
                    className="h-45 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                  {projects[1].description}
                </CardItem>
                <div className=" mb-10 mt-5">
                  <CardItem translateZ={20} as={Link} href={projects[1].appstore} target="__blank" className="rounded-xl text-xs font-normal dark:text-white">
                    App Store →
                  </CardItem>
                </div>

                <div className="flex flex-row w-full">
                  <AnimatedTooltip items={projectTechStack[1]} />
                </div>
              </CardBody>
            </CardContainer>
          </div>
          <div className="w-full sm:w-1/2 xl:w-1/4 p-2">
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                  {projects[2].name}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4 mb-6">
                  <Image
                    src={projects[2].image}
                    height="1000"
                    width="1000"
                    className="h-45 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                  {projects[2].description}
                </CardItem>
                <div className=" mb-10 mt-5">
                  <CardItem translateZ={20} as={Link} href={""} target="__blank" className="rounded-xl text-xs font-normal dark:text-white text-white">
                    Try now →
                  </CardItem>
                </div>

                <div className="flex flex-row w-full">
                  <AnimatedTooltip items={projectTechStack[2]} />
                </div>
              </CardBody>
            </CardContainer>
          </div>
          <div className="w-full sm:w-1/2 xl:w-1/4 p-2">
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                  {projects[3].name}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4 mb-6">
                  <Image
                    src={projects[3].image}
                    height="1000"
                    width="1000"
                    className="h-45 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                  {projects[3].description}
                </CardItem>
                <div className=" mb-10 mt-5">
                  <CardItem translateZ={20} as={Link} href={projects[3].github} target="__blank" className="rounded-xl text-xs font-normal dark:text-white">
                    Github →
                  </CardItem>
                </div>

                <div className="flex flex-row w-full">
                  <AnimatedTooltip items={projectTechStack[3]} />
                </div>
              </CardBody>
            </CardContainer>
          </div>
          <div className="w-full sm:w-1/2 xl:w-1/4 p-2">
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                  {projects[4].name}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4 mb-6">
                  <Image
                    src={projects[4].image}
                    height="1000"
                    width="1000"
                    className="h-45 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                  {projects[4].description}
                </CardItem>
                <div className=" mb-10 mt-5">
                  <CardItem translateZ={20} as={Link} href={projects[4].github} target="__blank" className="rounded-xl text-xs font-normal dark:text-white">
                    Github →
                  </CardItem>
                </div>

                <div className="flex flex-row w-full">
                  <AnimatedTooltip items={projectTechStack[4]} />
                </div>
              </CardBody>
            </CardContainer>
          </div>
          <div className="w-full sm:w-1/2 xl:w-1/4 p-2">
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                  {projects[5].name}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4 mb-6">
                  <Image
                    src={projects[5].image}
                    height="1000"
                    width="1000"
                    className="h-45 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                  {projects[5].description}
                </CardItem>
                <div className=" mb-10 mt-5">
                  <CardItem translateZ={20} as={Link} href={projects[5].github} target="__blank" className="rounded-xl text-xs font-normal dark:text-white">
                    Github →
                  </CardItem>
                </div>

                <div className="flex flex-row w-full">
                  <AnimatedTooltip items={projectTechStack[5]} />
                </div>
              </CardBody>
            </CardContainer>
          </div>
          <div className="w-full sm:w-1/2 xl:w-1/4 p-2">
            <CardContainer className="inter-var">
              <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-6 border">
                <CardItem translateZ="50" className="text-xl font-bold text-neutral-600 dark:text-white">
                  {projects[6].name}
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4 mb-6">
                  <Image
                    src={projects[6].image}
                    height="1000"
                    width="1000"
                    className="h-45 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt="thumbnail"
                  />
                </CardItem>
                <CardItem as="p" translateZ="60" className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
                  {projects[6].description}
                </CardItem>
                <div className=" mb-10 mt-5">
                  <CardItem translateZ={20} as={Link} href={projects[6].github} target="__blank" className="rounded-xl text-xs font-normal dark:text-white">
                    Github →
                  </CardItem>
                </div>

                <div className="flex flex-row w-full">
                  <AnimatedTooltip items={projectTechStack[6]} />
                </div>
              </CardBody>
            </CardContainer>
          </div>
        </div>
      </div>


    </main>
  );
}


const dummyContent = [
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Sit duis est minim proident non nisi velit non consectetur. Esse
          adipisicing laboris consectetur enim ipsum reprehenderit eu deserunt
          Lorem ut aliqua anim do. Duis cupidatat qui irure cupidatat incididunt
          incididunt enim magna id est qui sunt fugiat. Laboris do duis pariatur
          fugiat Lorem aute sit ullamco. Qui deserunt non reprehenderit dolore
          nisi velit exercitation Lorem qui do enim culpa. Aliqua eiusmod in
          occaecat reprehenderit laborum nostrud fugiat voluptate do Lorem culpa
          officia sint labore. Tempor consectetur excepteur ut fugiat veniam
          commodo et labore dolore commodo pariatur.
        </p>
        <p>
          Dolor minim irure ut Lorem proident. Ipsum do pariatur est ad ad
          veniam in commodo id reprehenderit adipisicing. Proident duis
          exercitation ad quis ex cupidatat cupidatat occaecat adipisicing.
        </p>
        <p>
          Tempor quis dolor veniam quis dolor. Sit reprehenderit eiusmod
          reprehenderit deserunt amet laborum consequat adipisicing officia qui
          irure id sint adipisicing. Adipisicing fugiat aliqua nulla nostrud.
          Amet culpa officia aliquip deserunt veniam deserunt officia
          adipisicing aliquip proident officia sunt.
        </p>
      </>
    ),
    badge: "React",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
        <p>
          In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse
          veniam fugiat esse qui sint ad sunt reprehenderit do qui proident
          reprehenderit. Laborum exercitation aliqua reprehenderit ea sint
          cillum ut mollit.
        </p>
      </>
    ),
    badge: "Changelog",
    image:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=3540&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet",
    description: (
      <>
        <p>
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
      </>
    ),
    badge: "Launch Week",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=3506&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const projects = [
  {
    id: 0,
    name: "Portfolio Website",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Responsive portfolio website developed using React, Tailwind CSS, and JavaScript. It showcases my personal projects and highlights software development skills.",
    github: "https://github.com/kushXpai/Portfolio",
    github2: "",
    appstore: "",
    playstore: "",
  },
  {
    id: 1,
    name: "KP FAST",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "This is a cross-platform fitness app developed with Flutter and Firebase. It provides real-time data access, and user-friendly interfaces, achieving a 55% increase in user engagement.",
    github: "",
    github2: "",
    appstore: "https://apps.apple.com/in/app/kp-fast/id6505094329",
    playstore: "",
  },
  {
    id: 2,
    name: "GTA Crimson Streets",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "This is an immersive 3D open-world game developed with Unity and C#. It blends intricate missions and diverse gameplay, showcasing expertise in game development and storytelling.",
    github: "",
    github2: "",
    appstore: "",
    playstore: "",
  },
  {
    id: 3,
    name: "TinyURLer",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "This is a URL shortening service developed with React and MongoDB. It optimizes user operations by streamlining URL management and enhancing efficiency.",
    github: "https://github.com/kushXpai/url-shortener-software",
    github2: "",
    appstore: "",
    playstore: "",
  },
  {
    id: 4,
    name: "Sudoku Solver",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "This is an advanced Sudoku solver using backtracking algorithms. It significantly reduces problem-solving time, improving algorithm efficiency and performance.",
    github: "https://github.com/kushXpai/sudoku-solver",
    github2: "",
    appstore: "",
    playstore: "",
  },
  {
    id: 5,
    name: "Finchat",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "This is a financial chatbot developed using Flask and Pandas. It enables seamless Natural Language Processing and financial data analysis, enhancing query handling.",
    github: "https://github.com/kushXpai/FinChat",
    github2: "",
    appstore: "",
    playstore: "",
  },
  {
    id: 6,
    name: "Chef's Hat",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "This is a recipe generator app developed with Flutter, Django, and GraphQL. It features ingredient-based suggestions, integrated payment, enhances community engagement etc.",
    github: "https://github.com/kushXpai/chefshat-frontend",
    github2: "https://github.com/kushXpai/chefshat-backend",
    appstore: "",
    playstore: "",
  },
]

const techStackUrl = {
  "JavaScript" : ["JavaScript", "Language", "https://github.com/kushXpai/Icons/blob/main/Languages/javascript.jpg?raw=true"],
  "Python" : ["Python", "Language", "https://github.com/kushXpai/Icons/blob/main/Languages/python.jpg?raw=true"],
  "Java" : ["Java", "Language", "https://github.com/kushXpai/Icons/blob/main/Languages/java.jpg?raw=true"],
  "C#" : ["C#", "Language", "https://github.com/kushXpai/Icons/blob/main/Languages/csharp.jpg?raw=true"],
  "C++" : ["C++", "Language", "https://github.com/kushXpai/Icons/blob/main/Languages/cplusplus.jpg?raw=true"],
  "Swift" : ["Swift", "Language", "https://github.com/kushXpai/Icons/blob/main/Languages/swift.jpg?raw=true"],
  "Kotlin" : ["Kotlin", "Language", "https://github.com/kushXpai/Icons/blob/main/Languages/kotlin.jpg?raw=true"],
  "Typescript" : ["Typescript", "Language", "https://github.com/kushXpai/Icons/blob/main/Languages/typescript.jpg?raw=true"],
  "R" : ["R", "Language", "https://github.com/kushXpai/Icons/blob/main/Languages/r.jpg?raw=true"],
  "Dart" : ["Dart", "Language", "https://github.com/kushXpai/Icons/blob/main/Languages/dart.jpg?raw=true"],
  "React" : ["React", "Frontend Framework", "https://github.com/kushXpai/Icons/blob/main/Frontend-Frameworks-Libraries/react.jpg?raw=true"],
  "Vue" : ["Vue", "Frontend Framework", "https://github.com/kushXpai/Icons/blob/main/Frontend-Frameworks-Libraries/vuejs.jpg?raw=true"],
  "HTML5" : ["HTML5", "Frontend Technologies", "https://github.com/kushXpai/Icons/blob/main/Frontend-Tools-Technologies/html5.jpg?raw=true"],
  "CSS3" : ["CSS3", "Frontend Technologies", "https://github.com/kushXpai/Icons/blob/main/Frontend-Tools-Technologies/css3.jpg?raw=true"],
  "Bootstrap" : ["Bootstrap", "Frontend Technologies", "https://github.com/kushXpai/Icons/blob/main/Frontend-Tools-Technologies/bootstrap.jpg?raw=true"],
  "Tailwind" : ["Tailwind CSS", "Frontend Technologies", "https://github.com/kushXpai/Icons/blob/main/Frontend-Tools-Technologies/tailwindcss.jpg?raw=true"],
  "MaterialUI" : ["Material-UI", "Frontend Technologies", "https://github.com/kushXpai/Icons/blob/main/Frontend-Tools-Technologies/materialui.jpg?raw=true"],
  "JQuery" : ["JQuery", "Frontend Technologies", "https://github.com/kushXpai/Icons/blob/main/Frontend-Tools-Technologies/jquery.jpg?raw=true"],
  "Vite" : ["Vite", "Frontend Build Tools", "https://github.com/kushXpai/Icons/blob/main/Frontend-Build-Tools/vitejs.jpg?raw=true"],
  "Node" : ["Node.js", "Backend Frameworks", "https://github.com/kushXpai/Icons/blob/main/Backend-Frameworks/nodejs.jpg?raw=true"],
  "Django" : ["Django", "Backend Frameworks", "https://github.com/kushXpai/Icons/blob/main/Backend-Frameworks/django.jpg?raw=true"],
  "Flask" : ["Flask", "Backend Frameworks", "https://github.com/kushXpai/Icons/blob/main/Backend-Frameworks/flask.jpg?raw=true"],
  "Springboot" : ["Springboot", "Backend Frameworks", "https://github.com/kushXpai/Icons/blob/main/Backend-Frameworks/springboot.jpg?raw=true"],
  "MySQL" : ["MySQL", "Backend Relational Databases", "https://github.com/kushXpai/Icons/blob/main/Backend-Relational-Databases/mysql.jpg?raw=true"],
  "PostgreSQL" : ["PostgreSQL", "Backend Relational Databases", "https://github.com/kushXpai/Icons/blob/main/Backend-Relational-Databases/postgresql.jpg?raw=true"],
  "SQLite" : ["SQLite", "Backend Relational Databases", "https://github.com/kushXpai/Icons/blob/main/Backend-Relational-Databases/sqlite.jpg?raw=true"],
  "MongoDB" : ["MongoDB", "Backend NoSQL Databases", "https://github.com/kushXpai/Icons/blob/main/Backend-NoSQL-Databses/mongodb.jpg?raw=true"],
  "Firebase" : ["Firebase", "Backend NoSQL Databases", "https://github.com/kushXpai/Icons/blob/main/Backend-NoSQL-Databses/firebase.jpg?raw=true"],
  "Docker" : ["Docker", "DevOps", "https://github.com/kushXpai/Icons/blob/main/DevOps-Cloud/docker.jpg?raw=true"],
  "Kubernetes" : ["Kubernetes", "DevOps", "https://github.com/kushXpai/Icons/blob/main/DevOps-Cloud/kubernetes.jpg?raw=true"],
  "GCP" : ["Google Cloud Platform", "Cloud Technologies", "https://github.com/kushXpai/Icons/blob/main/DevOps-Cloud/googlecloudplatform.jpg?raw=true"],
  "Vercel" : ["Vercel", "Cloud Technologies", "https://github.com/kushXpai/Icons/blob/main/DevOps-Cloud/vercel.jpg?raw=true"],
  "Git" : ["Git", "Version Control", "https://github.com/kushXpai/Icons/blob/main/Version-Control/git.jpg?raw=true"],
  "GitHub" : ["GitHub", "Version Control", "https://github.com/kushXpai/Icons/blob/main/Version-Control/github.jpg?raw=true"],
  "GitLab" : ["GitLab", "Version Control", "https://github.com/kushXpai/Icons/blob/main/Version-Control/gitlab.jpg?raw=true"],
  "ReactNative" : ["React Native", "Mobile Development", "https://github.com/kushXpai/Icons/blob/main/Mobile-Development/react.jpg?raw=true"],
  "Flutter" : ["Flutter", "Mobile Development", "https://github.com/kushXpai/Icons/blob/main/Mobile-Development/flutter.jpg?raw=true"],
  "SwiftUI" : ["Swift UI", "Mobile Development", "https://github.com/kushXpai/Icons/blob/main/Mobile-Development/swift.jpg?raw=true"],
  "KotlinUI" : ["Kotlin", "Mobile Development", "https://github.com/kushXpai/Icons/blob/main/Mobile-Development/kotlin.jpg?raw=true"],
  "Andriod" : ["Andriod", "Mobile Development", "https://github.com/kushXpai/Icons/blob/main/Mobile-Development/andriod.jpg?raw=true"],
  "Apple" : ["Apple", "Mobile Development", "https://github.com/kushXpai/Icons/blob/main/Mobile-Development/apple.jpg?raw=true"],
  "AppleStore" : ["App Store", "Mobile Development", "https://github.com/kushXpai/Icons/blob/main/Mobile-Development/apple.jpg?raw=true"],
  "GraphQL" : ["GraphQL", "API Development", "https://github.com/kushXpai/Icons/blob/main/API-Development-Tools/graphql.jpg?raw=true"],
  "REST" : ["REST", "API Development", "https://github.com/kushXpai/Icons/blob/main/API-Development-Tools/djangorest.jpg?raw=true"],
  "Postman" : ["GraphQL", "API Testing", "https://github.com/kushXpai/Icons/blob/main/API-Development-Tools/postman.jpg?raw=true"],
  "VSCode" : ["VS Code", "Integrated Development Environment", "https://github.com/kushXpai/Icons/blob/main/Essential-Tools/vscode.jpg?raw=true"],
  "VS" : ["Visual Studio", "Integrated Development Environment", "https://github.com/kushXpai/Icons/blob/main/Essential-Tools/visualstudio.jpg?raw=true"],
  "XCode" : ["XCode", "Integrated Development Environment", "https://github.com/kushXpai/Icons/blob/main/Essential-Tools/xcode.jpg?raw=true"],
  "AndriodStudio" : ["AndriodStudio", "Integrated Development Environment", "https://github.com/kushXpai/Icons/blob/main/Essential-Tools/andriodstudio.jpg?raw=true"],
  "PyTorch" : ["PyTorch", "Integrated Development Environment", "https://github.com/kushXpai/Icons/blob/main/Machine-Learning/pytorch.jpg?raw=true"],
  "SciKitLearn" : ["SciKit-Learn", "Integrated Development Environment", "https://github.com/kushXpai/Icons/blob/main/Machine-Learning/scikitlearn.jpg?raw=true"],
  "TensorFlow" : ["Tensor Flow", "Integrated Development Environment", "https://github.com/kushXpai/Icons/blob/main/Machine-Learning/tensorflow.jpg?raw=true"],
  "NPM" : ["NPM", "Package Manager", "https://github.com/kushXpai/Icons/blob/main/Package-Managers/npm.jpg?raw=true"],
  "Yarn" : ["Yarn", "Package Manager", "https://github.com/kushXpai/Icons/blob/main/Package-Managers/yarn.jpg?raw=true"],
  "Unity" : ["Unity", "Game Development", "https://github.com/kushXpai/Icons/blob/main/Game-Development/unity.jpg?raw=true"],
  "UnReal" : ["UnReal Engine", "Game Development", "https://github.com/kushXpai/Icons/blob/main/Game-Development/unrealengine.jpg?raw=true"],
  "Blender" : ["Blender", "3D Modeling", "https://github.com/kushXpai/Icons/blob/main/Game-Development/blender.jpg?raw=true"],
  "Numpy" : ["Numpy", "Libraries", "https://github.com/kushXpai/Icons/blob/main/Libraries/numpy.jpg?raw=true"],
  "Pandas" : ["Pandas", "Libraries", "https://github.com/kushXpai/Icons/blob/main/Libraries/pandas.jpg?raw=true"],
}

const projectTechStack = [
  // Portfolio
  [
    {
      id: 1,
      name: techStackUrl['React'][0],
      designation: techStackUrl['React'][1],
      image: techStackUrl['React'][2],
    },
    {
      id: 2,
      name: techStackUrl['JavaScript'][0],
      designation: techStackUrl['JavaScript'][1],
      image: techStackUrl['JavaScript'][2],
    },
    {
      id: 3,
      name: techStackUrl['Tailwind'][0],
      designation: techStackUrl['Tailwind'][1],
      image: techStackUrl['Tailwind'][2],
    },
    {
      id: 4,
      name: techStackUrl['NPM'][0],
      designation: techStackUrl['NPM'][1],
      image: techStackUrl['NPM'][2],
    },
    {
      id: 5,
      name: techStackUrl['Node'][0],
      designation: techStackUrl['Node'][1],
      image: techStackUrl['Node'][2],
    },
    {
      id: 6,
      name: techStackUrl['Vercel'][0],
      designation: techStackUrl['Vercel'][1],
      image: techStackUrl['Vercel'][2],
    },
    {
      id: 7,
      name: techStackUrl['GitHub'][0],
      designation: techStackUrl['GitHub'][1],
      image: techStackUrl['GitHub'][2],
    },
  ],
  // KP FAST
  [
    {
      id: 1,
      name: techStackUrl['Flutter'][0],
      designation: techStackUrl['Flutter'][1],
      image: techStackUrl['Flutter'][2],
    },
    {
      id: 2,
      name: techStackUrl['Dart'][0],
      designation: techStackUrl['Dart'][1],
      image: techStackUrl['Dart'][2],
    },
    {
      id: 3,
      name: techStackUrl['Firebase'][0],
      designation: techStackUrl['Firebase'][1],
      image: techStackUrl['Firebase'][2],
    },
    {
      id: 4,
      name: techStackUrl['AppleStore'][0],
      designation: techStackUrl['AppleStore'][1],
      image: techStackUrl['AppleStore'][2],
    },
    {
      id: 5,
      name: techStackUrl['GitHub'][0],
      designation: techStackUrl['GitHub'][1],
      image: techStackUrl['GitHub'][2],
    },
  ],
  // GTA Crimson Streets
  [
    {
      id: 1,
      name: techStackUrl['Unity'][0],
      designation: techStackUrl['Unity'][1],
      image: techStackUrl['Unity'][2],
    },
    {
      id: 2,
      name: techStackUrl['C#'][0],
      designation: techStackUrl['C#'][1],
      image: techStackUrl['C#'][2],
    },
    {
      id: 3,
      name: techStackUrl['Blender'][0],
      designation: techStackUrl['Blender'][1],
      image: techStackUrl['Blender'][2],
    },
    {
      id: 4,
      name: techStackUrl['Git'][0],
      designation: techStackUrl['Git'][1],
      image: techStackUrl['Git'][2],
    },
  ],
  // TinyURLer
  [
    {
      id: 1,
      name: techStackUrl['React'][0],
      designation: techStackUrl['React'][1],
      image: techStackUrl['React'][2],
    },
    {
      id: 2,
      name: techStackUrl['Bootstrap'][0],
      designation: techStackUrl['Bootstrap'][1],
      image: techStackUrl['Bootstrap'][2],
    },
    {
      id: 3,
      name: techStackUrl['CSS3'][0],
      designation: techStackUrl['CSS3'][1],
      image: techStackUrl['CSS3'][2],
    },
    {
      id: 4,
      name: techStackUrl['JavaScript'][0],
      designation: techStackUrl['JavaScript'][1],
      image: techStackUrl['JavaScript'][2],
    },
    {
      id: 5,
      name: techStackUrl['Node'][0],
      designation: techStackUrl['Node'][1],
      image: techStackUrl['Node'][2],
    },
    {
      id: 6,
      name: techStackUrl['MongoDB'][0],
      designation: techStackUrl['MongoDB'][1],
      image: techStackUrl['MongoDB'][2],
    },
    {
      id: 7,
      name: techStackUrl['GitHub'][0],
      designation: techStackUrl['GitHub'][1],
      image: techStackUrl['GitHub'][2],
    },
  ],
  // Sodoku Solver
  [
    {
      id: 1,
      name: techStackUrl['Python'][0],
      designation: techStackUrl['Python'][1],
      image: techStackUrl['Python'][2],
    },
    {
      id: 2,
      name: techStackUrl['Numpy'][0],
      designation: techStackUrl['Numpy'][1],
      image: techStackUrl['Numpy'][2],
    },
    {
      id: 3,
      name: techStackUrl['GitHub'][0],
      designation: techStackUrl['GitHub'][1],
      image: techStackUrl['GitHub'][2],
    },
  ],
  // FinChat
  [
    {
      id: 1,
      name: techStackUrl['Python'][0],
      designation: techStackUrl['Python'][1],
      image: techStackUrl['Python'][2],
    },
    {
      id: 2,
      name: techStackUrl['Pandas'][0],
      designation: techStackUrl['Pandas'][1],
      image: techStackUrl['Pandas'][2],
    },
    {
      id: 3,
      name: techStackUrl['GCP'][0],
      designation: techStackUrl['GCP'][1],
      image: techStackUrl['GCP'][2],
    },
    {
      id: 4,
      name: techStackUrl['GitHub'][0],
      designation: techStackUrl['GitHub'][1],
      image: techStackUrl['GitHub'][2],
    },
  ],
  // Chef's Hat
  [
    {
      id: 1,
      name: techStackUrl['Flutter'][0],
      designation: techStackUrl['Flutter'][1],
      image: techStackUrl['Flutter'][2],
    },
    {
      id: 2,
      name: techStackUrl['Dart'][0],
      designation: techStackUrl['Dart'][1],
      image: techStackUrl['Dart'][2],
    },
    {
      id: 3,
      name: techStackUrl['Python'][0],
      designation: techStackUrl['Python'][1],
      image: techStackUrl['Python'][2],
    },
    {
      id: 4,
      name: techStackUrl['REST'][0],
      designation: techStackUrl['REST'][1],
      image: techStackUrl['REST'][2],
    },
    {
      id: 5,
      name: techStackUrl['Django'][0],
      designation: techStackUrl['Django'][1],
      image: techStackUrl['Django'][2],
    },
    {
      id: 6,
      name: techStackUrl['GraphQL'][0],
      designation: techStackUrl['GraphQL'][1],
      image: techStackUrl['GraphQL'][2],
    },
    {
      id: 7,
      name: techStackUrl['GitHub'][0],
      designation: techStackUrl['GitHub'][1],
      image: techStackUrl['GitHub'][2],
    },
  ]
];