import React, { useContext } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import Logo from "../../Local/Logo.png";
import Image from "next/image";
import MyContext from "@Linkpp/Context/MyContext";
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import Link from 'next/link';

function Header() {

  const {screenSize} = useContext(MyContext);


  return (
    <header className="header">
      <div className="top-bar">
       { <span className="top-item-1">Lorem ipsum dolor</span>}
        <span className="top-item">Lorem ipsum dolor</span>
        <span className="top-item-1">Lorem ipsum dolor</span>
      </div>

      <div className="main-header">
        <div className="logo">
          {screenSize < 650 ? <MenuTwoToneIcon   sx={{ fontSize: 40 }}/> : null}
          <Image src={Logo} alt="Landscape picture" width={36} height={36} />
        </div>
        <div className="heading">LOGO</div>

        <div className="icons">
          <button className="icon-button">
            <i className="icon-search">
              <SearchIcon sx={{ fontSize: 15 }} />
            </i>
          </button>
          <button className="icon-button">
            <i className="icon-heart">
              <FavoriteBorderIcon sx={{ fontSize: 15 }} />
            </i>
          </button>
          <button className="icon-button">
            <i className="icon-bag">
              <ShoppingBagOutlinedIcon sx={{ fontSize: 15 }} />
            </i>
          </button>
          <button className="icon-button">
            <i className="icon-user">
              <PersonOutlineRoundedIcon sx={{ fontSize: 15 }} />
            </i>
          </button>
          <div className="language-selector">
            <span>ENG</span>
            <span>
              <KeyboardArrowDownOutlinedIcon />
            </span>
          </div>
        </div>
      </div>
      {screenSize > 768 ? (
        <nav className="nav-menu">
          <Link href="/shop">Shop</Link>
          <Link href="/skills">Skills</Link>
          <Link href="/stories">Stories</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact Us</Link>
        </nav>
      ) : (
        <nav className="mobile-nav-menu">
          <Link href="/">Home</Link>
          <Link href="/shop">Shop</Link>
        </nav>
      )}

    </header>
  );
}

export default Header;
