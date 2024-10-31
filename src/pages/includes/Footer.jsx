import React from "react";
import { Link } from 'react-router-dom';
import '../../styles/footer.css';
const d = new Date();
let year = d.getFullYear();
 const Footer = () => {
    return (
      <footer>
      <div className="copyright">
          Copyright {year} <Link className="link" to="https://suresh-gundapu.netlify.app/">© Suresh Gundapu</Link>. All Rights Reserved
      </div>
  </footer>
      );
};
 
export default Footer;