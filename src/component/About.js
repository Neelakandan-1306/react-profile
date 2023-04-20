import React from 'react'
import img1 from '../Assets/backi.jpg'
import { Fade } from 'react-reveal';
export default function About() {
  return (
    <Fade bottom>
    <div id='ji'>

      <br></br> 
          <h1 style={{color:'#ff4545'}} id='t'>About</h1>
    <div className="container">
      <div className="parent-div">
        <div className="left-div">
          <p style={{color:'#ff4545'}} id='about'>Hello and welcome to my website! My name is Neelakandan S, and I am thrilled to have you here. I was born and raised in Chennai. </p>
          <p style={{color:'#ff4545'}} id='about'>

After completing my schooling in Chennai, I decided to pursue my undergraduate studies at SKCET, Coimbatore. As a student here, I have had the opportunity to learn from some of the most knowledgeable and experienced professors in the field. Their guidance has helped me gain a deep understanding of my subject, and I am eager to apply this knowledge in the real world.
</p>
<p style={{color:'#ff4545'}} id='about'>
Apart from my academic pursuits, I am passionate about books and movies. I believe that pursuing our interests is essential to living a fulfilling life, and I make sure to make time for them whenever possible.
</p>
<p style={{color:'#ff4545'}} id='about' >

Through this website, I aim to be a better person. I hope that you find the information here valuable and that it helps you in some way. Thank you for taking the time to visit, and I look forward to connecting with you!
</p>

        </div>
        <div className="right-div">
          {/* <h2 id='g1'>SKCET</h2> */}
          <img src={img1} id='skcet' alt="SKCET Logo" style={{opacity:'1'}}></img>
        </div>
      </div>
    </div>
    </div>
    </Fade>
  )
}
