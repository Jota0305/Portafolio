import React from "react";
import banner from "../assets/img/banner.jpeg";
import profile from "../assets/img/jota.jpg";
import {
  RiGithubFill,
  RiLinkedinFill ,
  RiWhatsappFill,
  RiMessengerFill,
  RiMoonLine,
  RiSunLine 
} from "react-icons/ri";

function Header({changeTheme}) {
  return (
    <div>
      <div className="relative">
        <img className="w-full h-[250px]" src={banner} alt="banner" />
        <div className="absolute inset-0 bg-black opacity-85" />
        <div className="absolute flex flex-col items-center justify-center inset-0 gap-6 md:flex-row md:items-center md:justify-center md:inset-0 md:gap-16">
          <img
            className="w-[110px] h-[110px] flex items-center justify-center md:w-[150px] md:h-[150px] rounded-full object-cover shadow-lg shadow-cyan-500/100"
            src={profile}
            alt="profile"
          />
          <div className="text-center md:text-left">
            <h1 className="text-2xl text-white md:text-4xl md:mb-1">
              JOSE LUIS TASILLA HUARIPATA
            </h1>
            <h2 className="text-1xl text-white mb-2 md:text-2xl md:mb-4">
              Frontend Developer
            </h2>
            <div className="flex gap-5 items-center justify-center md:gap-7 md:flex-row md:items-center md:justify-start">
              <a href="https://github.com/Jota0305">
                <RiGithubFill className="w-5 h-5 md:w-8 md:h-8 bg-white rounded-full" />
              </a>
              <a href="https://www.linkedin.com/in/joseth/">
                <RiLinkedinFill  className="w-5 h-5 p-1 md:w-8 md:h-8 bg-white rounded-full" />
              </a>
              <a href="https://wa.me/message/6XASKC46BSZUI1">
                <RiWhatsappFill className="w-5 h-5 md:w-8 md:h-8 bg-white rounded-full" />
              </a>
              <a href="https://m.me/JozeLTH?hash=AbZdE6NFjlDiUbjE&source=qr_link_share">
                <RiMessengerFill className="w-5 h-5 md:w-8 md:h-8 bg-white rounded-full" />
              </a>
            </div>
          </div>
          <button className="absolute flex inset-0 gap-6" onClick={changeTheme}>
            <RiMoonLine className="w-6 h-6 text-white rounded-full"/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
