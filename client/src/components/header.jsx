import React, {useState} from 'react'
import Login from '../components/login';
import './header.css'
const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

  // Function to toggle the login box visibility
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='header'>
        <div class="dotstock">
                <h1>DotStock</h1>
                </div>
        <button onClick={togglePopup} className='header-button' id="header-button">Login / Register</button>
        {isOpen && (
            <Login />
        )}
       
        </div>  
  )
}
export default Header