    import React from 'react'
    import './Footer.css'
    import logo from '../../assets/img/gw.dev.png'
    const Footer = () => {
      return (
        <div className='footer'>
            <div className='maxWidth footerAlign'>
            <img src={logo} alt="" />
            </div>
        </div>
      )
    }
    
    export default Footer