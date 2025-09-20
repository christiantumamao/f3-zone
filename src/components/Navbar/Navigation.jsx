import "./Navigation.css";
function Navigation({ links, menuOpen }) {
  return (
    <nav className={menuOpen ? "open" : ""}>
      <ul>
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Navigation;

