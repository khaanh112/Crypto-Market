import React from 'react'
import './navBar.css'
import logo from '../../assets/logo.png'
import arrow_icon from '../../assets/arrow_icon.png'
import { CoinContext } from '../../context/CoinContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {

  const {setCurrency} = useContext(CoinContext);

  const handleCurrencyChange = (e) => {
    switch(e.target.value) {
      case "usd":
        setCurrency({
          name: "usd",
          symbol: "$"
        });
        break;
      case "eur":
        setCurrency({
          name: "eur",
          symbol: "€"
        });
        break;
      case "vnd":
        setCurrency({
          name: "vnd",
          symbol: "₫"
        });
        break;
      default:
        setCurrency({
          name: "usd",
          symbol: "$"
        });
        break;
    }
  };


  return (
    <div className='navbar'> 
      <Link to='/'>
        <img src={logo} alt='Crypto Market Logo' className='logo' />
      </Link>
      
      <ul>
        <Link to='/'><li>Home</li></Link>
        <Link to='/features'><li>Features</li></Link>
        <Link to='/pricing'><li>Pricing</li></Link>
        <Link to='/contact'><li>Contact</li></Link>
      </ul>

      <div className='navbar-right'>
        <select onChange={handleCurrencyChange} className='currency-select'>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="vnd">VND</option>
        </select>

        <button className='signup-btn'>Sign Up<img src={arrow_icon} alt='Arrow Icon' /></button>
      </div>
    </div>
  )
}

export default NavBar