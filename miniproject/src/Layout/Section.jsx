import React from "react";
import classes from './Section.module.css'

const Section = () => {
  return (
    <ul className={classes.planet_container}>
      <li className={classes.planet_li}><img className={classes.planet_img} src={require("./img/mercury.png")} alt="수성" /></li>
      <li className={classes.planet_li}><img className={classes.planet_img} src={require("./img/venus.png")} alt="금성" /></li>
      <li className={classes.planet_li}><img className={classes.planet_img} src={require("./img/earth.png")} alt="지구" /></li>
      <li className={classes.planet_li}><img className={classes.planet_img} src={require("./img/mars.png")} alt="화성" /></li>
      <li className={classes.planet_li}><img className={classes.planet_img} src={require("./img/jupiter.png")} alt="목성" /></li>
      <li className={classes.planet_li}><img className={classes.planet_img_saturn} src={require("./img/saturn.png")} alt="토성" /></li>
      <li className={classes.planet_li}><img className={classes.planet_img_uranus} src={require("./img/uranus.png")} alt="천왕성" /></li>
      <li className={classes.planet_li}><img className={classes.planet_img} src={require("./img/neptune.png")} alt="해왕성" /></li>
    </ul>
  );
};

export default Section;
