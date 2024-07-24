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
          <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
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
                    Try now →
                  </CardItem>
                </div>

                <div className="flex flex-row w-full">
                  <AnimatedTooltip items={people} />
                </div>
              </CardBody>
            </CardContainer>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
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
                    Try now →
                  </CardItem>
                </div>

                <div className="flex flex-row w-full">
                  <AnimatedTooltip items={people} />
                </div>
              </CardBody>
            </CardContainer>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
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
                  <CardItem translateZ={20} as={Link} href={projects[2].github} target="__blank" className="rounded-xl text-xs font-normal dark:text-white">
                    Try now →
                  </CardItem>
                </div>

                <div className="flex flex-row w-full">
                  <AnimatedTooltip items={people} />
                </div>
              </CardBody>
            </CardContainer>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
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
                    Try now →
                  </CardItem>
                </div>

                <div className="flex flex-row w-full">
                  <AnimatedTooltip items={people} />
                </div>
              </CardBody>
            </CardContainer>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
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
                    Try now →
                  </CardItem>
                </div>

                <div className="flex flex-row w-full">
                  <AnimatedTooltip items={people} />
                </div>
              </CardBody>
            </CardContainer>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
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
                    Try now →
                  </CardItem>
                </div>

                <div className="flex flex-row w-full">
                  <AnimatedTooltip items={people} />
                </div>
              </CardBody>
            </CardContainer>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 p-2">
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
                    Try now →
                  </CardItem>
                </div>

                <div className="flex flex-row w-full">
                  <AnimatedTooltip items={people} />
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
    description: "This is a cross-platform fitness app developed with Flutter and Firebase. It provides real-time data, notifications, and user-friendly interfaces, achieving a 55% increase in user engagement.",
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
    description: "This is a Python-based financial chatbot developed with Flask, Pandas, and SpaCy. It enables seamless natural language processing and financial data analysis, enhancing query handling and user interaction.",
    github: "https://github.com/kushXpai/FinChat",
    github2: "",
    appstore: "",
    playstore: "",
  },
  {
    id: 6,
    name: "Chef's Hat",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "This is a recipe generator app developed with Flutter, Django, and GraphQL. It features ingredient-based suggestions, integrated payment options, and enhances community engagement.",
    github: "https://github.com/kushXpai/chefshat-frontend",
    github2: "https://github.com/kushXpai/chefshat-backend",
    appstore: "",
    playstore: "",
  },
]
const people = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Python",
    designation: "Language",
    image:
      "https://github.com/kushXpai/Icons/blob/main/Languages/python.jpg?raw=true",
  },
  {
    id: 5,
    name: "Javascript",
    designation: "Language",
    image:
      "https://github.com/kushXpai/Icons/blob/main/Languages/javascript.jpg?raw=true",
  },
  {
    id: 6,
    name: "C++",
    designation: "Language",
    image:
      "https://github.com/kushXpai/Icons/blob/main/Languages/cplusplus.jpg?raw=true",
  },
];