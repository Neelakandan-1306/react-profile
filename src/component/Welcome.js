import React from 'react'
import img1 from '../Assets/me1.png'
import Rellax from 'rellax'
import Parallax from 'react-rellax'
import { Fade } from 'react-reveal';

let rellax = new Rellax('.rellax');
export default function Welcome() {
  return (
    <div id='welcome'>
        <div class="one rellax" data-rellax-speed="40" >
        <Parallax speed={30}>

        <img src={img1}id='img' ></img>
        </Parallax>
        </div>
        <h3 id='sometext' style={{color:'#999999'}}>STUDENT AT SKCET</h3>
        <div >
        <h1 id='name' style={{color:'#ff4545'}}>Neelakandan S</h1>
        </div>
        </div>
  )
}
