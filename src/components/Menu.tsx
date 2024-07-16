import { Menu as MenuIcon, X } from "lucide-react";
import { useState } from "react";
import NewVideo from "./NewVideo";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="rounded-lg border-2 text-white flex items-center justify-center border-white p-2 md:hidden"
      >
        <MenuIcon />
      </button>

      {isOpen && (
        <>
          <div className="fixed left-0 top-0 w-full h-full bg-custom-dark/80 z-40"></div>
          <div className="fixed left-0 top-0 w-full text-white p-4 bg-zinc-950 flex flex-col gap-4 z-50">
            <button
              className="p-0.5 border-4 border-white text-white rounded-full ml-auto"
              onClick={() => setIsOpen(false)}
            >
              <X />
            </button>

            <div className="p-4 flex flex-col gap-8">
              <button className="border-2 flex items-center justify-center border-blue-600 w-full md:w-[180px] h-[54px] rounded-xl">
                <a
                  href="/"
                  className="text-blue-600 h-full w-full flex items-center justify-center"
                >
                  HOME
                </a>
              </button>
              <NewVideo/>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menu;
