import React from 'react'

const Footer = () => {
   const year=new Date().getFullYear()
  return (
    <div className='footer'>
        Designed and developed by Barkha Yadav
        <br/>
        <span>Copyright &#xA9; {year} Barkha Yadav</span>
        <div className='links'>
            <a href="https://github.com/barkhayadav12"><i class="bi bi-github"></i></a>
            <a href="https://www.linkedin.com/in/barkha-yadav-727472212/?originalSubdomain=in"><i class="bi bi-linkedin"></i></a>
            <a href="https://twitter.com/barkhayadav125"><i class="bi bi-twitter-x"></i></a>
            <a href="#"><i class="bi bi-instagram"></i></a>


        </div>
    </div>
  )
}

export default Footer