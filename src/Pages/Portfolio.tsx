import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <div className="p-14 md:px-20 space-y-2">
      <div className=" text-[13px] items-center justify-center col-span-3 w-full h-auto">
        <motion.div
          initial={{ x: "-100vw" }} // Start off-screen to the left
          animate={{ x: 0 }} // Slide to its original position
          transition={{ type: "bounce", stiffness: 120 }}
          className="shadow-slate-500 shadow-md py-2 bg-orange-600 text-center text-white font-semibold"
        >
          <h1 className="font-serif tracking-widest">PORTFOLIO</h1>
        </motion.div>
      </div>
      <div className="pt-10 text-[13px] items-center justify-center col-span-3 w-full h-auto">
        <motion.div
          initial={{ y: 200 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 150 }}
          className="shadow-slate-500 shadow-md bg-orange-600 text-center text-white font-semibold"
        >
          <a
            href="https://summarizer11.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h1 className=" tracking-widest text-center text-lg">
              Ai Summarizer
            </h1>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
