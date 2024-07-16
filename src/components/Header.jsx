import React from "react";

function Header() {
  return (
    <div>
      <div className="relative">
        <img
          className="w-full h-[250px]"
          src="/img/banner.jpeg"
          alt="banner"
        />
        <div className="absolute inset-0 bg-black opacity-85" />
        <div className="absolute flex items-center justify-center inset-0 gap-16">
          <img
            className="w-[150px] h-[170px] rounded-full"
            src="/img/jota.jpg"
            alt="profile"
          />
          <div>
            <h1 className="text-white text-4xl">JOSE LUIS TASILLA HUARIPATA</h1>
            <h2 className="text-white text-2xl">Frontend Developer</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;