import React, { useState, useRef, useEffect, Component } from "react";
import { Link } from "react-router-dom";
//import logo.png from assets
import logo from "../assets/logo.png";

function Nav() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  function checkAuth() {
    if (localStorage.getItem("auth-token")) {
      return true;
    } else {
      return false;
    }
  }

  function logout() {
    localStorage.removeItem("auth-token");
    window.location = "/login";
  }

  const setMenuToTrue = () => {
    setIsMenuVisible(true);
  };
  const setMenuToFalse = () => {
    setIsMenuVisible(false);
  };

  const toggle = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMenuVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header ref={navRef} class="relative">
        <div class="block bg-white border-b border-gray-200">
          <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div class="flex justify-between h-16 lg:h-[72px]">
              <div class="flex items-center flex-shrink-0 -m-1">
                <a href="/" title="" class="flex">
                  <img class="w-auto h-10" src={logo} alt="" />
                </a>
              </div>

              <div class="flex items-center justify-end ml-auto space-x-6">
                <div class="hidden lg:flex lg:justify-start lg:ml-16 lg:space-x-8 xl:space-x-14">
                  <a
                    href="/add-food"
                    title=""
                    class="inline-flex items-center font-sans text-sm font-medium text-gray-900 transition-all duration-200 border-b-2 border-transparent xl:text-base hover:border-gray-900 focus:outline-none focus:border-gray-900"
                  >
                    Add product
                  </a>
                 
                    {
                        checkAuth() && (
                            <div
                                onClick={() => { logout() }}
                                className="inline-flex items-center font-sans text-sm font-medium text-gray-900 transition-all duration-200 border-b-2 border-transparent xl:text-base hover:border-gray-900 focus:outline-none focus:border-gray-900"
                            >
                                Logout
                            </div>
                        )
                    }

                    {
                        !checkAuth() && (
                            <a
                                href="/login"
                                title=""
                                className="inline-flex items-center font-sans text-sm font-medium text-gray-900 transition-all duration-200 border-b-2 border-transparent xl:text-base hover:border-gray-900 focus:outline-none focus:border-gray-900"
                            >
                                Login
                            </a>
                        )
                    }
                </div>

                <button
                  onClick={() => toggle()}
                  type="button"
                  class="p-2 -m-2 text-gray-900 transition-all duration-200 lg:hidden hover:text-gray-700"
                  style={{ zIndex: 10000 }}
                >
                  <svg
                    class="w-8 h-8"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>

                <a
                  href="/my-food"
                  class="hidden lg:inline-flex items-center justify-center text-white transition-all duration-200 bg-gray-900 rounded-full w-9 h-9 md:w-12 md:h-12 hover:bg-gray-700"
                >
                  <svg
                    class="w-5 h-5 md:w-6 md:h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {isMenuVisible && (
          <div className={`fixed z-20 right-0 top-2 w-1/3 min-w-fit`}>
            <nav className=" flex flex-col justify-center p-5 space-y-2 lg:hidden mt-14 shadow-lg bg-white bg-opacity-90 gap-3 rounded-b-xl">
              <a
                href="/add-food"
                onClick={setMenuToFalse}
                title=""
                className="flex justify-center transition-all duration-200 ease-out active:scale-110 p-2 text-base font-medium text-black focus:text-blue-600 rounded-xl bg-black bg-opacity-5 hover:bg-opacity-10"
              >
                {" "}
                Add food{" "}
              </a>
              <a
                href="/my-food"
                onClick={setMenuToFalse}
                title=""
                className="flex justify-center transition-all duration-200 ease-out active:scale-110 p-2 text-base font-medium text-black focus:text-blue-600 rounded-xl bg-black bg-opacity-5 hover:bg-opacity-10"
              >
                {" "}
                My food{" "}
              </a>
              <a
                href=""
                onClick={setMenuToFalse}
                title=""
                className="flex justify-center transition-all duration-200 ease-out active:scale-110 p-2 text-base font-medium text-black focus:text-blue-600 rounded-xl bg-black bg-opacity-5 hover:bg-opacity-10"
              >
                {" "}
                About{" "}
              </a>
              <a
                href=""
                onClick={setMenuToFalse}
                title=""
                className="flex justify-center transition-all duration-200 ease-out active:scale-110 p-2 text-base font-medium text-black focus:text-blue-600 rounded-xl bg-black bg-opacity-5 hover:bg-opacity-10"
              >
                {" "}
                Contact{" "}
              </a>
              <a
                href=""
                onClick={() => {
                  logout();
                }}
                title=""
                className="flex justify-center transition-all duration-200 ease-out active:scale-110 p-2 text-base font-medium text-black focus:text-blue-600 rounded-xl bg-black bg-opacity-5 hover:bg-opacity-10"
              >
                {" "}
                Logout{" "}
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}

export default Nav;
