import React from "react";

function Header() {
  return (
    <div>
      <div className="relative h-[250px] bg-[url('/img/banner.jpeg')]">
        <div className="absolute flex justify-center inset-0 bg-black opacity-85">
          <div className="flex items-center justify-center inset-0 gap-16">
            <img
              className="w-[150px] h-[170px] rounded-full"
              src="/img/jota.jpg"
              alt="profile"
            />
            <div>
              <h1 className="text-white text-4xl">
                JOSE LUIS TASILLA HUARIPATA
              </h1>
              <h2 className="text-white text-2xl">Frontend Developer</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
