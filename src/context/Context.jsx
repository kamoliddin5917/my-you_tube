import { createContext } from "react";
import { useEffect, useState } from "react";

const arrContext = createContext();

const Provider = ({ children }) => {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((res) => res.json())
      .then((data) => {
        setArr(data);
      });
  }, []);

  return (
    <arrContext.Provider value={{ arr, setArr }}>
      {children}
    </arrContext.Provider>
  );
};

export { Provider, arrContext };
