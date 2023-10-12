import { useEffect, useState } from "react";
import "./header.css";

const Header = () => {
  const [showModal, setshowModal] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "dark");
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark")
   document.body.classList.add("light")
      
    } else {
      document.body.classList.remove("light")
      document.body.classList.add("dark")

    }
   document.body.classList.add(theme)
  }, [theme]);
  return (
    <header className="  flex">
      <button onClick={() => {
        setshowModal(true)
      }} className="menu icon-menu flex">    </button>
      <div />

      <nav>
        <ul className="flex">
          <li>
            <a href="">About</a>
          </li>

          <li>
            <a href="">Articles</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>

      <button className="mode flex" onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark")
        localStorage.setItem("theme", theme === "dark" ? "light" : "dark")
      }}>
        <span className={theme === "light" ? "icon-sun" : 'icon-moon-o'}>  </span>
      </button>

      {showModal && (
        <div className="fixed">
          <ul className="modal ">
            <li >
              <button className="icon-close" onClick={() => {
                setshowModal(false)
              }} />   
              
             
              
           
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Articles</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Speaking</a>
            </li>
            <li>
              <a href="">Uses</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
