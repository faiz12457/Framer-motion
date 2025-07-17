import React from "react";
import { FlyoutLink } from "./Link";
import InternButton from "./InternButton";

function NavBar() {
  const links = [
    { title: "Home" },
    { title: "About" },
    { title: "Internships" },
    { title: "Services" },
    { title: "Careers" },
    { title: "Support" },
  ];
  return (
    <div className="w-full h-20 fixed top-0 z-20 bg-[#070707] flex justify-between  px-6">
      <div className="flex gap-2 items-center w-fit h-full">
        <img src="/Logo.png" className="h-14 w-10" />
        <div className=" h-full flex flex-col justify-end">
          <p className="text-2xl font-semibold text-white">EncryptEdge</p>
          <div className="text-[#1FB1C3] flex">
            <span className="ml-auto">Labs</span>
          </div>
        </div>
      </div>

      <div className="flex gap-7 items-center h-full">
        {links.map((l, i) => (
          <FlyoutLink key={i}>{l.title}</FlyoutLink>
        ))}
      </div>

      <div className="flex items-center h-full">
        <InternButton
          animationTextColor={"#27C5D9"}
          primaryTextColor={"black"}
          title={"Intern Portal"}
          primaryBgColor={"#27C5D9"}
          animationBgColor={"black"}
          animationBorderColor={"#27C5D9"}
        />
      </div>
    </div>
  );
}

export default NavBar;
