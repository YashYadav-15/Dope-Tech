import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { TbBrandOpenai } from "react-icons/tb";

const Header = () => {
  return (
    <nav>
      <h1>
        <TbBrandOpenai /> Dope-Tech
      </h1>
      <main>
        <HashLink className="btn" to={"/#home"}>
          Home
        </HashLink>
        <HashLink className="btn" to={"/#about"}>
          About
        </HashLink>
        <HashLink className="btn" to={"/#brands"}>
          Brands
        </HashLink>
        <Link className="btn" to={"/contact"}>
          Contact
        </Link>
        <Link className="btn" to={"/services"}>
          Services
        </Link>
      </main>
    </nav>
  );
};

export default Header;
