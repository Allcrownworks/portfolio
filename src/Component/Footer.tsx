import wap from "../Image/whatsap.png";
import face from "../Image/facebook.png";
import insta from "../Image/instagramme.png";

// className="bg-gradient-to-b from-blue-600 to-amber-600 p-1">

const Footer = () => {
  return (
    <div className="bg-orange-600 p-1">
      <div className=" flex-1 justify-between items-center px-10 md:flex md:px-20">
        <span className="text-sm sm:text-xl font-bold tracking-widest text-center">
          <h1>
            <span className="text-black">Allcrown</span>
            <span className="text-white">works</span>
          </h1>
        </span>
        <span className="flex gap-4 items-center justify-center">       
          <img src={wap} alt="" className="size-10 duration-500 hover:scale-110" />
          <img src={face} alt="" className="size-10 duration-500 hover:scale-110" />
          <img src={insta} alt="" className="size-10 duration-500 hover:scale-110" />
        </span>
        <span  className="flex items-center justify-center">
        <p className="text-sm">©Copywrite Allcrownwork 2024</p>
        </span>       
      </div>
    </div>
  );
};

export default Footer;
