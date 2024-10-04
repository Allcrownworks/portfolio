import im from "../Image/mi.jpg";
import imi from "../Image/mii.jpg";
import { motion } from "framer-motion";


const Portfolio = () => {
  return (
    <div className="min-h-screen p-4 md:p-0 space-y-2 md:space-y-0">
      <div className=" text-[13px] items-center justify-center col-span-3 w-full h-auto md:py-14 md:px-20 py-10">
        <motion.div   initial={{ x: '-100vw' }}  // Start off-screen to the left
        animate={{ x: 0 }}         // Slide to its original position
        transition={{ type: 'bounce', stiffness: 120 }} 
       className="shadow-slate-500 shadow-md py-2 bg-orange-600 text-center text-white font-semibold">
          <h1 className="font-serif tracking-widest">TESTIMONIAL.</h1>
        </motion.div>
      </div>
      <div className=" text-[13px] items-center justify-center col-span-3 w-full h-auto md:py-2 md:px-20 pb-8">
        <motion.div   initial={{ x: '-100vw' }}  // Start off-screen to the left
        animate={{ x: 0 }}         // Slide to its original position
        transition={{ type: 'bounce', stiffness: 120 }} 
       className="shadow-slate-500 shadow-md py-2 bg-orange-600 text-center text-white font-semibold">
          <h1 className="font-serif tracking-widest">While Building My Children's Future With The Little I have Known.</h1>
        </motion.div>
      </div>
      <motion.div   initial={{ y: 200 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 150 }}
        className="lg:pt-16 grid lg:grid-cols-3 md:px-20 p-1 gap-4 justify-center items-center space-y-10 lg:space-y-0">
        {/* <-------------------------------Testimonial 1---------------------------------> */}
        <div className="bg-slate-50 w-full h-auto text-center grid grid-cols-1 items-center justify-center p-4 shadow-md gap-3 rounded-md shadow-slate-500">
          <div className="shadow-slate-500 bg-slate-100 w-full h-auto rounded-lg p-4 col-span-2 relative bottom-7 shadow-md">
            <h1 className="text-base md:text-lg font-bold font-serif">
              Gbogboade Adeola.
            </h1>
          </div>
          <div className="relative bg-red-900 w-24 h-24 rounded-full  bottom-12 col-start-3">
            <img
              src={imi}
              alt=""
              className="object-cover rounded-full duration-1000 hover:scale-110 border-orange-600 border-2 hover:border-blue-700 shadow-lg shadow-sky-900 hover:shadow-orange-500"
            />
          </div>
          <div className="shadow-slate-500 bg-slate-100 w-full h-auto rounded-lg p-4 col-span-3 relative bottom-8 shadow-md">
            <p>
            "HTML is like the skeleton of a web page, and CSS is like the clothes that make it look nice. I learned how to dress up my web pages!"
            </p>
          </div>
        </div>
        {/* <-------------------------------Testimonial 2---------------------------------> */}
        <div className="bg-slate-50 w-full h-auto text-center grid grid-cols-1 items-center justify-center p-4 shadow-md gap-3 rounded-md shadow-slate-500">
          <div className="shadow-slate-500 bg-slate-100 w-full h-auto rounded-lg p-4 col-span-2 relative bottom-7 shadow-md">
            <h1 className="text-base md:text-lg font-bold font-serif">
              Gbogboade Adeiye.
            </h1>
          </div>
          <div className="relative bg-red-900 w-24 h-24 rounded-full  bottom-12 col-start-3">
            <img
              src={im}
              alt=""
              className="object-cover rounded-full duration-1000 hover:scale-110 border-orange-600 border-2 hover:border-blue-700 shadow-lg shadow-sky-900 hover:shadow-orange-500"
            />
          </div>
          <div className="shadow-slate-500 bg-slate-100 w-full h-auto rounded-lg p-4 col-span-3 relative bottom-8 shadow-md">
            <p>
            "Change colors! I set my background to sky blue and my text to bright orange, making my webpage look vibrant and lively."
            </p>
          </div>
        </div>
        {/* <-------------------------------Testimonial 3---------------------------------> */}
        <div className="bg-slate-50 w-full h-auto text-center grid grid-cols-1 items-center justify-center p-4 shadow-md gap-3 rounded-md shadow-slate-500">
          <div className="shadow-slate-500 bg-slate-100 w-full h-auto rounded-lg p-4 col-span-2 relative bottom-7 shadow-md">
            <h1 className="text-base md:text-lg font-bold font-serif">
              Gbogboade Adeogo.
            </h1>
          </div>
          <div className="relative bg-red-900 w-24 h-24 rounded-full  bottom-12 col-start-3">
            <img
              src={im}
              alt=""
              className="object-cover rounded-full duration-1000 hover:scale-110 border-orange-600 border-2 hover:border-blue-700 shadow-lg shadow-sky-900 hover:shadow-orange-500"
            />
          </div>
          <div className="shadow-slate-500 bg-slate-100 w-full h-auto rounded-lg p-5 col-span-3 relative bottom-8 shadow-md">
            <p className="p-1">
            "I learned how to change fonts and colors on my web page. It’s amazing to see something I created on the screen!"
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Portfolio;
