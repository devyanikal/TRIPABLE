import React from 'react';
import './Contactus.css'

function Contactus(){
    return(
        
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            {/* <link rel="stylesheet" href="formcarry-form.css" /> */}
            <footer style={{paddingTop:"100px"}}>
                <div>
                <div style={{width:"100%", height:"440px",backgroundColor:"#9FE2BF",color:"252424"}}>

                    <div style={{width: "50%" , height:"100px" , float: 'left', paddingTop:"70px", paddingLeft:"150px"}}>
                        <p>
                            <h4>CONTACT US</h4>
                            <h6><u>travel@tripable.com</u></h6>
                            <h6>Call/Whatsapp: +91 9910042287</h6>
                            <a href="https://www.facebook.com/PlanetAbled/" target="_blank" class="fa fa-facebook"></a>
                            <a href="https://twitter.com/planetabled" target="_blank" class="fa fa-twitter"></a>
                            <a href="https://www.youtube.com/channel/UCRjxH373IAvgRkjgG23iSXw" target="_blank" class="fa fa-youtube"></a>
                            <a href="https://www.instagram.com/planetabled/" target="_blank" class="fa fa-instagram"></a>
                        </p>
                    </div>
                    <div style={{marginLeft:"50%", paddingTop:"2px"}}>
                            <div class="formcarry-container">
                                <h4>MAIL US!</h4>
                            <form action="https://formcarry.com/s/PVGDd5qrD3" method="POST" class="formcarry-form">
                                <label for="name">Your Name</label>
                                <input type="text" id="name" name="fullName" required />

                                <label for="email">Your Email Address</label>
                                <input type="email" id="email" name="email" required />

                                <label for="message">Your Message</label>
                                <textarea name="message" id="message" cols="30" rows="5"></textarea>

                                <button type="submit">Send</button>
                            </form>
                            </div>
                    </div>
                </div>
                </div>
        </footer>
            
            
    </div>

    )
}
export default Contactus;
