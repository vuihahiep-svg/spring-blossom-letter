import { motion } from "framer-motion";

interface EnvelopeProps {
  onOpen: () => void;
}

const Envelope = ({ onOpen }: EnvelopeProps) => {
  return (
    <motion.div
      className="cursor-pointer select-none"
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      onClick={onOpen}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      {/* Envelope SVG */}
      <div className="relative w-[320px] h-[220px] sm:w-[400px] sm:h-[270px]">
        {/* Envelope body */}
        <div className="envelope-body absolute inset-0 rounded-lg border border-gold-light/30" />

        {/* Envelope flap (triangle) */}
        <div
          className="envelope-flap absolute top-0 left-0 right-0 h-[45%] rounded-t-lg"
          style={{
            clipPath: "polygon(0 0, 100% 0, 50% 100%)",
          }}
        />

        {/* Gold border trim */}
        <div className="absolute inset-[3px] rounded-lg border border-gold/30 pointer-events-none" />

        {/* Wax seal */}
        <div className="envelope-seal absolute left-1/2 top-[42%] -translate-x-1/2 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center z-10">
          <span className="font-serif-display text-primary-foreground text-lg sm:text-xl font-bold tracking-wider">
            春
          </span>
        </div>

        {/* Decorative text */}
        <div className="absolute bottom-6 left-0 right-0 text-center">
          <p className="font-serif-display text-deep-red/70 text-sm tracking-[0.2em]">
            Thảo Hiền Tiểu Thư
          </p>
        </div>

        {/* Click hint */}
        <motion.p
          className="absolute -bottom-10 left-0 right-0 text-center text-muted-foreground text-xs tracking-widest"
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          nhấn để mở
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Envelope;
