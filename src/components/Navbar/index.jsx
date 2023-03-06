import React from "react";
import CartWidget from "../CartWidget";
import styles from "./navbar.module.css";
import logoImg from "../../assets/images/logo.jpg";

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgLogo}>
                <img src={logoImg} alt="" />
            </div>
            <nav className={styles.navContainer}>
                <a href="">HOME</a>
                <a href="">ABOUT</a>
                <a href="">INGRESAR</a>
                <a href=""><CartWidget /></a>
            </nav>
        </div>
    );
};

export default Navbar;
