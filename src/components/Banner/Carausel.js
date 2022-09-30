import { makeStyles } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
import { Link } from 'react-router-dom';
import { TrendingCoins } from '../../config/api';
import { CryptoState } from '../../CryptoContext';
// import { numberWithCommas } from "../CoinsTable";

const useStyles = makeStyles(() => ({
  carausel: {
    height: "50%",
    display: "flex",
    alignItems: "center",
  },

  carauselItem:{
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    cursor:"pointer",
    textTransform:"uppercase",
    color:"white"
  }

}));


export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


const Carausel = () => {

  const [trending, setTrending] = useState([])


  const classes = useStyles();

  const { currency,symbol } = CryptoState();

  const fetchTrendingCoins = async () => {
    const { data } = await axios.get(TrendingCoins(currency));
    setTrending(data);
  }

  // console.log(trending);

  useEffect(() => {

    fetchTrendingCoins();

  }, [currency])

  const items1 = trending.map((coin) => {

    let profit = coin?.price_change_percentage_24h >= 0;


    return (
      <Link className={classes.carauselItem} to={`/coins/${coin.id}`} >
        <img src={coin?.image} alt={coin.name} height="80" style={{ marginBottom: 10 }} />
        <span style={{ color: "white" }}>
          {coin?.symbol}
          &nbsp;
          <span style={{ color: profit>0? "green" : "red", fontWeight:"500" }}>{profit && '+'} {coin?.price_change_percentage_24h?.toFixed(2)}%</span>
        </span>

        <span style={{ fontSize: 22, fontWeight: 500 }}>
          {symbol} {numberWithCommas(coin?.current_price.toFixed(2))}
        </span>
      </Link>
    )
  })

  const responsive1 = {

    0: {
      items: 2,
    },
    512: {
      items: 4,
    },
  };





  return (
    <div className={classes.carausel}>
      <AliceCarousel mouseTracking infinite autoPlayInterval={1000} animationDuration={1500}
        disableDotsControls responsive={responsive1} autoPlay items={items1} disableButtonsControls />


      Carausel

    </div>
  )
}

export default Carausel