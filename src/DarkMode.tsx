import "./DarkMode.css";
import { ChangeEventHandler } from "react";


const setDark = () => {
  localStorage.setItem("theme", "dark");
  document.documentElement.setAttribute("data-theme", "dark");


 
  
};

const setLight = () => {
  localStorage.setItem("theme", "light");
  document.documentElement.setAttribute("data-theme", "light");
};

const storedTheme = localStorage.getItem("theme");

const prefersDark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

const defaultDark =
  storedTheme === "dark" || (storedTheme === null && prefersDark);

if (defaultDark) {
  setDark();
}

// 5

const toggleTheme: ChangeEventHandler<HTMLInputElement> = (e) => {
  if (e.target.checked) {
    setDark();
  } else {
    setLight();
  }
};



const DarkMode = () => {
  return (
    <div className="toggle-theme-wrapper">
      <input
        type="checkbox"
        id="checkbox"
        onChange={toggleTheme}
        defaultChecked={defaultDark}
      />
      <label className="toggle-theme" htmlFor="checkbox">
      </label>
    </div>
  );
};

export default DarkMode;


