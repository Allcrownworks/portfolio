import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
import React from "react";





  function Contact() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);

      formData.append("access_key", "f70a84c0-7e1d-4cb3-a959-8466d45aa200");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
 
  
  return (
    <div className="p-2 pt-14 md:px-20">
      <div className=" text-[13px] items-center justify-center col-span-3 w-full h-auto">
        <motion.div
          initial={{ x: "-100vw" }} // Start off-screen to the left
          animate={{ x: 0 }} // Slide to its original position
          transition={{ type: "bounce", stiffness: 120 }}
          className="shadow-slate-500 shadow-md py-2 bg-orange-600 text-center text-white font-semibold"
        >
          <h1 className="font-serif tracking-widest">CONTACT</h1>
        </motion.div>
      </div>
      <div className="grid md:grid-cols-3 justify-center md:pt-20 items-center">
        <div className="md:col-span-1">
          <motion.div
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="p-4 font-serif"
          >
            <div className="flex items-center space-x-3">
              <FaLocationDot className="size-5 text-orange-500" />
              <h1 className="text-3xl">Location:</h1>
            </div>
            <p className="text-1xl">3A Anifowoshe Street Of Olaniyi Street,</p>
            <p className="text-1xl"> Abule-Egba,</p>
            <p>Lagos.</p>
          </motion.div>
          <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="p-4 font-serif"
          >
            <div className="flex items-center space-x-3">
              <MdEmail className="size-5 text-orange-500" />
              <h1 className="text-3xl">Email:</h1>
            </div>
            <p className="text-red-600">
              <a href="mailto:allcrownworks@gmail.com">
                allcrownworks@gmail.com
              </a>
            </p>
          </motion.div>
          <motion.div
            initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="p-4 font-serif"
          >
            <div className="flex items-center space-x-3">
              <FaPhoneAlt className="size-5 text-orange-500" />
              <h1 className="text-3xl">Call:</h1>
            </div>
            <p className="text-1xl">+2348071070888</p>
          </motion.div>
        </div>
        {/* --------------------------------Form------------------------------------ */}
        <div className="font-serif md:col-span-2 ">
          <div className=" text-center">
            <form  onSubmit={onSubmit}>            
              <div className="grid text-center gap-6 p-2 w-full">
                <motion.div  initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 1, duration: 0.5 }} className="text-start p-2 rounded-md border-2 border-orange-600 col-span-2 md:col-span-1">
                  <input type="hidden" name="access_key" value="f70a84c0-7e1d-4cb3-a959-8466d45aa200"></input>
                  <input type="text" name="first_name" placeholder="Your First Name" className="outline-none w-full" required />
                </motion.div>
                <motion.div  initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 1, duration: 0.5 }} className="text-start p-2 rounded-md border-2 border-orange-600 col-span-2 md:col-span-1">
                  <input type="text" name="second_name" placeholder="Your Second Name" className="outline-none w-full" required />
                </motion.div>
                <motion.div  initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 1, duration: 0.5 }} className="text-start p-2 rounded-md border-2 border-orange-600 col-span-2 md:col-span-1">
                  {""}
                  <input
                    type="text"
                    name= "telephone_number"
                    placeholder="Your Telephone Number."
                      className="outline-none w-full"
                    required
                  />
                </motion.div>
                <motion.div  initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 1, duration: 0.5 }} className="text-start p-2 rounded-md border-2 border-orange-600 col-span-2 md:col-span-1">
                  {" "}
                  <input type="email" name="email" placeholder="Your Email" className="outline-none w-full" required />
                </motion.div>
                <motion.div  initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 1, duration: 0.5 }} className="text-start p-2 rounded-md border-2 border-orange-600 col-span-2">
                  <input type="text" name="subject" placeholder="Subject" className="outline-none w-full" required />
                </motion.div>
                <motion.div  initial={{ x: "100vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 1, duration: 0.5 }} className="text-start border-2 col-span-2 p-2 rounded-lg border-orange-600 bg-transparent">
                  <textarea 
                    name="message"
                    placeholder="Write your message"
                    className="outline-none h-20 w-full"
                    required
                  ></textarea>
                </motion.div>
                <motion.div
                   initial={{ x: "-300vw" }}
            animate={{ x: 0 }}
            transition={{ delay: 1, duration: 0.5 }} className="col-span-2"
              
                >
                  <button className="w-full h-10 p-2 text-center rounded-md border-2 border-orange-600 outline-none hover:bg-orange-600 hover:text-white text-lg font-bold cursor-pointer">Submit</button>
                </motion.div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className=" text-[13px] items-center justify-center col-span-3 w-full h-auto pt-6">
         <motion.div
          initial={{ x: "-100vw" }} // Start off-screen to the left
          animate={{ x: 0 }} // Slide to its original position
          transition={{ type: "bounce", stiffness: 120 }}
          className="shadow-slate-500 shadow-md py-2 bg-orange-600 text-center text-white font-semibold"
        > 
      <span className="bg-orange-600 p-2 px-4 text-white rounded-md font-semibold">{result}</span>
      </motion.div> 
      </div>
    </div>
  );
};

export default Contact;
{/* <div class="text-center mt-3 mb-3">
  <button
    onclick="window.open('GBOGBOADE ADEGBENGA Web Developer Resume..pdf','blank')"
    id="button"
    type="submit"
  >
    Print My Resume
  </button>
</div>; */}
