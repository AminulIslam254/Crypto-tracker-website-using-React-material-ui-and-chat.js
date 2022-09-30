import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { createContext } from 'react'

const crypto=createContext();


const CryptoContext = ({children}) => {

    const [currency, setcurrency] = useState("INR");
    const [symbol, setsymbol] = useState("₹");

    useEffect(() => {
      
        if(currency==="INR") setsymbol("₹");
        else if(currency==="USD") setsymbol("$");

    }, [currency]);
    
    
  return (
    <crypto.Provider value={{currency,setcurrency,symbol}}>{children}</crypto.Provider>
  )
};

export default CryptoContext;

export const CryptoState=()=>{
        return useContext(crypto);
}