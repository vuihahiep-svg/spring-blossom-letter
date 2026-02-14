import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Envelope from "@/components/Envelope";
import LetterContent from "@/components/LetterContent";
import PetalConfetti from "@/components/PetalConfetti";
import MusicPlayer from "@/components/MusicPlayer";
import cherryBlossomBg from "@/assets/cherry-blossom-bg.jpg";

const Index = () => {
  const [isOpened, setIsOpened] = useState(false);

  const handleOpen = useCallback(() => {
    setIsOpened(true);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${cherryBlossomBg})` }}
      >
        <div className="absolute inset-0 bg-cream/60 backdrop-blur-[2px]" />
      </div>

      {/* Music Player */}
      <MusicPlayer play={isOpened} />

      {/* Petal confetti */}
      <PetalConfetti active={isOpened} />

      {/* Content */}
      <div className="relative z-10">
        <AnimatePresence mode="wait">
          {!isOpened ? (
            <motion.div
              key="envelope"
              className="flex items-center justify-center min-h-screen"
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
            >
              <Envelope onOpen={handleOpen} />
            </motion.div>
          ) : (
            <motion.div
              key="letter"
              initial={{ opacity: 0, y: 60, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="min-h-screen py-8 px-4 sm:px-6 letter-scroll overflow-y-auto"
            >
              <LetterContent />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Index;
