import React, { useContext } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PersonOutlineRoundedIcon from "@mui/icons-material/PersonOutlineRounded";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import MenuTwoToneIcon from "@mui/icons-material/MenuTwoTone";
import Image from "next/image";
import Link from "next/link";
import MyContext from "@Linkpp/Context/MyContext";
import Logo from "../../Local/Logo.png";

const Header = () => {
  const { screenSize } = useContext(MyContext);

  return (
    <header className="header">
      {/* Top bar */}
      <div className="top-bar">
        <span className="top-item-1">Lorem ipsum dolor</span>
        <span className="top-item">Lorem ipsum dolor</span>
        <span className="top-item-1">Lorem ipsum dolor</span>
      </div>

      {/* Main Header */}
      <div className="main-header">
        {/* Logo Section */}
        <div className="logo">
          {screenSize < 650 && <MenuTwoToneIcon sx={{ fontSize: 40 }} />}
          <Image src={Logo} alt="Logo" width={36} height={36} />
        </div>
        <div className="heading">LOGO</div>

        {/* Icons Section */}
        <div className="icons">
          <button className="icon-button">
            <SearchIcon sx={{ fontSize: 15 }} />
          </button>
          <button className="icon-button">
            <FavoriteBorderIcon sx={{ fontSize: 15 }} />
          </button>
          <button className="icon-button">
            <ShoppingBagOutlinedIcon sx={{ fontSize: 15 }} />
          </button>
          <button className="icon-button">
            <PersonOutlineRoundedIcon sx={{ fontSize: 15 }} />
          </button>
          <div className="language-selector">
            <span>ENG</span>
            <KeyboardArrowDownOutlinedIcon />
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
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
};

// Adding displayName to satisfy ESLint's react/display-name rule
Header.displayName = "Header";

export default Header;
