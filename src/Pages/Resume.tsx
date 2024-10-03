import { motion } from "framer-motion";


const Resume = () => {
  return (
    <div className="pt-14 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className=" text-[13px] items-center justify-center md:col-span-2 w-full h-auto">
        <motion.div 
        initial={{ x: '-100vw' }}  // Start off-screen to the left
        animate={{ x: 0 }}         // Slide to its original position
        transition={{ type: 'bounce', stiffness: 120 }} 
        className="shadow-slate-500 shadow-md py-2 bg-orange-600 text-center text-white font-semibold">
          <h1 className="font-serif tracking-widest">RESUME</h1>
        </motion.div>
      </div>
      {/* Career Objective */}
        <div className="grid grid-cols-1 col-span-1">
          <motion.div 
          initial={{ x: "-100vw" }}
           animate={{ x: 0 }}
           transition={{ delay: 1, duration: 0.5 }} 
           className="text-center text-3xl md:text-5xl font-semibold font-serif bg-slate-50 shadow-md p-4 rounded-xl shadow-slate-500">
            <div className="grid gap-4">
              <div className="bg-slate-200 p-4 rounded-xl shadow-md">
                <h1 className="border-l-4 border-blue-600">Career Objective</h1>
              </div>
              <div className="bg-slate-200 p-4 rounded-xl shadow-md">
                <h3 className="text-xl border-l-4 border-orange-600">
                  To become a Great Software Engineer.
                </h3>
              </div>
            </div>
          </motion.div>
        </div>
        {/* Career Objective */}
        <div className="grid grid-cols-1 col-span-1 row-span-2">
          <motion.div initial={{ x: "-100vw" }}
           animate={{ x: 0 }}
           transition={{ delay: 1, duration: 0.5 }}  className="text-center text-3xl md:text-5xl font-semibold font-serif bg-slate-50 shadow-md p-4 rounded-xl shadow-slate-500">
            <div className="grid gap-4">
              <div className="bg-slate-200 p-4 rounded-xl shadow-md">
                <h1 className="border-l-4 border-blue-600">Education.</h1>
              </div>
              <div className="bg-slate-200 p-4 rounded-xl shadow-md">
                <div className=" bg-slate- border-l-4 border-orange-600">
                  <h3 className="text-[30px]">Lagos State Polythenic</h3>
                  <h2 className="text-lg">2003-2005</h2>
                  <h2 className="text-lg">National Diploma in Accounting.</h2>
                </div>
              </div>
              <div className="bg-slate-200 p-4 rounded-xl shadow-md">
                <div className=" bg-slate- border-l-4 border-orange-600">
                  <h3 className="text-[30px]">Self Thaught</h3>
                  <h2 className="text-lg">2021-2023</h2>
                  <h2 className="text-lg">Html, Css, Javascript And React.</h2>
                </div>
              </div>
              <div className="bg-slate-200 p-4 rounded-xl shadow-md">
                <div className=" bg-slate- border-l-4 border-orange-600">
                  <h3 className="text-[30px]">Javascript Mastery Boot Camp</h3>
                  <h2 className="text-lg">2024-Till Date</h2>
                  <h2 className="text-lg">Html, Css, Javascript React And Nextjs.</h2>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="grid grid-cols-1 col-span-1">
          <motion.div initial={{ x: "100vw" }}
           animate={{ x: 0 }}
           transition={{ delay: 1, duration: 0.5 }}  className="text-center text-3xl md:text-5xl font-semibold font-serif bg-slate-50 shadow-md p-4 rounded-xl shadow-slate-500">
            <div className="grid gap-4">
              <div className="bg-slate-200 p-4 rounded-xl shadow-md">
                <h1 className="border-l-4 border-blue-600">Tech Skills</h1>
              </div>
              <div className="bg-slate-200 p-4 rounded-xl shadow-md">
                <div className=" bg-slate- border-l-4 border-orange-600">
                  <p className="text-lg">
                    <ul>
                      <li>
                        Proficient in Html, CSS, Bootstrap, Tailwind, JavaScript and React.
                      </li>
                      <li>Excellent communication and teamwork abilities.</li>
                      <li>
                        Excellent time management and organizational skills.
                      </li>
                      <li>Proven ability to work with a team.</li>
                      <li>Graphics Design</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        
      </div>
    </div>
  );
};

export default Resume;
