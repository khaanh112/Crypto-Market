import React from 'react'
import './Home.css'
import { CoinContext } from '../../context/CoinContext'
import { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'


const Home = () => {

  const {allCoin, currency} = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const inputHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  const searchHandler = async(e) => {
    e.preventDefault();
    const filteredCoin = await allCoin.filter(coin =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setDisplayCoin(filteredCoin);
  };



  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);



  return (
    <div className='home'>
      <div className='hero'>
        <h1>Largest <br /> Crypto Marketplace</h1>
        <p>Buy and sell cryptocurrencies, trusted by me</p>
        <form onSubmit={searchHandler}>
          <input onChange={inputHandler} list='coin-list' value={searchTerm} type="text" placeholder='Search for cryptocurrencies' required/>

          <datalist id='coin-list'>
            {
              allCoin.map((coin, index) => (
                <option key={index} value={coin.name} />
              ))
            }
          </datalist>
          <button type='submit'>Search</button>
        </form>
      </div>
      <div className="crypto-table">
        <div className='table-layout'>
          <p>#</p>
          <p>Coin</p>
          <p>Price</p>
          <p style={{textAlign: 'center'}}>24h%</p>
          <p className='market-cap'>Market Cap</p>
        </div>
        
        { 
          displayCoin.slice(0, 20).map((item, index) => (
            <Link to={`/coin/${item.id}`} className='table-layout' key={index}>
              <p>{item.market_cap_rank}</p>
              <div>
                <img src={item.image} alt={item.name}  />
                <p>{item.name} <span>({item.symbol})</span></p>
              </div>
              <p>{currency.symbol}{item.current_price.toLocaleString()}</p> 
              <p style={{textAlign: 'center', color: item.price_change_percentage_24h < 0 ? 'red' : 'green'}}>{item.price_change_percentage_24h.toFixed(2)}%</p>
              <p className='market-cap'>{currency.symbol}{item.market_cap.toLocaleString()}</p>
            </Link>

          ))
        }

      </div>
    </div>
  )
}

export default Home