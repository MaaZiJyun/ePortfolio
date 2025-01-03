"use client";
import React from "react";
// import { useState } from "react";
import { useEffect, useState, useCallback } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import TextLogo from "./TextLogo";
import Container from "./Container";

const articleNav = [
  {
    name: "Artificial Intelligence",
    CNname: "人工知能",
    href: "/study/artificial_intelligence",
  },
  {
    name: "Blockchain Technology",
    CNname: "ブロックチェーン技術",
    href: "/study/blockchain_technology",
  },
  { name: "IELTS", CNname: "IELTS", href: "/study/ielts" },
  // { name: "Mathematics", CNname: "数学", href: "/study/mathematics" },
];

const basicNav = [
  { name: "Home", CNname: "ホーム", color: "#e74c3c", href: "/" },
  {
    name: "Study",
    CNname: "学習",
    color: "#f39c13",
    href: "/study",
    subNav: articleNav,
  },
  { name: "Posts", CNname: "記事", color: "#2fcb71", href: "/posts" },
  { name: "Music", CNname: "音楽", color: "#3398da", href: "/music" },
  { name: "Resume", CNname: "履歴", color: "#8d44ad", href: "/resume" },
];

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // show sub nav of article
  const [showSubNav, setShowSubNav] = useState(false);

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10;

    setPrevScrollPos(currentScrollPos);
    setVisible(visible);
  }, [prevScrollPos]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 
      ${visible ? "translate-y-0" : "-translate-y-full"} 
      ${prevScrollPos < 10 ? "gradient-bg-white-transparent" : "bg-white"}`}
    >
      <nav className="flex lg:pr-6 ">
        <div className="w-full flex items-center justify-between">
          {/* left */}
          <div className="flex lg:w-1/2">
            <a href="/" className="-m-1.5 p-1.5 ">
              <TextLogo />
            </a>
          </div>

          {/* right */}
          <div className="hidden lg:flex lg:w-1/2 lg:h-full space-x-1 justify-end">
            {basicNav.map((item,index) => (
              <div
                key={item.name}
                className="relatice hover:border-b-4 transition-all "
                // onMouseEnter={() => item.subNav && setShowSubNav(true)}
                // onMouseLeave={() => item.subNav && setShowSubNav(false)}
                onMouseEnter={() => {
                  item.subNav && setShowSubNav(true);
                  setHoveredIndex(index);
                }}
                onMouseLeave={() => {
                  item.subNav && setShowSubNav(false);
                  setHoveredIndex(null);
                }}
                style={{ borderColor: hoveredIndex === index ? item.color : "#000" }}
              >
                <a
                  href={item.href}
                  className="w-full h-full flex items-center justify-between px-8 text-lg font-semibold leading-6"
                >
                  <div
                    className={`flex flex-col items-center transition-all `}
                    style={{ color: hoveredIndex === index ? item.color : "#000" }}
                  >
                    <div className="flex">
                      <span className="text-lg font-semibold tracking-wide">
                        {item.name}
                      </span>
                    </div>
                    <div className="w-full flex justify-around">
                      {item.CNname.split("").map((char, index) => (
                        <span className="text-xs font-normal" key={index}>
                          {char}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
                {item.subNav && showSubNav && (
                  <div className="absolute bg-white bg-opacity-90 shadow-lg rounded-lg">
                    {item.subNav.map((subItem) => (
                      <a
                        key={subItem.name}
                        href={subItem.href}
                        className="flex items-center justify-between text-black px-4 py-3 hover:bg-white rounded-lg"
                      >
                        <span className="uppercase text-sm px-2 text-left">
                          {subItem.name}{" "}
                        </span>
                        <span className="text-xxs px-2 text-right">
                          {subItem.CNname}
                        </span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex lg:hidden p-6">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-10 w-10" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <TextLogo />
            </a>
            <button
              type="button"
              className="rounded-md p-6 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-10 w-10" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root p-6">
            <Container>
              <div className="divide-y divide-gray-500/10">
                <div className="space-y-4">
                  {basicNav.map((item) => (
                    <div key={item.name}>
                      <a
                        href={item.href}
                        className="block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        <div className="flex justify-between">
                          <span>{item.name}</span>
                          <span>{item.CNname}</span>
                        </div>
                      </a>
                      {item.subNav && (
                        <div className="flex flex-col">
                          {item.subNav.map((subItem) => (
                            <a
                              key={subItem.name}
                              href={subItem.href}
                              className="flex justify-between px-3 py-2 hover:bg-gray-50"
                            >
                              <span className="text-sm">{subItem.name} </span>
                              <span className="text-xxs">{subItem.CNname}</span>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Container>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Navbar;
