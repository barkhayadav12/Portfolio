import React from "react";
import bootstrap from "../icons/bootstrap.png";
import css from "../icons/css.png";
import html from "../icons/html.png";
import react from "../icons/react.png";
import js from "../icons/js.png";
import ex from "../icons/ex.png";
import node from "../icons/node.png";
import db from "../icons/db.png";
import sql from "../icons/sql.png";
const About = () => {
  return (
    <div className="about">
        <div className="aboutContainer">
        <h1 className="change">A little about me ,</h1>
        <p className="hello">Hello!</p>
        <p className="a_para">My name is Barkha Yadav, a 3rd year undergraduate at NIT Manipur.Whenever possible, I love learning new technologies and developing new projects.I develop web applications mostly using the MERN stack, but I'm also exploring other technologies and frameworks that are interesting to me! Additionally, I am studying Mobile App Development.I am passionate about technology, and I love to contribute to the world of technology.</p>
        </div>
        <div className="skills">
            <h1 className="change">Skills</h1>
            <button className="btn btn-dark"><img style={{height:'20px',paddingRight:'10px'}}  src={html}/>HTML</button>
            <button className="btn btn-dark"><img style={{height:'20px',paddingRight:'10px'}}  src={css}/>CSS</button>
            <button className="btn btn-dark"><img style={{height:'20px',paddingRight:'10px'}}  src={js}/>JavaScript</button>
            <button className="btn btn-dark"><img style={{height:'20px',paddingRight:'10px'}}  src={react}/>Reactjs</button>
            <br/>
            <button className="btn btn-dark"><img style={{height:'20px',paddingRight:'10px'}}  src={node}/>Node</button>
            <button className="btn btn-dark"><img style={{height:'20px',paddingRight:'10px'}}  src={ex}/>Express</button>
            <button className="btn btn-dark"><img style={{height:'20px',paddingRight:'10px'}}  src={db}/>Mongodb</button>
            <button className="btn btn-dark"><img style={{height:'20px',paddingRight:'10px'}}  src={sql}/>SQL</button>
            <button className="btn btn-dark"><img style={{height:'20px',paddingRight:'10px'}}  src={bootstrap}/>Bootstrap</button>
        </div>
    </div>
)}

export default About