import React from "react";
import Logo from "./Logo";
import Navbardata from "@/data/navbar";
import Container from "../Container";

const Navbar = () => {
  return (
    <>
      <header>
        <nav>
          <Container>
            <div className="flex items-center gap-14">
              <Logo />
              <ul className="flex gap-11.25">
                {Navbardata?.navlist?.map((item, index) => (
                  <li key={index}>
                    <a
                      className="relative font-jost uppercase font-medium text-sm leading-6  after:content-[''] after:w-0 after:h-0.5 after:absolute after:bg-primary after:bottom-[-2px] after:left-0 hover:after:w-2/4 after:duration-300"
                      href="{item?.url}"
                    >
                      {item?.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
