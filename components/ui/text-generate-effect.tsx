"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
  timing = 0.3,
}: {
  words: string;
  className?: string;
  timing?: number;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 0.8,
      },
      {
        duration: 2,
        delay: stagger(timing),
      }
    );
  }, [animate, timing]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className="dark:text-white text-black opacity-0 text-transparent "
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("", className)}>
        <div className="z-10  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">
          {renderWords()}
        </div>
      </div>
  );
};
