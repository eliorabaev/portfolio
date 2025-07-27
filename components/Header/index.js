import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Button from "../Button";
import data from "../../data/portfolio.json";

const Header = ({ handleWorkScroll, handleAboutScroll, isBlog }) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { name, showBlog, showResume } = data;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Popover className="block tablet:hidden mt-5">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0">
              <h1
                onClick={() => router.push("/")}
                className="font-medium p-2 laptop:p-0 link cursor-pointer
                           hover:scale-105 transition-transform duration-200"
              >
                {name}.
              </h1>

              <div className="flex items-center gap-3">
                {data.darkMode && (
                  <Button
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                    variant="glass"
                    classes="p-2"
                  >
                    <img
                      className="h-5 w-5 transition-transform duration-200 hover:rotate-12"
                      src={`/images/${
                        theme === "dark" ? "moon.svg" : "sun.svg"
                      }`}
                      alt="Theme toggle"
                    />
                  </Button>
                )}

                <Popover.Button className="glass-button-premium p-2">
                  <img
                    className="h-5 w-5"
                    src={`/images/${
                      !open
                        ? theme === "dark"
                          ? "menu-white.svg"
                          : "menu.svg"
                        : theme === "light"
                        ? "cancel.svg"
                        : "cancel-white.svg"
                    }`}
                    alt="Menu toggle"
                  />
                </Popover.Button>
              </div>
            </div>
            
            <Popover.Panel
              className={`absolute right-0 z-20 w-11/12 p-6 mt-2
                          glass-mobile-premium ${theme === "dark" ? "dark" : "light"}`}
            >
              {!isBlog ? (
                <div className="grid grid-cols-1 gap-2 relative z-10">
                  <Button 
                    onClick={handleWorkScroll}
                    variant="glass"
                    classes="text-left justify-start"
                  >
                    Work
                  </Button>
                  <Button 
                    onClick={handleAboutScroll}
                    variant="glass"
                    classes="text-left justify-start"
                  >
                    About
                  </Button>
                  {showBlog && (
                    <Button 
                      onClick={() => router.push("/blog")}
                      variant="glass"
                      classes="text-left justify-start"
                    >
                      Blog
                    </Button>
                  )}
                  {showResume && (
                    <Button
                      onClick={() => router.push("/resume")}
                      variant="glass"
                      classes="text-left justify-start"
                    >
                      Resume
                    </Button>
                  )}
                  <Button
                    onClick={() => window.open("mailto:elior.abaev@gmail.com")}
                    variant="glass"
                    classes="text-left justify-start"
                  >
                    Contact
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-2 relative z-10">
                  <Button 
                    onClick={() => router.push("/")}
                    variant="glass"
                    classes="text-left justify-start"
                  >
                    Home
                  </Button>
                  {showBlog && (
                    <Button 
                      onClick={() => router.push("/blog")}
                      variant="glass"
                      classes="text-left justify-start"
                    >
                      Blog
                    </Button>
                  )}
                  {showResume && (
                    <Button
                      onClick={() => router.push("/resume")}
                      variant="glass"
                      classes="text-left justify-start"
                    >
                      Resume
                    </Button>
                  )}
                  <Button
                    onClick={() => window.open("mailto:elior.abaev@gmail.com")}
                    variant="glass"
                    classes="text-left justify-start"
                  >
                    Contact
                  </Button>
                </div>
              )}
            </Popover.Panel>
          </>
        )}
      </Popover>
      
      <header
        className={`mt-0 hidden tablet:flex flex-row items-center justify-between 
                    sticky top-0 backdrop-blur-xl py-3 px-8 rounded-b-2xl
                    glass-header-premium ${theme === "dark" ? "dark" : "light"}
                    transition-all duration-300 ease-in-out`}
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1000,
          willChange: 'transform'
        }}
      >
        <h1
          onClick={() => router.push("/")}
          className="font-bold text-lg cursor-pointer relative z-10
                     hover:scale-105 transition-all duration-300
                     bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent
                     hover:from-blue-500 hover:to-purple-500"
        >
          {name}.
        </h1>
        
        {!isBlog ? (
          <div className="flex items-center gap-1 relative z-10">
            <Button 
              onClick={handleWorkScroll}
              variant="glass"
              classes="font-medium"
            >
              Work
            </Button>
            <Button 
              onClick={handleAboutScroll}
              variant="glass"
              classes="font-medium"
            >
              About
            </Button>
            {showBlog && (
              <Button 
                onClick={() => router.push("/blog")}
                variant="glass"
                classes="font-medium"
              >
                Blog
              </Button>
            )}
            {showResume && (
              <Button
                onClick={() => router.push("/resume")}
                variant="glass"
                classes="font-medium"
              >
                Resume
              </Button>
            )}
            <Button
              onClick={() => window.open("mailto:elior.abaev@gmail.com")}
              variant="glass"
              classes="font-medium"
            >
              Contact
            </Button>
            
            {mounted && theme && data.darkMode && (
              <div className="ml-4 pl-4 border-l border-white/20">
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="glass-button-premium p-3 group"
                  aria-label="Toggle theme"
                >
                  <img
                    className="h-5 w-5 transition-all duration-300 
                               group-hover:rotate-180 group-hover:scale-110"
                    src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                    alt={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                  />
                </button>
              </div>
            )}
          </div>
        ) : (
          <div className="flex items-center gap-1 relative z-10">
            <Button 
              onClick={() => router.push("/")}
              variant="glass"
              classes="font-medium"
            >
              Home
            </Button>
            {showBlog && (
              <Button 
                onClick={() => router.push("/blog")}
                variant="glass"
                classes="font-medium"
              >
                Blog
              </Button>
            )}
            {showResume && (
              <Button
                onClick={() => router.push("/resume")}
                variant="glass"
                classes="font-medium"
              >
                Resume
              </Button>
            )}
            <Button
              onClick={() => window.open("mailto:elior.abaev@gmail.com")}
              variant="glass"
              classes="font-medium"
            >
              Contact
            </Button>

            {mounted && theme && data.darkMode && (
              <div className="ml-4 pl-4 border-l border-white/20">
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="glass-button-premium p-3 group"
                  aria-label="Toggle theme"
                >
                  <img
                    className="h-5 w-5 transition-all duration-300 
                               group-hover:rotate-180 group-hover:scale-110"
                    src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                    alt={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
                  />
                </button>
                </div>
            )}
          </div>
        )}
      </header>
    </>
  );
};

export default Header;