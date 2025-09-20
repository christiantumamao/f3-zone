import { useEffect, useState } from "react";
import "./Navbar.css";
import Navigation from "./Navigation";
import ActionButton from "./ActionButton";
import Modal from "./Modal";

function Navbar({
  logo = "/image/f3.jpeg",
  brandName = "F3 Sports Center",
  links = [
    { href: "#home", label: "Home" },
    { href: "#service", label: "Service" },
    { href: "#about", label: "About" },
    { href: "#pricing", label: "Pricing" },
    { href: "#Blog", label: "Blog" },
    { href: "#contact", label: "Contact" },
  ],
  ctaText = "Join Now",
  modalTitle = "Join F3 Sports Center",
  modalDescription = "Sign up today and start your fitness journey!",
}) {
  const [showModal, setShowModal] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  // Hide / Show navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <header className={`header ${showNavbar ? "visible" : "hidden"}`}>
        <div className="container nav">
        
          <div className="brand">
            <img src={logo} alt={`${brandName} Logo`} className="logo" />
            <span className="brand-name">{brandName}</span>
          </div>

          
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? "❌" : "☰"}
          </button>

          
          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
            <Navigation links={links} />
          </nav>

          
          <ActionButton text={ctaText} onClick={() => setShowModal(true)} />
        </div>
      </header>

      
      {showModal && (
        <Modal
          title={modalTitle}
          description={modalDescription}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
}

export default Navbar;
