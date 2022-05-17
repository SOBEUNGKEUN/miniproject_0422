import React from 'react'
import classes from './planet.module.css'

const Planet = (props) => {
  return (
    <>
    <br></br>
    <li className={classes.planet}>
      <div className={classes.planet__info}>
        <h3>{props.name} - <span className={classes.koName}>{props.koName}</span></h3>
        <br></br>
        <div className={classes.description}>{props.description}</div>
        <br></br>
        <div className={classes.revcycle}>{props.revcycle}</div>
        <div className={classes.rotationcycle}>{props.rotationcycle}</div>
        <div className={classes.avgtemperature}>{props.avgtemperature}</div>
        <div className={classes.maxtemperature}>{props.maxtemperature}</div>
        <div className={classes.mintemperature}>{props.mintemperature}</div>
        <div className={classes.satellite}>{props.satellite}</div>
        <br></br>
      </div>
    </li>
    </>
  );
}

export default Planet