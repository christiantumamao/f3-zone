import { useEffect, useState } from "react";
import "./ActionButton.css";

function ActionButton({text,onClick}){
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState (0);

  useEffect(() =>{
    const handleScroll = () => {
      if(window.scrollY > lastScrollY) {
        setShow(false);
      }else{
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    
  }, [lastScrollY]);
  return(
    <div className="nav-action">
      <button className={`btn-join ${show ? "show" : "hide"}`}
       onClick={onClick}
       >
        {text}
      </button>
    </div>
  );
}
export default ActionButton;