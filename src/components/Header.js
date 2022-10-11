import React from 'react';
import {NavLink, Link} from 'react-router-dom'
 function Header({isDarkMode,onToggleDarkMode}) {
  
const handleToggleDarkModeClick=(e)=>{
  onToggleDarkMode();

  
}
return (
  <header>
  <h1 className='branding'>
     <Link to ="/">
       Home
       </Link>
      </h1>
      <nav>
    <div className='navigation'>

      <NavLink className='button' to ="/books">
        Books
      </NavLink>
      <NavLink  className='button' to ="/books/new">
        Add Books
      </NavLink>
      
      <button style={{color: "white"}} onClick={handleToggleDarkModeClick}>{isDarkMode? "Darker Mode":"Lighter Mode"}</button>
        </div>
        </nav>
    </header>
   
  )
}

export default Header