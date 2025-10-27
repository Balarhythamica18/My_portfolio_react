import React from 'react'

const Footer = () => {
  return (
    <footer style={{background:'#222', color:'#fff', padding:'20px 40px', textAlign:'center'}}>
      <div>© {new Date().getFullYear()} Balarhythamica.R — All rights reserved</div>
    </footer>
  )
}

export default Footer
