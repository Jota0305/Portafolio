import React from "react";
import banner from "../assets/img/banner.jpeg"
import profile from "../assets/img/jota.jpg"

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
            <h1 className="text-2xl text-white md:text-4xl">JOSE LUIS TASILLA HUARIPATA</h1>
            <h2 className="text-1xl text-white md:text-2xl">Frontend Developer</h2>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;