import React from 'react'
import github from '../Assets/github.png'
import Insta from '../Assets/instagram.png'
import twi from '../Assets/twitter.png'
import link from '../Assets/linkedin.png'
import CopyrightIcon from '@mui/icons-material/Copyright';
export default function Social() {
  return (
    <div id='soc'>
      <h1 id='cont'>SOCIALS</h1>
      <div>
        <a href='https://github.com/Neelakandan-1306?tab=repositories' target='_blank'>
        <img id='social' src={github}></img></a>
        <a href='https://www.instagram.com/nakulneelakandan/' target='_blank'>
        <img id='social' src={Insta}></img>
        </a>
        <a href='https://twitter.com/Neelakandan13_' target='_blank '>

        <img id='social' src={twi}></img>
        </a>

        <a href='https://www.linkedin.com/in/neelakandan-s-6015aa225/' target='_blank'>
        <img id='social' src={link}></img>
        </a>
        <br></br>
        <br></br>
        <br></br>
<CopyrightIcon/><p style={{paddingTop:'0px'}}>2023 by neelakandan</p>
      </div>
        
    </div>
  )
}
