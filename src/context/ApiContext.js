import { createContext, useEffect, useState } from "react";
import { MyAxios } from "./baseUrlAxios";

export const ApiContext = createContext("")

export const ApiProvider = ({children}) => {
    const [tLista, setTLista] = useState([]);
    const [cartObj, setCartObj] = useState({});
    const [cartList, setCartList] = useState([]);
    const [text ,setText] = useState("")

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
    function deleteItem(id){
      MyAxios
    .delete(`/products/${id}`) // Assuming your API supports DELETE requests
    .then((response) => {
      console.log(`Elem törlése ID: ${id}`);
      setTLista((prev) => prev.filter((item) => item.id !== id)); // Update state
    })
    .catch((error) => {
      console.error(`Error deleting item with ID: ${id}`, error);
    });
    }
    function deleteAll() {
          console.log("Deleted all items.");
          
          const tbody = document.querySelector('#tbody')
          tbody.innerHTML = ""
    }

    const kosarhozAd= (item) => {
      const listaRegi = [...cartList];
      listaRegi.push(item);
      setCartList(listaRegi);
  }

      const SearchTable = (event)=>{
        const value = event.target.value

        setText(value)
        tLista.forEach(e => {
          if (value.lowerCase() == e.title.lowerCase()) {
            
          }
          
        });
      }
  
    useEffect(() => {
      getAdat("/products", setTLista);
      getAdat("/carts/2", setCartObj);
  
      getAdat("/carts", setCartList);  
    }, []);
  
    return (
      <ApiContext.Provider value={{ tLista, cartObj, cartList, kosarhozAd, SearchTable, deleteItem, deleteAll, postAdat , getAdat}}>{children}</ApiContext.Provider>
    );  
}