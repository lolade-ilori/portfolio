"use client";
import React, { useEffect } from "react";
import { motion } from "motion/react";
import { delay } from "motion";

type Props = { onFinish: () => void };

const SplashScreen = ({ onFinish }: Props) => {
  useEffect(() => {
    const timer = setTimeout(onFinish, 5000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="h-[100vh] w-full flex justify-center">
      <div className="flex text-4xl uppercase justify-center items-center font-faro-local">
        <motion.h1
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: [0, 1, 1, 0], x: -10 }}
          transition={{
            opacity: {
              duration: 5,
              ease: "easeInOut",
              times: [0, 0.15, 0.95, 1],
            },
            x: {
              delay: 1,
              ease: "easeInOut",
              duration: 0.6,
            },
          }}
        >
          lolade
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 1, 0] }}
          transition={{
            duration: 2.2,
            ease: "easeInOut",
            delay: 1.6,
            times: [0, 0.25, 0.75, 1],
          }}
        >
          ilori.
        </motion.h1>
      </div>
    </div>
  );
};

export default SplashScreen;
