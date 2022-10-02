import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.png";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
const options = {
  burgerColor: "#8ae012",
  burgerColorHover: "#eb4034",
  logo,
  logoWidth: "20vmax",
  logoHoverSize: "10px",
  logoHoverColor: "#eb4034",
  navColor1: "white",

  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.2vmax",
  link1Color: "rgba(35,35,35,0.8)",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#eb4034",
  link2ColorHover: "#eb4034",
  link3ColorHover: "#eb4034",
  link4ColorHover: "#eb4034",
  link2Margin: "1vmax",
  link3Margin: "0",
  link4Margin: "1vmax",
  profileIconUrl: "/login",
  profileIconColor: "rgba(35, 35, 35,0.8)",
  searchIconColor: "rgba(35, 35, 35,0.8)",
  cartIconColor: "rgba(35, 35, 35,0.8)",
  profileIconColorHover: "#eb4034",
  searchIconColorHover: "#eb4034",
  cartIconColorHover: "#eb4034",
  cartIconMargin: "1vmax",
  searchIcon: "true",
  SearchIconElement: FaSearch,
  searchIconUrl:"/search",
  cartIcon: "true",
  CartIconElement: FaShoppingCart,
  cartIconUrl:"/cart",
  profileIcon: "true",
  ProfileIconElement: CgProfile,
};

const Header = () => {
  return <ReactNavbar {...options} />;
};

export default Header;
