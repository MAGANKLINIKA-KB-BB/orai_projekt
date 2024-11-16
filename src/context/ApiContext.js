import { Children, createContext } from "react";

export const ApiContext  = createContext("")

export const ApiProvider = ({Children}) => {
    const [tLista, setTLista] = useState([]);

    //asszinkron hívás axion-al
    function getAdat(vegpont) {
      MyAxios
        .get(vegpont)
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
      getAdat("/products");
  
    }, []);
  
    return (
      <ApiContext.Provider value={{ tLista, postAdat }}>{children}</ApiContext.Provider>
    );
}