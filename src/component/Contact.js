import React from 'react'
import { Fade } from 'react-reveal'

export default function Contact() {
  return (
    <Fade bottom delay={500}>
    <div id='for'>
      <h1 id='cont'>CONTACT</h1>
        <form action="https://formsubmit.co/727721euec101@skcet.ac.in" method="POST" >
        <h1>HIT ME UP!!</h1>
        <input type='name' id='name1' placeholder='Your name' name='Name'></input>
        <input type='email' id='email' placeholder='Email-id' name='Email' required></input>
        <input type='text' id='phone' placeholder='Phone no.' name='Phone' required></input>
        <textarea id='message' rows={4} placeholder='how can I help?' name='Query'></textarea>

        <button type='submit' id='su'>Send</button>
        </form>
    </div>
    </Fade>
  )
}
