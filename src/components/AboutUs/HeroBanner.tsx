import { Component } from 'solid-js';
import Aboutus from "../../assets/template-assets/aboutus.jpg";
import Styles from "../../styles/AboutUs/HeroBanner.module.scss";

const HeroBanner: Component = () => {
    return (
        <div class={Styles.container}>
            <div class={Styles.left}>
                <h1>About us</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div class={Styles.right}>
                <img src={Aboutus}/>
            </div>
        </div>
    )
}

export default HeroBanner;