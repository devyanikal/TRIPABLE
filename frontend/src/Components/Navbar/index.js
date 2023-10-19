import React from 'react'; 
import { 
Nav, 
NavLink, 
Bars, 
NavMenu, 
NavBtn, 
NavBtnLink, 
} from './Navbar_elements'; 

const Navbar = () => { 
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
		<NavBtnLink to='/signin'>Sign In</NavBtnLink> 
		</NavBtn> 
	</Nav> 
	</> 
); 
}; 

export default Navbar;
