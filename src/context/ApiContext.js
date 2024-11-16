import { createContext, useEffect, useState } from "react";
import { MyAxios } from "./baseUrlAxios";

export const ApiContext  = createContext("")

export const ApiProvider = ({children}) => {
    const [tLista, setTLista] = useState([]);
    const [cartObj, setCartObj] = useState({});
    const [cartList, setCartList] = useState([]);

    //asszinkron hívás axion-al
    function getAdat(vegpont, callBackFunc) {
      MyAxios
        .get(vegpont)
        .then(function (response) {
          // handle success
          console.log(response.data);
          callBackFunc(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
    }
    function postAdat(vegpont, adat) {
      MyAxios
        .get(vegpont, adat)
        .then(function (response) {
          // handle success
          console.log(response.data);
          setTLista(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });
    }
  
    useEffect(() => {
      getAdat("/products", setTLista);
      getAdat("/carts/2", setCartObj);
  
    }, []);

    const kosarhozAd= (item) => {
        const listaRegi = [...cartList];
        listaRegi.push(item);
        setCartList(listaRegi);
    }

  
    return (
      <ApiContext.Provider value={{ tLista, cartObj, kosarhozAd, postAdat , getAdat}}>{children}</ApiContext.Provider>
    );  
}