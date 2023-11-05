import React, { useState } from 'react'; 
import SignIn from '../pages/SignIn';
import { 
Nav, 
NavLink, 
Bars, 
NavMenu, 
NavBtn, 
NavBtnLink, 
} from './Navbar_elements'; 

const Navbar = (props) => { 
	console.log(props.username)
	console.log(props.flag)
	// const [val,setValue]=useState('Sign In')
	// function handleChange(){
	// 	// const button_value=document.getElementById('un').value;
	// 	console.log(props.username)
	// 	console.log(props.flag)
	// 	if (props.flag!==''){
	// 		// document.getElementById('un').name=props.username
	// 		setValue(props.username)
	// 		console.log(val)
	// 	}
	// }

return ( 
	<> 
	<Nav> 
	    
		<Bars/> 

		<NavMenu>
			 
		<img src="./travel.png" alt="bug" height="55px"/>

        <NavLink to='/' activeStyle> 
			Home 
		</NavLink>
		<NavLink to='/about' activeStyle> 
			About 
		</NavLink> 
		<NavLink to='/places' activeStyle> 
			Places 
		</NavLink>  
		<NavLink to='/hotels' activeStyle> 
			Hotels 
		</NavLink> 
 
		<NavLink to='/signup' activeStyle> 
			Sign Up 
		</NavLink> 
		{/* Second Nav */} 
		{/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */} 
		</NavMenu>

		<NavBtn> 
			<NavBtnLink to='/signin' id='un' name='login'>SignIn</NavBtnLink> 
		</NavBtn> 
	</Nav> 
	</> 
); 
}; 

export default Navbar;
