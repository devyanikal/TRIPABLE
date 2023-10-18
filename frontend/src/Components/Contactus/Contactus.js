import { display, height } from '@mui/system';
import React from 'react';

function Contactus(){
    return(
        <div>
            <footer style={{paddingTop:"100px"}}>
                <div>
                <div style={{width:"100%", height:"200px",backgroundColor:"#9FE2BF"}}>

                {/* <div> style="width: 50%; display: table-cell; background: green;" */}
                    <div style={{width: "50%" , height:"100px" , float: 'left', paddingTop:"25px", paddingLeft:"100px"}}>
                        <p>
                            <h3>CONTACT US</h3>
                            <h4><u>travel@tripable.com</u></h4>
                            <h4>Call/Whatsapp: +91 9910042287</h4>
                        </p>
                    </div>
                    <div style={{marginLeft:"50%", height:"100px", width:"50%", paddingTop:"25px"}}>
                        <p>
                            <h3>CONTACT US</h3>
                            <h4><u>travel@tripable.com</u></h4>
                            <h4>Call/Whatsapp: +91 9910042287</h4>
                        </p>
                    </div>
                </div>
                </div>
        </footer>
            
            
    </div>

    )
}
export default Contactus;