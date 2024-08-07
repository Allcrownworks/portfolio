import vid from "../Asset/video (4).mp4";
import { motion } from "framer-motion";


const Home = () => {
  return (
    <div className="">
      <motion.div  
      className="flex">
        <video
          src={vid}
          autoPlay
          loop
          muted
          className="object-cover w-full h-screen"
        />
        <motion.div   
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 1.5, duration: 5 }} className="flex flex-col absolute w-full h-full justify-center items-center">
          <h1 className="text-6xl font-bold font-serif text-center">
            JOY IS MINE.
          </h1>
          <p className=" text-slate-100 font-bold text-2xl text-center">
            @
          </p>
          <p className=" text-slate-100 font-bold text-5xl text-center tracking-widest font-serif">
            Last
          </p>
          <p className=" text-slate-100 font-bold text-3xl text-center tracking-widest font-serif">"After diving into the deep sea of challenges and emerging stronger, having swum out of it successfully."</p>
          {/* <p className=" text-slate-100 font-bold text-2xl text-center">
          I become a developer
          </p> */}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
