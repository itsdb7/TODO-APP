import React from 'react'
import './footer.style.css'

export const Footer = () => {
    return (
        <div className='footer'>
           {/* <a href='#' className='react'>
             Developed In  <ion-icon name="logo-react"></ion-icon>
           </a>  */}

           <a href = 'https://github.com/itsdb7' rel="noopener noreferrer" target='_blank'  className='github'><ion-icon name="logo-github"></ion-icon></a> 

        </div>
    )
}

