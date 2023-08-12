import React from "react";
import { TbBrandOpenai } from "react-icons/tb";

const Footer = () => {
  return (
    <footer>
      <div>
        <h1>
          <TbBrandOpenai /> Dope-Tech
        </h1>
        <p>&copy; all right reserved</p>
      </div>

      <div>
        <h5>Contact Us</h5>
        <div>
          <a
            href="https://www.linkedin.com/in/yash-yadav-74293a211/"
            target={"blank"}
          >
            LinkedIn
          </a>
          <a href="https://github.com/YashYadav-15" target={"blank"}>
            Github
          </a>
          <a href="https://youtu.be/hWvM6de6mG8" target={"blank"}>
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
