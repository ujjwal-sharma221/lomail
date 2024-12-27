"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

import { TransitionPanel } from "@/components/ui/transition-panel";
import useMeasure from "react-use-measure";
import { HeroHighlightDemo } from "./highlight";

export function Grid() {
  return (
    <div className="flex w-full flex-grow items-center gap-x-6">
      <div className="relative h-96 w-full rounded-xl bg-[#FFC7C7]">
        <Image
          src="/content/arrow.svg"
          alt="arrow"
          height={400}
          width={400}
          className="absolute left-12 top-24"
        />
        <Image
          src="/content/top-right-arrow.svg"
          alt="arrow"
          height={400}
          width={200}
          className="absolute left-16 top-0 -rotate-6"
        />
        <Image
          src="/content/top-right-arrow.svg"
          alt="arrow"
          height={200}
          width={100}
          className="absolute left-72 top-10"
        />
        <Image
          src="/content/globe.svg"
          alt="globe"
          height={50}
          width={50}
          className="absolute left-60 top-16"
        />
        <Image
          src="/content/recieve.svg"
          alt="globe"
          height={300}
          width={300}
          className="absolute right-0 top-16"
        />
        <Image
          src="/content/fill-star.svg"
          alt="rotate-star"
          height={60}
          width={60}
          className="absolute left-12 top-36 animate-slow_spin"
        />
      </div>
      <div className="hidden h-96 w-full flex-col gap-y-4 lg:flex">
        <TransitionPanelCard />
        <HeroHighlightDemo />
      </div>
    </div>
  );
}

function Button({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      type="button"
      className="relative flex h-8 shrink-0 scale-100 select-none appearance-none items-center justify-center rounded-lg border border-zinc-950/10 bg-transparent px-2 text-sm text-zinc-500 transition-colors hover:bg-zinc-100 hover:text-zinc-800 focus-visible:ring-2 active:scale-[0.98] dark:border-zinc-50/10 dark:text-zinc-50 dark:hover:bg-zinc-800"
    >
      {children}
    </button>
  );
}
function TransitionPanelCard() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [ref, bounds] = useMeasure();

  const FEATURES = [
    {
      title: "Effortless Event Scheduling",
      description:
        "Simplify the process of organizing events with our intuitive scheduling tools. Whether you're planning a personal meeting, a group activity, or a professional event, our platform makes it easy to create, manage, and update your schedules in just a few clicks—all tailored to your location.",
    },
    {
      title: "Location-Aware Smart Suggestions",
      description:
        "Our platform uses advanced geolocation to provide event recommendations that are relevant to you. Discover nearby venues, attractions, or services that fit your event's needs. Let location intelligence help you find the best spots without the hassle of extensive searching.",
    },
    {
      title: "Real-Time Sync",
      description:
        "Stay connected and organized with real-time synchronization across all your devices. Whether you're on your phone, tablet, or laptop, your schedule updates instantly. Our platform also adjusts for time zones, ensuring your events are accurate no matter where you or your attendees are.",
    },
    {
      title: "Interactive UI",
      description:
        "Enjoy a seamless user experience with our clean, modern interface. Drag-and-drop features, visual calendars, and interactive elements make event creation and scheduling effortless. Navigate your way through planning with tools designed for simplicity and efficiency.",
    },
    {
      title: "Your Events, Your Way",
      description:
        "Customize every aspect of your events to suit your unique preferences. From selecting themes to managing participants, our platform lets you tailor the experience to your style. Take control of your schedule and ensure every event is as personal as it is perfect.",
    },
  ];

  const handleSetActiveIndex = (newIndex: number) => {
    setDirection(newIndex > activeIndex ? 1 : -1);
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    if (activeIndex < 0) setActiveIndex(0);
    if (activeIndex >= FEATURES.length) setActiveIndex(FEATURES.length - 1);
  }, [activeIndex]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 364 : -364,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 364 : -364,
      opacity: 0,
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
    }),
  };

  return (
    <div className="overflow-hidden rounded-xl border border-zinc-950/10 bg-white dark:bg-zinc-700">
      <TransitionPanel
        activeIndex={activeIndex}
        variants={{
          enter: (direction: number) => ({
            x: direction > 0 ? 364 : -364,
            opacity: 0,
            height: bounds.height > 0 ? bounds.height : "auto",
            position: "initial",
          }),
          center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            height: bounds.height > 0 ? bounds.height : "auto",
          },
          exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 364 : -364,
            opacity: 0,
            position: "absolute",
            top: 0,
            width: "100%",
          }),
        }}
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        }}
        custom={direction}
      >
        {FEATURES.map((feature, index) => (
          <div key={index} className="px-4 pt-4" ref={ref}>
            <h3 className="mb-0.5 font-medium text-zinc-800 dark:text-zinc-100">
              {feature.title}
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              {feature.description}
            </p>
          </div>
        ))}
      </TransitionPanel>
      <div className="flex justify-between p-4">
        {activeIndex > 0 ? (
          <Button onClick={() => handleSetActiveIndex(activeIndex - 1)}>
            Previous
          </Button>
        ) : (
          <div />
        )}
        {activeIndex !== FEATURES.length - 1 ? (
          <Button
            onClick={() =>
              activeIndex === FEATURES.length - 1
                ? null
                : handleSetActiveIndex(activeIndex + 1)
            }
          >
            {activeIndex === FEATURES.length - 1 ? "Close" : "Next"}
          </Button>
        ) : null}
      </div>
    </div>
  );
}
