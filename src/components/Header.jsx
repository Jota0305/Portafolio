import React from "react";
import banner from "../assets/img/banner.jpeg"
import profile from "../assets/img/jota.jpg"
import { RiGithubFill, RiLinkedinBoxFill, RiWhatsappFill, RiFacebookCircleFill } from "react-icons/ri";

function Header() {
  return (
    <div>
      <div className="relative">
        <img
          className="w-full h-[250px]"
          src={banner}
          alt="banner"
        />
        <div className="absolute inset-0 bg-black opacity-85" />
        <div className="absolute flex flex-col items-center justify-center inset-0 gap-6 md:flex-row md:items-center md:justify-center md:inset-0 md:gap-16">
          <img
            className="w-[110px] h-[110px] flex items-center justify-center md:w-[150px] md:h-[150px] rounded-full object-cover shadow-lg shadow-cyan-500/100"
            src={profile}
            alt="profile"
          />
          <div className="text-center md:text-left">
            <h1 className="text-2xl text-white md:text-4xl md:mb-1">JOSE LUIS TASILLA HUARIPATA</h1>
            <h2 className="text-1xl text-white mb-1 md:text-2xl md:mb-4">Frontend Developer</h2>
            <div className="flex gap-6 items-center justify-center md:gap-6 md:flex-row md:items-center md:justify-start">
              <a href="https://github.com/Jota0305">
               <RiGithubFill className="w-5 h-5 md:w-8 md:h-8 bg-white rounded-full"/>
              </a>
              <a href="">
               <RiLinkedinBoxFill className="w-5 h-5 md:w-8 md:h-8 bg-white rounded-full"/>
              </a>
              <a href="">
               <RiWhatsappFill className="w-5 h-5 md:w-8 md:h-8 bg-white rounded-full"/>
              </a>
              <a href="">
               <RiFacebookCircleFill className="w-5 h-5 md:w-8 md:h-8 bg-white rounded-full"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;