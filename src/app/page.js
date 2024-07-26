"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LampContainer } from "../components/ui/lamp.jsx";
import { twMerge } from "tailwind-merge";
import { calsans } from "../fonts/calsans.js";
import { TracingBeam } from "../components/ui/tracing-beam.jsx";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import { AnimatedTooltip } from "../components/ui/animated-tooltip";
import css from "styled-jsx/css";
import { useOutsideClick } from "../components/hooks/use-outside-clicks.js";
import { BackgroundGradient } from "../components/ui/background-gradient";
import { IconAppWindow } from '@tabler/icons-react';
import { StickyScroll } from "../components/ui/sticky-scroll-reveal.jsx";

export default function Home() {

  const [active, setActive] = useState(null);
  const ref = useRef(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

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

      <p className="text-3xl bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
        About Me
      </p>
      <div className="pb-16"></div>

      <div className="w-full px-10">
        <StickyScroll content={aboutme} />
      </div>

      <div className="pb-24"></div>

      <p className="text-3xl bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
        Current Projects
      </p>


      <div className="hidden xl:flex lg:flex flex-row">
        <div style={{ transform: 'scale(0.7)', transformOrigin: 'center' }}>
          <BackgroundGradient className="rounded-[22px] max-w-sm p-4 bg-white dark:bg-zinc-900">
            <Image
              src={currentProjects[2]['image']}
              alt="jordans"
              height="400"
              width="400"
              className="object-contain"
            />
            <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
              {currentProjects[2]['name']}
            </p>

            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {currentProjects[2]['description']}
            </p>
            <div className="flex flex-row w-full pt-12">
              <AnimatedTooltip items={currentProjectTechStack[2]} />
            </div>
          </BackgroundGradient>
        </div>
        <div style={{ transform: 'scale(0.7)', transformOrigin: 'center' }}>
          <BackgroundGradient className="rounded-[22px] max-w-sm p-4 bg-white dark:bg-zinc-900">
            <Image
              src={currentProjects[1]['image']}
              alt="jordans"
              height="400"
              width="400"
              className="object-contain"
            />
            <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
              {currentProjects[1]['name']}
            </p>

            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {currentProjects[1]['description']}
            </p>
            <div className="flex flex-row w-full pt-12">
              <AnimatedTooltip items={currentProjectTechStack[1]} />
            </div>
          </BackgroundGradient>
        </div>
        <div style={{ transform: 'scale(0.7)', transformOrigin: 'center' }}>
          <BackgroundGradient className="rounded-[22px] max-w-sm p-4 bg-white dark:bg-zinc-900">
            <Image
              src={currentProjects[0]['image']}
              alt="jordans"
              height="400"
              width="400"
              className="object-contain"
            />
            <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
              {currentProjects[0]['name']}
            </p>

            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {currentProjects[0]['description']}
            </p>
            <div className="flex flex-row w-full pt-12">
              <AnimatedTooltip items={currentProjectTechStack[0]} />
            </div>
          </BackgroundGradient>
        </div>
      </div>

      <div>
        <div className="xl:hidden lg:hidden sm:hidden md:flex flex-row">
          <div style={{ transform: 'scale(0.7)', transformOrigin: 'center' }}>
            <BackgroundGradient className="rounded-[22px] max-w-sm p-4 bg-white dark:bg-zinc-900">
              <Image
                src={currentProjects[2]['image']}
                alt="jordans"
                height="400"
                width="400"
                className="object-contain"
              />
              <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                {currentProjects[2]['name']}
              </p>

              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {currentProjects[2]['description']}
              </p>
              <div className="flex flex-row w-full pt-12">
                <AnimatedTooltip items={currentProjectTechStack[2]} />
              </div>
            </BackgroundGradient>
          </div>
          <div style={{ transform: 'scale(0.7)', transformOrigin: 'center' }}>
            <BackgroundGradient className="rounded-[22px] max-w-sm p-4 bg-white dark:bg-zinc-900">
              <Image
                src={currentProjects[1]['image']}
                alt="jordans"
                height="400"
                width="400"
                className="object-contain"
              />
              <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                {currentProjects[1]['name']}
              </p>

              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {currentProjects[1]['description']}
              </p>
              <div className="flex flex-row w-full pt-12">
                <AnimatedTooltip items={currentProjectTechStack[1]} />
              </div>
            </BackgroundGradient>
          </div>
        </div>
        <div className="xl:hidden lg:hidden sm:hidden md:flex flex-row">
          <div style={{ transform: 'scale(0.7)', transformOrigin: 'center' }}>
            <BackgroundGradient className="rounded-[22px] max-w-sm p-4 bg-white dark:bg-zinc-900">
              <Image
                src={currentProjects[0]['image']}
                alt="jordans"
                height="400"
                width="400"
                className="object-contain"
              />
              <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                {currentProjects[0]['name']}
              </p>

              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {currentProjects[0]['description']}
              </p>
              <div className="flex flex-row w-full pt-12">
                <AnimatedTooltip items={currentProjectTechStack[0]} />
              </div>
            </BackgroundGradient>
          </div>
        </div>
      </div>

      <div className="xl:hidden lg:hidden md:hidden sm:flex">
        <div style={{ transform: 'scale(0.7)', transformOrigin: 'center' }}>
          <BackgroundGradient className="rounded-[22px] max-w-sm p-4 bg-white dark:bg-zinc-900">
            <Image
              src={currentProjects[2]['image']}
              alt="jordans"
              height="400"
              width="400"
              className="object-contain"
            />
            <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
              {currentProjects[2]['name']}
            </p>

            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {currentProjects[2]['description']}
            </p>
            <div className="flex flex-row w-full pt-12">
              <AnimatedTooltip items={currentProjectTechStack[2]} />
            </div>
          </BackgroundGradient>
        </div>
        <div style={{ transform: 'scale(0.7)', transformOrigin: 'center' }}>
          <BackgroundGradient className="rounded-[22px] max-w-sm p-4 bg-white dark:bg-zinc-900">
            <Image
              src={currentProjects[1]['image']}
              alt="jordans"
              height="400"
              width="400"
              className="object-contain"
            />
            <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
              {currentProjects[1]['name']}
            </p>

            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {currentProjects[1]['description']}
            </p>
            <div className="flex flex-row w-full pt-12">
              <AnimatedTooltip items={currentProjectTechStack[1]} />
            </div>
          </BackgroundGradient>
        </div>
        <div style={{ transform: 'scale(0.7)', transformOrigin: 'center' }}>
          <BackgroundGradient className="rounded-[22px] max-w-sm p-4 bg-white dark:bg-zinc-900">
            <Image
              src={currentProjects[0]['image']}
              alt="jordans"
              height="400"
              width="400"
              className="object-contain"
            />
            <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
              {currentProjects[0]['name']}
            </p>

            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {currentProjects[0]['description']}
            </p>
            <div className="flex flex-row w-full pt-12">
              <AnimatedTooltip items={currentProjectTechStack[0]} />
            </div>
          </BackgroundGradient>
        </div>
      </div>

      <div className="pb-24"></div>

      {/* <div className="w-full mx-auto" style={{ maxWidth: '80%' }}>
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
      </div> */}

      <p className="text-3xl bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
        Past Projects
      </p>
      <div className="pb-16"></div>

      <>
        <AnimatePresence>
          {active && typeof active === "object" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 h-full w-full z-10"
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {active && typeof active === "object" ? (
            <div className="fixed inset-0  grid place-items-center z-[100]">
              <motion.button
                key={`button-${active.title}-${id}`}
                layout
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.05,
                  },
                }}
                className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                onClick={() => setActive(null)}
              >
                <CloseIcon />
              </motion.button>
              <motion.div
                layoutId={`card-${active.title}-${id}`}
                ref={ref}
                className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
              >
                <motion.div layoutId={`image-${active.title}-${id}`}>
                  <Image
                    priority
                    width={200}
                    height={200}
                    src={active.src}
                    alt={active.title}
                    className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                  />
                </motion.div>

                <div>
                  <div className="flex justify-between items-start p-4">
                    <div className="">
                      <motion.h3
                        layoutId={`title-${active.title}-${id}`}
                        className="font-bold text-neutral-700 dark:text-neutral-200"
                      >
                        {active.title}
                      </motion.h3>
                      <motion.p
                        layoutId={`description-${active.description}-${id}`}
                        className="text-neutral-600 dark:text-neutral-400"
                      >
                        {active.description}
                      </motion.p>
                    </div>

                    <motion.a
                      layoutId={`button-${active.title}-${id}`}
                      href={active.ctaLink}
                      target="_blank"
                      className="px-4 py-3 text-sm rounded-full font-bold bg-cyan-500 text-white"
                    >
                      {active.ctaText}
                    </motion.a>
                  </div>
                  <div className="pt-4 relative px-4">
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                    >
                      {typeof active.content === "function"
                        ? active.content()
                        : active.content}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          ) : null}
        </AnimatePresence>
        <ul className="max-w-2xl mx-auto w-full gap-4">
          {cards.map((card, index) => (
            <motion.div
              layoutId={`card-${card.title}-${id}`}
              key={`card-${card.title}-${id}`}
              onClick={() => setActive(card)}
              className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
            >
              <div className="flex gap-4 flex-col md:flex-row ">
                <motion.div layoutId={`image-${card.title}-${id}`}>
                  <Image
                    width={100}
                    height={100}
                    src={card.src}
                    alt={card.title}
                    className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                  />
                </motion.div>
                <div className="">
                  <motion.h3
                    layoutId={`title-${card.title}-${id}`}
                    className="font-medium text-neutral-400 dark:text-neutral-200 text-center md:text-left"
                  >
                    {card.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${card.description}-${id}`}
                    className="text-neutral-700 dark:text-neutral-400 text-center md:text-left"
                  >
                    {card.description}
                  </motion.p>
                </div>
              </div>
              <motion.button
                layoutId={`button-${card.title}-${id}`}
                className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-cyan-500 hover:text-white text-black mt-4 md:mt-0"
              >
                {card.ctaText}
              </motion.button>
            </motion.div>
          ))}
        </ul>
      </>
      <div className="pb-24"></div>

    </main>
  );
}


const aboutme = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Running out of content
      </div>
    ),
  },
];

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

const techStackUrl = {
  "JavaScript": ["JavaScript", "Language", "https://github.com/kushXpai/Icons/blob/main/Languages/javascript.jpg?raw=true"],
  "Python": ["Python", "Language", "https://github.com/kushXpai/Icons/blob/main/Languages/python.jpg?raw=true"],
  "Java": ["Java", "Language", "https://github.com/kushXpai/Icons/blob/main/Languages/java.jpg?raw=true"],
  "C#": ["C#", "Language", "https://github.com/kushXpai/Icons/blob/main/Languages/csharp.jpg?raw=true"],
  "C++": ["C++", "Language", "https://github.com/kushXpai/Icons/blob/main/Languages/cplusplus.jpg?raw=true"],
  "Swift": ["Swift", "Language", "https://github.com/kushXpai/Icons/blob/main/Languages/swift.jpg?raw=true"],
  "Kotlin": ["Kotlin", "Language", "https://github.com/kushXpai/Icons/blob/main/Languages/kotlin.jpg?raw=true"],
  "Typescript": ["Typescript", "Language", "https://github.com/kushXpai/Icons/blob/main/Languages/typescript.jpg?raw=true"],
  "R": ["R", "Language", "https://github.com/kushXpai/Icons/blob/main/Languages/r.jpg?raw=true"],
  "Dart": ["Dart", "Language", "https://github.com/kushXpai/Icons/blob/main/Languages/dart.jpg?raw=true"],
  "React": ["React", "Frontend Framework", "https://github.com/kushXpai/Icons/blob/main/Frontend-Frameworks-Libraries/react.jpg?raw=true"],
  "Vue": ["Vue", "Frontend Framework", "https://github.com/kushXpai/Icons/blob/main/Frontend-Frameworks-Libraries/vuejs.jpg?raw=true"],
  "HTML5": ["HTML5", "Frontend Technologies", "https://github.com/kushXpai/Icons/blob/main/Frontend-Tools-Technologies/html5.jpg?raw=true"],
  "CSS3": ["CSS3", "Frontend Technologies", "https://github.com/kushXpai/Icons/blob/main/Frontend-Tools-Technologies/css3.jpg?raw=true"],
  "Bootstrap": ["Bootstrap", "Frontend Technologies", "https://github.com/kushXpai/Icons/blob/main/Frontend-Tools-Technologies/bootstrap.jpg?raw=true"],
  "Tailwind": ["Tailwind CSS", "Frontend Technologies", "https://github.com/kushXpai/Icons/blob/main/Frontend-Tools-Technologies/tailwindcss.jpg?raw=true"],
  "MaterialUI": ["Material-UI", "Frontend Technologies", "https://github.com/kushXpai/Icons/blob/main/Frontend-Tools-Technologies/materialui.jpg?raw=true"],
  "JQuery": ["JQuery", "Frontend Technologies", "https://github.com/kushXpai/Icons/blob/main/Frontend-Tools-Technologies/jquery.jpg?raw=true"],
  "Vite": ["Vite", "Frontend Build Tools", "https://github.com/kushXpai/Icons/blob/main/Frontend-Build-Tools/vitejs.jpg?raw=true"],
  "Node": ["Node.js", "Backend Frameworks", "https://github.com/kushXpai/Icons/blob/main/Backend-Frameworks/nodejs.jpg?raw=true"],
  "Django": ["Django", "Backend Frameworks", "https://github.com/kushXpai/Icons/blob/main/Backend-Frameworks/django.jpg?raw=true"],
  "Flask": ["Flask", "Backend Frameworks", "https://github.com/kushXpai/Icons/blob/main/Backend-Frameworks/flask.jpg?raw=true"],
  "Springboot": ["Springboot", "Backend Frameworks", "https://github.com/kushXpai/Icons/blob/main/Backend-Frameworks/springboot.jpg?raw=true"],
  "MySQL": ["MySQL", "Backend Relational Databases", "https://github.com/kushXpai/Icons/blob/main/Backend-Relational-Databases/mysql.jpg?raw=true"],
  "PostgreSQL": ["PostgreSQL", "Backend Relational Databases", "https://github.com/kushXpai/Icons/blob/main/Backend-Relational-Databases/postgresql.jpg?raw=true"],
  "SQLite": ["SQLite", "Backend Relational Databases", "https://github.com/kushXpai/Icons/blob/main/Backend-Relational-Databases/sqlite.jpg?raw=true"],
  "MongoDB": ["MongoDB", "Backend NoSQL Databases", "https://github.com/kushXpai/Icons/blob/main/Backend-NoSQL-Databses/mongodb.jpg?raw=true"],
  "Firebase": ["Firebase", "Backend NoSQL Databases", "https://github.com/kushXpai/Icons/blob/main/Backend-NoSQL-Databses/firebase.jpg?raw=true"],
  "Docker": ["Docker", "DevOps", "https://github.com/kushXpai/Icons/blob/main/DevOps-Cloud/docker.jpg?raw=true"],
  "Kubernetes": ["Kubernetes", "DevOps", "https://github.com/kushXpai/Icons/blob/main/DevOps-Cloud/kubernetes.jpg?raw=true"],
  "GCP": ["Google Cloud Platform", "Cloud Technologies", "https://github.com/kushXpai/Icons/blob/main/DevOps-Cloud/googlecloudplatform.jpg?raw=true"],
  "Vercel": ["Vercel", "Cloud Technologies", "https://github.com/kushXpai/Icons/blob/main/DevOps-Cloud/vercel.jpg?raw=true"],
  "Git": ["Git", "Version Control", "https://github.com/kushXpai/Icons/blob/main/Version-Control/git.jpg?raw=true"],
  "GitHub": ["GitHub", "Version Control", "https://github.com/kushXpai/Icons/blob/main/Version-Control/github.jpg?raw=true"],
  "GitLab": ["GitLab", "Version Control", "https://github.com/kushXpai/Icons/blob/main/Version-Control/gitlab.jpg?raw=true"],
  "ReactNative": ["React Native", "Mobile Development", "https://github.com/kushXpai/Icons/blob/main/Mobile-Development/react.jpg?raw=true"],
  "Flutter": ["Flutter", "Mobile Development", "https://github.com/kushXpai/Icons/blob/main/Mobile-Development/flutter.jpg?raw=true"],
  "SwiftUI": ["Swift UI", "Mobile Development", "https://github.com/kushXpai/Icons/blob/main/Mobile-Development/swift.jpg?raw=true"],
  "KotlinUI": ["Kotlin", "Mobile Development", "https://github.com/kushXpai/Icons/blob/main/Mobile-Development/kotlin.jpg?raw=true"],
  "Andriod": ["Andriod", "Mobile Development", "https://github.com/kushXpai/Icons/blob/main/Mobile-Development/andriod.jpg?raw=true"],
  "Apple": ["Apple", "Mobile Development", "https://github.com/kushXpai/Icons/blob/main/Mobile-Development/apple.jpg?raw=true"],
  "AppleStore": ["App Store", "Mobile Development", "https://github.com/kushXpai/Icons/blob/main/Mobile-Development/apple.jpg?raw=true"],
  "GraphQL": ["GraphQL", "API Development", "https://github.com/kushXpai/Icons/blob/main/API-Development-Tools/graphql.jpg?raw=true"],
  "REST": ["REST", "API Development", "https://github.com/kushXpai/Icons/blob/main/API-Development-Tools/djangorest.jpg?raw=true"],
  "Postman": ["GraphQL", "API Testing", "https://github.com/kushXpai/Icons/blob/main/API-Development-Tools/postman.jpg?raw=true"],
  "VSCode": ["VS Code", "Integrated Development Environment", "https://github.com/kushXpai/Icons/blob/main/Essential-Tools/vscode.jpg?raw=true"],
  "VS": ["Visual Studio", "Integrated Development Environment", "https://github.com/kushXpai/Icons/blob/main/Essential-Tools/visualstudio.jpg?raw=true"],
  "XCode": ["XCode", "Integrated Development Environment", "https://github.com/kushXpai/Icons/blob/main/Essential-Tools/xcode.jpg?raw=true"],
  "AndriodStudio": ["AndriodStudio", "Integrated Development Environment", "https://github.com/kushXpai/Icons/blob/main/Essential-Tools/andriodstudio.jpg?raw=true"],
  "PyTorch": ["PyTorch", "Integrated Development Environment", "https://github.com/kushXpai/Icons/blob/main/Machine-Learning/pytorch.jpg?raw=true"],
  "SciKitLearn": ["SciKit-Learn", "Integrated Development Environment", "https://github.com/kushXpai/Icons/blob/main/Machine-Learning/scikitlearn.jpg?raw=true"],
  "TensorFlow": ["Tensor Flow", "Integrated Development Environment", "https://github.com/kushXpai/Icons/blob/main/Machine-Learning/tensorflow.jpg?raw=true"],
  "NPM": ["NPM", "Package Manager", "https://github.com/kushXpai/Icons/blob/main/Package-Managers/npm.jpg?raw=true"],
  "Yarn": ["Yarn", "Package Manager", "https://github.com/kushXpai/Icons/blob/main/Package-Managers/yarn.jpg?raw=true"],
  "Unity": ["Unity", "Game Development", "https://github.com/kushXpai/Icons/blob/main/Game-Development/unity.jpg?raw=true"],
  "UnReal": ["UnReal Engine", "Game Development", "https://github.com/kushXpai/Icons/blob/main/Game-Development/unrealengine.jpg?raw=true"],
  "Blender": ["Blender", "3D Modeling", "https://github.com/kushXpai/Icons/blob/main/Game-Development/blender.jpg?raw=true"],
  "Numpy": ["Numpy", "Libraries", "https://github.com/kushXpai/Icons/blob/main/Libraries/numpy.jpg?raw=true"],
  "Pandas": ["Pandas", "Libraries", "https://github.com/kushXpai/Icons/blob/main/Libraries/pandas.jpg?raw=true"],
}

const currentProjects = [
  // GTA Crimson Streets
  {
    id: 0,
    name: "GTA Crimson Streets",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "This is an immersive 3D open-world game developed with Unity and C#. It blends intricate missions and diverse gameplay, showcasing expertise in game development and storytelling.",
    shortdescription: "Unity based 3D game",
    github: "",
    github2: "",
    appstore: "",
    playstore: "",
  },
  // KP FAST
  {
    id: 1,
    name: "KP FAST",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "This is a cross-platform fitness app developed with Flutter and Firebase. It provides real-time data access, and user-friendly interfaces, achieving a 55% increase in user engagement.",
    shortdescription: "Mobile Application",
    github: "",
    github2: "",
    appstore: "https://apps.apple.com/in/app/kp-fast/id6505094329",
    playstore: "",
  },
  // Portfolio
  {
    id: 2,
    name: "Portfolio Website",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Responsive portfolio website developed using React, Tailwind CSS, and JavaScript. It showcases my personal projects and highlights software development skills.",
    shortdescription: "React Website",
    github: "https://github.com/kushXpai/Portfolio",
    github2: "",
    appstore: "",
    playstore: "",
  },
]

const projects = [
  // Chef's Hat
  {
    id: 0,
    name: "Chef's Hat",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "This is a recipe generator app developed with Flutter, Django, and GraphQL. It features ingredient-based suggestions, integrated payment, enhances community engagement etc.",
    shortdescription: "Mobile Application",
    github: "https://github.com/kushXpai/chefshat-frontend",
    github2: "https://github.com/kushXpai/chefshat-backend",
    appstore: "",
    playstore: "",
  },
  // FinChat
  {
    id: 1,
    name: "Finchat",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "This is a financial chatbot developed using Flask and Pandas. It enables seamless Natural Language Processing and financial data analysis, enhancing query handling.",
    github: "https://github.com/kushXpai/FinChat",
    shortdescription: "Financial Chatbot",
    github2: "",
    appstore: "",
    playstore: "",
  },
  // Sodoku Solver
  {
    id: 2,
    name: "Sudoku Solver",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "This is an advanced Sudoku solver using backtracking algorithms. It significantly reduces problem-solving time, improving algorithm efficiency and performance.",
    github: "https://github.com/kushXpai/sudoku-solver",
    shortdescription: "Backtracking Algorithm",
    github2: "",
    appstore: "",
    playstore: "",
  },
  // TinyURLer
  {
    id: 3,
    name: "TinyURLer",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "This is a URL shortening service developed with React and MongoDB. It optimizes user operations by streamlining URL management and enhancing efficiency.",
    github: "https://github.com/kushXpai/url-shortener-software",
    shortdescription: "Url Shortner",
    github2: "",
    appstore: "",
    playstore: "",
  },
  // GTA Crimson Streets
  {
    id: 4,
    name: "GTA Crimson Streets",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "This is an immersive 3D open-world game developed with Unity and C#. It blends intricate missions and diverse gameplay, showcasing expertise in game development and storytelling.",
    shortdescription: "Unity based 3D game",
    github: "",
    github2: "",
    appstore: "",
    playstore: "",
  },
  // KP FAST
  {
    id: 5,
    name: "KP FAST",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "This is a cross-platform fitness app developed with Flutter and Firebase. It provides real-time data access, and user-friendly interfaces, achieving a 55% increase in user engagement.",
    shortdescription: "Mobile Application",
    github: "",
    github2: "",
    appstore: "https://apps.apple.com/in/app/kp-fast/id6505094329",
    playstore: "",
  },
  // Portfolio
  {
    id: 6,
    name: "Portfolio Website",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Responsive portfolio website developed using React, Tailwind CSS, and JavaScript. It showcases my personal projects and highlights software development skills.",
    shortdescription: "React Website",
    github: "https://github.com/kushXpai/Portfolio",
    github2: "",
    appstore: "",
    playstore: "",
  },
]

const currentProjectTechStack = [
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
];

const projectTechStack = [
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
];


export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  // Chef's Hat
  {
    description: projects[6]['shortdescription'],
    title: projects[6]['name'],
    src: projects[6]['image'],
    ctaText: "Try Me",
    ctaLink: projects[6]['github'],
    content: () => {
      return (
        <div>
          <p style={{ marginBottom: "100px" }}>
            {projects[6]['description']}
          </p>
          <div className="flex flex-row w-full">
            <AnimatedTooltip items={projectTechStack[6]} />
          </div>
        </div>
      );
    },
  },
  // FinChat
  {
    description: projects[5]['shortdescription'],
    title: projects[5]['name'],
    src: projects[5]['image'],
    ctaText: "Try Me",
    ctaLink: projects[5]['github'],
    content: () => {
      return (
        <div>
          <p style={{ marginBottom: "100px" }}>
            {projects[5]['description']}
          </p>
          <div className="flex flex-row w-full">
            <AnimatedTooltip items={projectTechStack[5]} />
          </div>
        </div>
      );
    },
  },
  // Sodoku Solver
  {
    description: projects[4]['shortdescription'],
    title: projects[4]['name'],
    src: projects[4]['image'],
    ctaText: "Try Me",
    ctaLink: projects[4]['github'],
    content: () => {
      return (
        <div>
          <p style={{ marginBottom: "100px" }}>
            {projects[4]['description']}
          </p>
          <div className="flex flex-row w-full">
            <AnimatedTooltip items={projectTechStack[4]} />
          </div>
        </div>
      );
    },
  },
  // TinyURLer
  {
    description: projects[3]['shortdescription'],
    title: projects[3]['name'],
    src: projects[3]['image'],
    ctaText: "Try Me",
    ctaLink: projects[3]['github'],
    content: () => {
      return (
        <div>
          <p style={{ marginBottom: "100px" }}>
            {projects[3]['description']}
          </p>
          <div className="flex flex-row w-full">
            <AnimatedTooltip items={projectTechStack[3]} />
          </div>
        </div>
      );
    },
  },
  // GTA Crimson Streets
  {
    description: projects[2]['shortdescription'],
    title: projects[2]['name'],
    src: projects[2]['image'],
    ctaText: "Try Me",
    ctaLink: projects[2]['github'],
    content: () => {
      return (
        <div>
          <p style={{ marginBottom: "100px" }}>
            {projects[2]['description']}
          </p>
          <div className="flex flex-row w-full">
            <AnimatedTooltip items={projectTechStack[2]} />
          </div>
        </div>
      );
    },
  },
  // KP FAST
  {
    description: projects[1]['shortdescription'],
    title: projects[1]['name'],
    src: projects[1]['image'],
    ctaText: "Try Me",
    ctaLink: projects[1]['github'],
    content: () => {
      return (
        <div>
          <p style={{ marginBottom: "100px" }}>
            {projects[1]['description']}
          </p>
          <div className="flex flex-row w-full">
            <AnimatedTooltip items={projectTechStack[1]} />
          </div>
        </div>
      );
    },
  },
  // Portfolio
  {
    description: projects[0]['shortdescription'],
    title: projects[0]['name'],
    src: projects[0]['image'],
    ctaText: "Try Me",
    ctaLink: projects[0]['github'],
    content: () => {
      return (
        <div>
          <p style={{ marginBottom: "100px" }}>
            {projects[0]['description']}
          </p>
          <div className="flex flex-row w-full">
            <AnimatedTooltip items={projectTechStack[0]} />
          </div>
        </div>
      );
    },
  },
];