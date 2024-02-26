// Footer.js
import React from 'react';
import style from  '../../components/common/css/footer.module.css'; 
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.column} style={{marginLeft:'12%'}}>
        <h3>CATEGORIES</h3>
        <ul>
          <li>Web Builder</li>
          <li>Hosting</li>
          <li>Data Center</li>
          <li>Robotic-Automation</li>

        </ul>
      </div>
      <div className={style.column}>
        <h3>CONTACT</h3>
        <ul>
          <li>Contact</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
          <li>Categories</li>
          <li>About</li>

        </ul>
      </div>
      <div className={style.column}>
      <ul style={{marginTop:'20%'}}className={style.flexContainer}>
        <li>United States</li>
        <li className={style.flexItem}><KeyboardArrowDownIcon/></li>
      </ul>
    </div>
    </footer>
  );
};

export default Footer;
