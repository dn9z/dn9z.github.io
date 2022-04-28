import { createContext } from "react";
import { useLocation } from "react-router-dom";

const MyContext = createContext(null)

const MyProvider = ({children}) => {

  const location = useLocation()
  return(
    <MyContext.Provider value={{location}}>
      {children}
    </MyContext.Provider>
  )

}




export {MyProvider, MyContext}