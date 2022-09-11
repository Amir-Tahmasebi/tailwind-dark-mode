import { useState } from "react";
import {
  BsFillSunFill as SunIcon,
  BsFillMoonFill as MoonIcon,
} from "react-icons/bs";
import { MdOutlineMenuOpen as OpenIcon } from "react-icons/md";
import {
  FaWindowClose as CloseIcon,
  FaPhoenixSquadron as AppLogo,
} from "react-icons/fa";

export default function Header({ darkMode, setDarkMode }) {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prev) => !prev);
    if (!open) {
      document.body.classList.remove("overflow-visible");
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
      document.body.classList.add("overflow-visible");
    }
  };

  const handleToggleDarkMode = () => {
    localStorage.setItem("theme-mode", !darkMode ? "dark" : "light");
    setDarkMode((prev) => !prev);
  };

  return (
    <header className="border-b border-gray-200 bg bg-white dark:bg-slate-900                                                                                                                        ">
      <nav className="flex flex-wrap h-auto sm:h-20 justify-start items-center px-3 py-2 sm:py-0">
        <div className="w-full flex  justify-start sm:justify-around sm:w-1/5">
          <div
            onClick={toggleMenu}
            className="md:hidden border rounded p-2 cursor-pointer border-slate-700 dark:border-white drak:bg-slate-700 ml-2"
          >
            <OpenIcon className="dark:text-gray-50 text-xl" />
          </div>
          <div
            onClick={handleToggleDarkMode}
            className="border rounded p-2 cursor-pointer border-slate-700 dark:border-white drak:bg-slate-700 dark:text-blue-50 duration-700"
          >
            {darkMode && <MoonIcon />}
            {!darkMode && <SunIcon />}
          </div>
          <h1 className="text-gray-700 font-bold dark:text-gray-100 text-xl mr-4 sm:mr-0">
            عنوان تستی
          </h1>
        </div>
        <ul className="hidden md:flex  md:justify-center md:items-center w-full md:w-3/5 mt-4 md:mt-0 ">
          <li className="ml-5 text-sm text-gray-700 dark:text-gray-100">
            خانه
          </li>
          <li className="ml-5 text-sm text-gray-700 dark:text-gray-100">
            خدمات
          </li>
          <li className="ml-5 text-sm text-gray-700 dark:text-gray-100">
            سرویس ها
          </li>
          <li className="ml-5 text-sm text-gray-700 dark:text-gray-100">
            درباره ما
          </li>
          <li className="ml-5 text-sm text-gray-700 dark:text-gray-100">
            تماس باما
          </li>
        </ul>
        <div
          className={`h-screen bg-gray-50  shadow fixed right-0 top-0 duration-700 overflow-hidden dark:bg-gray-800 ${
            open ? "w-2/3" : "w-0"
          }`}
        >
          <div className="flex justify-end p-2">
            <CloseIcon
              className="text-2xl dark:text-gray-50"
              onClick={toggleMenu}
            />
          </div>
          <div className="border border-gray-300 mt-3 mx-2 rounded p-3 flex justify-center items-center dark:text-gray-50">
            <AppLogo className="ml-4 text-xl" />
            <p className="">تست</p>
          </div>
          <ul className="mt-4 mx-2">
            <li className="text-sm text-gray-700 dark:text-gray-100">خانه</li>
            <li className="text-sm text-gray-700 dark:text-gray-100">خدمات</li>
            <li className="text-sm text-gray-700 dark:text-gray-100">
              سرویس ها
            </li>
            <li className="text-sm text-gray-700 dark:text-gray-100">
              درباره ما
            </li>
            <li className="text-sm text-gray-700 dark:text-gray-100">
              تماس باما
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
