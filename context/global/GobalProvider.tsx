import { useState } from "react"
import { GlobalProps, GlobalContext, initializeValue, dataType } from "./GlobalContext"


export const GlobalProvider = ( {children} : GlobalProps ) =>{

    const [data,setData] = useState(initializeValue.data);
   
    return(
            <GlobalContext.Provider  value={{data,setData}}>
                {children}
            </GlobalContext.Provider>
        )
   }