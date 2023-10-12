// @ts-nocheck
import { useState } from "react";
import "./main.css";
import { projects } from "./MyProject";
import { AnimatePresence, motion } from "framer-motion";

const Main = () => {
  let [currentActive, setCurrentActive] = useState("all projects");
  let [arr, setArr] = useState(projects);
  let cs = projects.filter((e) => {
    return e.category === "css";
  });

  let handleClick = (btnCategory) => {
    let arrFilter = projects.filter((e) => {
      const cate = e.category.find((j) => {
        return j == btnCategory;
      });
      return cate === btnCategory;
    });
    setArr(arrFilter);
  };
  return (
    <main className="flex">
      <section className="flex  left-section">
        <button
          onClick={(e) => {
            setCurrentActive(e.target.innerHTML);
            setArr(projects);
          }}
          className={currentActive === "all projects" ? "active" : null}
        >
          all projects
        </button>
        <button
          onClick={(e) => {
            setCurrentActive(e.target.innerHTML);
            handleClick("css");
          }}
          className={currentActive === "HTML &amp; CSS" ? "active" : null}
        >
          HTML & CSS
        </button>
        <button
          onClick={(e) => {
            setCurrentActive(e.target.innerHTML);
            handleClick("javascript");
          }}
          className={currentActive === "JavaScript" ? "active" : null}
        >
          JavaScript
        </button>
        <button
          onClick={(e) => {
            setCurrentActive(e.target.innerHTML);
            handleClick("react");
          }}
          className={currentActive === "React &amp; MUI" ? "active" : null}
        >
          React & MUI
        </button>
        <button
          onClick={(e) => {
            setCurrentActive(e.target.innerHTML);
            handleClick("bootstrap");
          }}
          className={currentActive === "Bootstrap" ? "active" : null}
        >
          Bootstrap
        </button>
        <button
          onClick={(e) => {
            setCurrentActive(e.target.innerHTML);
            handleClick("strapi");
          }}
          className={currentActive === "React With Strapi" ? "active" : null}
        >
          React With Strapi
        </button>
      </section>

      <section className=" flex right-section">
         <AnimatePresence>
        {arr.map((e) => {
          return (
             <motion.article
               key={Math.random()}
               className="  card"
               layout
               initial={{ transform: "scale(0)" }}
               animate={{ transform: "scale(1)" }}
               transition={{damping:8, type:"spring", stiffness:50}}
             >
               <img width={266} src={e.imgPath} alt="img" />
          
               <div style={{ width: "266px" }} className="box">
                 <h1 className="title">{e.title} </h1>
                 <p className="sub-title">{e.description}</p>
          
                 <div className="flex icons">
                   <div style={{ gap: "11px" }} className="flex">
                     <div className="icon-link"></div>
                     <div className="icon-github"></div>
                   </div>
          
                   <a className="link flex" href="">
                     more
                     <span
                       style={{ alignSelf: "end" }}
                       className="icon-arrow-right"
                     ></span>
                   </a>
                 </div>
               </div>
             </motion.article>
          );
        })}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Main;
