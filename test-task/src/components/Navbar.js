import {Link} from "react-router-dom";
import React, { useEffect, useState } from 'react';


const Navbar = () => {
    const [menuOpened, setMenuOpened] = useState(false);

    return (
       <div className="navbar-block">
           <div className="navbar-top">
               <Link to="/"><img src="/img/L.png" alt="" className="logo"/></Link>
               <div className={`header__menu ${menuOpened ? "open" : ""}`} onClick={() => setMenuOpened(!menuOpened)} >
                   <span></span>
                   <span></span>
                   <span></span>
               </div>
           </div>
           <div className={`nav-mobile ${menuOpened ? "open" : ""}`}>
        <Link className="nav__link">Nya bilar</Link>
               <Link className="nav__link">Begagnade bilar</Link>
               <Link className="nav__link">Företagsförsäljning</Link>
               <Link className="nav__link">Erbjudanden</Link>
               <Link className="nav__link">Service &amp; Verkstad</Link>
               <Link className="nav__link">Reservdelar &amp; Tillbehör</Link>
               <Link className="nav__link">Finans &amp; Försäkring</Link>
               <Link className="nav__link">Kontakta oss</Link>
      </div>

           <div className="navbar-bottom">
               <Link className="nav__item">Nya bilar</Link>
               <Link className="nav__item">Begagnade bilar</Link>
               <Link className="nav__item">Företagsförsäljning</Link>
               <Link className="nav__item">Erbjudanden</Link>
               <Link className="nav__item">Service &amp; Verkstad</Link>
               <Link className="nav__item">Reservdelar &amp; Tillbehör</Link>
               <Link className="nav__item">Finans &amp; Försäkring</Link>
               <Link className="nav__item">Kontakta oss</Link>
           </div>
       </div>
    )
}

export default Navbar;