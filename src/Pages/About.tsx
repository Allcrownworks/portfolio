import im from "../Image/shola 1.jpg";
import is from "../Image/s-min.png";
import { motion } from "framer-motion";

const About = () => {
  
  return (
    <div className="p-14 md:px-20 space-y-2">
      <div className=" text-[13px] items-center justify-center col-span-3 w-full h-auto">
        <motion.div
          initial={{ x: "-100vw" }} // Start off-screen to the left
          animate={{ x: 0 }} // Slide to its original position
          transition={{ type: "bounce", stiffness: 120 }}
          className="shadow-slate-500 shadow-md py-2 bg-orange-600 text-center text-white font-semibold"
        >
          <h1 className="font-serif tracking-widest">ABOUT ME</h1>
        </motion.div>
      </div>
      <div className="grid md:grid-cols-3 justify-center items-center md:py-7">
        <div className="flex md:col-span-1 w-full h-auto relative m-auto ">       
          <motion.div
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 1, duration: 0.5, type: "spring", stiffness: 100  }}
            className="flex absolute top-0 bottom-0 right-0 left-0 m-auto h-[180px] w-[180px] md:h-[180px] md:w-[180px] lg:h-[200px] lg:w-[200px] xl:h-[270px] xl:w-[270px]">
            <img
              src={im}
              alt=""
              className="object-cover rounded-full"
            />
          </motion.div>
          {/* is image div */}
          <motion.div
           initial={{ y: "100vh" }}
           animate={{ y: 0 }}
           transition={{ delay: 1, duration: 0.5, type: "spring", stiffness: 100  }}
            className="flex animate-rotate-bg top-0 bottom-0 right-0 left-0 mx-auto h-[250px] w-[250px] lg:h-[290px] lg:w-[290px]  xl:h-[390px] xl:w-[390px]">
            <img
              src={is}
              alt=""
              className="object-cover rounded-full"
            />
          </motion.div>
        </div>
        <motion.div
          // initial={{ x: "10vw" }}
          // animate={{ x: 0 }}
          // transition={{ delay: 0.5, duration: 1.5 }}
          className="md:col-span-2">
          <div className="md:col-span-2 ">
            <div className=" space-y-2 p-1 font-serif">
              <div className="shadow-slate-500 shadow-md text-center bg-orange-600 rounded-tr-3xl md:rounded-tr-full text-white p-4">
                <span>
                  <h1 className="font-bold text-1xl md:text-[15px] lg:text-2xl xl:text-3xl h-auto md:p-1">
                    I'm Gbogboade Adegbenga
                  </h1>
                </span>
                <span>
                  <h1 className="font-bold text-1xl md:text-[10px] lg:text-[15px] xl:text-[20px]">
                    By Name.
                  </h1>
                </span>
              </div>
              <div className="shadow-slate-500 shadow-md text-[15px] bg-orange-700 h-auto text-center md:text-[15px] text-white p-4 md:p-2 items-center justify-center">
              Curious Developer Passionate About Code That Works.
              </div>
              <div className="p-8 shadow-slate-500 shadow-md font-serif  md:text-[11px] xl:text-[15px] bg-orange-800 h-auto text-center text-sm text-white md:p-3 justify-center items-center">
                My journey into development began with a curiosity about how
                websites work, which led me to dive into HTML, CSS, JavaScript,
                React and Nextjs on my own.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="p-1 text-[13px] items-center justify-center col-span-3 w-full h-auto md:relative md:bottom-2">
        <motion.div
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="rounded-b-lg shadow-slate-500 shadow-md p-8 md:p-2 bg-orange-600 text-center text-white font-semibold">
          <h1>
            I enjoy solving problems and learning new things to keep up with the
            latest trends.
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
