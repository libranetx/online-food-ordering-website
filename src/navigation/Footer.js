import './footer.css'

function Footer(){
    return(
        <div className='footer'>

    
      <div className="footer-section">
        <p>Email: info@scorpfastfood.com</p>
        <p>Phone: +2519 10 20 30 40</p>
        <p>Address: Adama, Ethiopia</p>
      </div>
  

      <div className="footer-bottom">
         <p>&copy; {new Date().getFullYear()} Scorp Fast Food. All rights reserved.</p>
       </div>
     </div> 
   
    );
}


export default Footer;