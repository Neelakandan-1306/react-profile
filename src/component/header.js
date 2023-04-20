import React from 'react'
import img1 from '../Assets/icons8-nfc-n-50.png'
import MenuIcon from '@mui/icons-material/Menu';
export default function Header() {
  return (
    <div id='cont'>
      <nav>
      <img src={img1} id='logo'></img>
      <ul id='list'>
            <li>
              <a>Home</a>
              </li>
            <li><a href='#hmm'>Skills</a></li>
            <li><a href='#ji'>About</a></li>
            <li><a href='#for'>Contacts</a></li>
            <li><a href='#soc'>Socials</a></li>
        </ul>
      {/* <MenuIcon style={{color:'#ff4545'}} id='menu'/> */}
      </nav>
    </div>
  )
}
