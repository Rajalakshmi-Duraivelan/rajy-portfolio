// import { LinkedIn } from '@mui/icons-material'
// import { IconButton } from '@mui/material'
import React from 'react'
import { Element } from 'react-scroll'
import './ContactContainer.css'

const ContactContainer = () => {
  return (
    <Element className='contact' id="contact">
        <h2>Contact</h2>
        <div className='contactContainer'>
            <p>
                Email : <span>rajydurai.02@gmail.com</span>
            </p>
            <p>
                Github UserName: <span>Rajalakshmi-Duraivelan</span>
            </p>
            {/* <div className='contactContainer_icons'>
            <Link to={{ pathname: "https://example.zendesk.com/hc/en-us/articles/123456789-Privacy-Policies" }} target="_blank" />
                <a href='www.linkedin.com/in/rajalakshmiduraivelan'>
                    <IconButton>
                        <LinkedIn />
                    </IconButton>
                </a>  
            </div> */}
        </div>
    </Element>
  )
}

export default ContactContainer
