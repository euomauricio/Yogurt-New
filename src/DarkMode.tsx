import "./DarkMode.css";
import { ChangeEventHandler } from "react";


const setDark = () => {
  localStorage.setItem("theme", "dark");
  document.documentElement.setAttribute("data-theme", "dark");


  //Recebemos dois valores por parâmetro.
    
    /*
     document.getElementById: acessa um objeto na página através do atributo ID, tudo que tiver um identificador é um objeto e é através dele que vamos acessar.
     (objeto): é dentro dos parenteses que informamos qual objeto acessar, neste exemplo o objeto será passado por parâmetro.
     src: é abreviação de source, é o caminho da nova imagem.
     = caminhoNovaImagem: Informa o diretório da nova imagem, como: c:/window/wallpaper.jpg
     */
  
  
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


