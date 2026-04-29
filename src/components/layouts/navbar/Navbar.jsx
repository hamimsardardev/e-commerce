import React from "react";
import Logo from "./Logo";
import Container from "../Container";
import Navbardata from "@/data/navbar";
import Navicons from "./Navicons";





const Navbar = () => {
  return (
    <header className="mt-7.5 mb-5">
      <nav>
        <Container>
          <div className="flex items-center justify-between gap-14">
            <Logo />

            <ul className="flex gap-11.25">
              {Navbardata?.navlist?.map((item, index) => (
                <li key={index}>
                  <a
                    href={item?.url}
                    className="relative font-jost uppercase font-medium text-sm leading-6 after:content-[''] after:w-0 after:h-0.5 after:absolute after:bg-primary after:bottom-[-4px] after:left-0 hover:after:w-2/4 after:duration-300"
                  >
                    {item?.title}
                  </a>
                </li>
              ))}
            </ul>

            <Navicons/>
          </div>
        </Container>
      </nav>
    </header>
  );
};

export default Navbar;