import { motion } from "framer-motion";

interface EnvelopeProps {
  onOpen: () => void;
}

const Envelope = ({ onOpen }: EnvelopeProps) => {
  return (
    <motion.div
      className="cursor-pointer select-none"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
      transition={{
        opacity: { duration: 0.8 },
        scale: { duration: 0.8 },
        y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
      }}
      onClick={onOpen}
      whileHover={{ scale: 1.05, rotate: 1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative w-[280px] h-[190px] sm:w-[360px] sm:h-[240px]">
        {/* Envelope body */}
        <div className="envelope-body absolute inset-0 rounded-lg border border-gold-light/30" />

        {/* Envelope flap */}
        <div
          className="envelope-flap absolute top-0 left-0 right-0 h-[45%] rounded-t-lg"
          style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
        />

        {/* Gold border trim */}
        <div className="absolute inset-[3px] rounded-lg border border-gold/30 pointer-events-none" />

        {/* Wax seal */}
        <div className="envelope-seal absolute left-1/2 top-[42%] -translate-x-1/2 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center z-10">
          <span className="text-primary-foreground text-lg sm:text-xl font-bold tracking-wider">
            春
          </span>
        </div>

        {/* 4 chữ chúc phúc đầu xuân */}
        <div className="absolute bottom-5 left-0 right-0 text-center">
          <p className="text-deep-red/80 text-sm sm:text-base font-semibold tracking-[0.25em]">
            Thanh Phong Ý Thiệp
          </p>
        </div>

        {/* Click hint */}
        <motion.p
          className="absolute -bottom-9 left-0 right-0 text-center text-muted-foreground text-xs tracking-widest"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          nhấn để mở
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Envelope;
