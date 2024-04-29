import React, { useState } from "react";
import {} from "@heroicons/react/solid";
import {
  UserCircleIcon,
  ShoppingCartIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

export default function Header() {
  const [toogleMenu, setToggleMenu] = useState(false);

  return (
    <div className="w-full  flex flex-row p-5">
      <div className=" w-1/4 h-[100px] md:h-[50px] flex justify-start flex-col md:flex-row ">
        <nav className="pt-4">
          <div className="hidden md:block">
            <ul className=" flex flex-col md:flex-row text-white">
              <li>
                <a className=" text-blue-600 hover:text-black ml-4" href="/">
                  Home
                </a>{" "}
              </li>
              <li>
                <a className="text-blue-600 hover:text-black ml-4" href="#">
                  Mobiles
                </a>
              </li>
              <li>
                <a className=" text-blue-600 hover:text-black ml-4" href="#">
                  Appliences
                </a>
              </li>
              <li>
                <a className=" text-blue-600 hover:text-black ml-4" href="#">
                  Groceries
                </a>
              </li>
            </ul>
          </div>
          <button
            onClick={() => setToggleMenu(!toogleMenu)}
            className="block md:hidden"
          >
            <Bars3Icon className="h-6  text-blue-500 transform hover:scale-150 duration-115" />
          </button>
        </nav>

        {toogleMenu && (
          <nav className="block md:hidden">
            <ul
              onClick={() => setToggleMenu(false)}
              className="flex flex-col text-blue-600 mobile-nav"
            >
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#about">Mobiles</a>
              </li>
              <li>
                <a href="#projects">Appliences</a>
              </li>
              <li>
                <a href="#resume">Groceries</a>
              </li>
            </ul>
          </nav>
        )}
      </div>
      <div className="w-1/2 h-[50px] flex items-center justify-center">
        <h1 className="font-logo-font text-3xl  text-blue-600 font-bold">
          D-Kart
        </h1>
      </div>
      <div className="w-1/4 h-[50px] flex items-center justify-end ">
        <div className="mx-2 transform hover:scale-150 duration-115">
          <MagnifyingGlassIcon className="h-6 w-6 text-blue-500" />
        </div>
        <div className="mx-2 transform hover:scale-150 duration-115">
          <ShoppingCartIcon className="h-6 w-6 text-blue-500" />
        </div>
        <div className="mx-2 transform hover:scale-150 duration-115">
          <UserCircleIcon className="h-6 w-6 text-blue-500" />
        </div>
      </div>
    </div>
  );
}
