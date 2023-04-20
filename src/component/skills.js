import React from 'react';
import Rellax from 'rellax'
import Parallax from 'react-rellax'
import '../component/style.css'
import img1 from '../Assets/c++.png'
import img2 from '../Assets/python (1).png'
import img3 from '../Assets/c.png'
import img4 from '../Assets/html (1).png'
import img5 from '../Assets/css-3 (1).png'
import img6 from '../Assets/js (1).png'
import img7 from '../Assets/react.png'
import img8 from '../Assets/soft.png'
import img9 from '../Assets/java-logo.png'
import { Fade } from 'react-reveal';

const Skills = () => {
  return (
    <div id='hmm'>
    <Fade bottom >
      
    <div className="main-div" style={{justifyContent:'center'}}>
        <h1 style={{color:'#ff4545'}} id='skills'>SKILLS</h1>
      <div className="row">
        <div className="small-div" >
            <h3 style={{color:'#999999'}}>Experienced in c++</h3>
            <img src={img1} id='c1'></img>
            <p style={{color: '#ff4545'}} id='p'>As an intermediate skilled C++ programmer, I have a strong understanding of object-oriented programming concepts and experience working with various data structures and algorithms. I am proficient in writing clean, efficient, and maintainable code that adheres to established programming conventions and best practices.</p>
        </div>
        <div className="small-div">
            <h3 style={{color:'#999999'}}>Intermediate in</h3>
            <img src={img2} id='py'></img>
            <img src={img3} id='c'></img>
            <img src={img9} id='py'></img>
            
            <p style={{color:'#ff4545'}} id='p'>I have a beginner to intermediate level of proficiency in Python and C. I am familiar with the basic programming concepts and syntax of each language, and I am able to write simple programs and perform basic tasks such as input/output operations, loops, and conditional statements.</p>
        </div>
      </div>
      
      <div className="row">
        <div className="small-div">
        <h3 style={{color:'#999999'}}>Frontend development</h3>
            <img src={img4} id='py'></img>
            <img src={img5} id='c'></img>
            <img src={img6} id='py'></img>
            <img src={img7} id='py'></img>
            <p style={{color:'#ff4545'}} id='p'>As an intermediate frontend developer, I possess a sound understanding of core web technologies such as HTML, CSS, JavaScript, and React. With this expertise, I am capable of developing engaging and interactive web applications with responsive design and user-friendly interfaces.</p>
        </div>
        <div className="small-div">
          <h3 style={{color:'#999999'}}>SoftSkill</h3>
          
            <img src={img8} id='py'></img>
          <p style={{color:'#ff4545'}} id='p'>As far as my communication skills are concerned, I consider myself an effective communicator. I am able to clearly articulate my ideas and opinions, and I am comfortable expressing myself in both verbal and written formats. I believe that my communication skills are an asset in my professional and personal interactions.</p>
        </div>
      </div>
    </div>
    </Fade>
    <br></br><br></br><br></br>
    <br></br><br></br><br></br>
    </div>
  );
};

export default Skills;
