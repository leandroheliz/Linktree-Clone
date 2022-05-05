import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { SiWhatsapp, SiMinutemailer } from "react-icons/si";
import { FiCodesandbox } from "react-icons/fi";

const Links = () => {
  return (
    <div id="links">
      <a href="https://leandroheliz.com"
        target="_blank" className="link">
        <div className="flex justify-center">
          <FiCodesandbox className="mx-2 mt-1" />
          Portfolio
        </div>
      </a>

      <a
        className="link"
        href="https://www.linkedin.com/in/leandroheliz/"
        target="_blank"
      >
        <div className="flex justify-center">
          <BsLinkedin className="mx-2 mt-1" />
          LinkedIn
        </div>
      </a>

      <a
        className="link"
        href="mailto:contacto@leandroheliz.com?subject=Contacto"
        target="_blank"
      >
        <div className="flex justify-center">
          <SiMinutemailer className="mx-2 mt-1" />
          Email
        </div>
      </a>

      <a
        className="link"
        href="https://api.whatsapp.com/send?phone=5492284733603&text=Hola Leandro, te contacto desde tu Pagina Web."
        target="_blank"
      >
        <div className="flex justify-center">
          <SiWhatsapp className="mx-2 mt-1" />
          Whatsapp
        </div>
      </a>

      <a
        className="link"
        href="https://www.instagram.com/leandroheliz/"
        target="_blank"
      >
        <div className="flex justify-center">
          <BsInstagram className="mx-2 mt-1" />
          Instagram
        </div>
      </a>

      <a
        className="link"
        href="https://www.facebook.com/leadro.heliz/"
        target="_blank"
      >
        <div className="flex justify-center">
          <FaFacebookSquare className="mx-2 mt-1" />
          Facebook
        </div>
      </a>
    </div>
  );
};

export default Links;
