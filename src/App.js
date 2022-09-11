import "./App.css";
import { useEffect, useState } from "react";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("theme-mode")) {
      setDarkMode(localStorage.getItem("theme-mode") === "dark" ? true : false);
    }
  }, []);

  return (
    <div className={`App ${darkMode && "dark"} `}>
      <div className=" h-full lg:h-screen  w-full dark:bg-slate-900">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="w-full h-full bg-slate-100 dark:bg-gray-800 mt-14">
          <div className="w-full sm:w-2/3 mx-auto h-full py-5 px-3 shadow rounded bg-white dark:bg-gray-900">
            <Content />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
