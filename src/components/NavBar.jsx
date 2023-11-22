import "./NavBar.css";
const NavBar = () => {
  return (
    <>
    
      <header>
       
        <nav className="nav">
        <a href="" className="logo">
               <h3>Proto</h3>
          </a>
          <ul className="nav__list  nav__list--primary">
            <li className="nav__item">
              <a href="#" className="nav__link">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                Places
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                Careers
              </a>
            </li>
            <li className="nav__item">
              <a href="#" className="nav__link">
                Blog
              </a>
            </li>
          </ul>
          <ul className="nav__list">
               <li className="nav__item">
                    <a href="#" className="nav__link nav__link--button">
                         LOGIN
                    </a>
               </li>
          </ul>
        </nav>
      </header>
    
    </>
  );
};

export default NavBar;
