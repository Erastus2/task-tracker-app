import React from 'react'

const About = () => {
 const  currentDateTime =Date().toLocaleString();
  return (
    <footer>
      <p style={{color:"green"}}> Rights reserved 2023 @Erastus</p>
        <p>{ currentDateTime}</p>

    </footer>
  )
}

export default About;