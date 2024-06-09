"use client";
import React from "react";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import TextLogo from "./TextLogo";

const navigation = [
  { name: "About", CNname: "關於", href: "/about" },
  { name: "Study", CNname: "學術", href: "/study" },
  { name: "Article", CNname: "文章", href: "/article" },
  { name: "Music", CNname: "音樂", href: "/music" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header>
      <nav className="flex bg-white">
        <div className="w-full flex items-center justify-between">
          {/* left */}
          <div className="flex lg:flex-1">
            <a href="/" className="-m-1.5 p-1.5 ">
              <TextLogo />
            </a>
          </div>

          {/* right */}
          <div className="hidden lg:flex lg:h-full space-x-1">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="hover:border-b-2 border-gray-700 hover:bg-black hover:bg-opacity-10"
              >
                <a
                  href={item.href}
                  className="w-full h-full flex items-center justify-between px-12 text-lg font-semibold leading-6 text-black"
                >
                  <div className="flex flex-col items-end">
                    <span className="text-xl font-semibold tracking-wide">
                      {item.name}
                    </span>

                    <div className="distribute-text">
                      {item.CNname.split("").map((char, index) => (
                        <span className="text-xxs font-normal" key={index}>
                          {char}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
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
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <TextLogo />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-10 w-10" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root p-6">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    <div className="flex justify-between">
                      <span>{item.name}</span>
                      <span>{item.CNname}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Navbar;
