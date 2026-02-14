import { useRef, useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

const MusicPlayer = ({ play }: { play: boolean }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [muted, setMuted] = useState(false);
  const [started, setStarted] = useState(false);

  // Start playing immediately without delay or fade-in
  useEffect(() => {
    if (play && !started && audioRef.current) {
      const audio = audioRef.current;
      audio.volume = 0.4;
      audio.play().catch(() => {});
      setStarted(true);
    }
  }, [play, started]);

  const toggleMute = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.muted = !muted;
      setMuted(!muted);
    }
  }, [muted]);

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        src="/nhac.mp3"
      />
      <AnimatePresence>
        {play && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ delay: 1 }}
            onClick={toggleMute}
            className="fixed top-6 right-6 z-[60] w-10 h-10 rounded-full bg-primary/80 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-primary transition-colors shadow-lg"
            aria-label={muted ? "Unmute" : "Mute"}
          >
            {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default MusicPlayer;
