

import { createContext, useState } from "react";
import main from "../Config/thinkGPT";

export const Context = createContext();


const ContextProvider = (props) => {

    const [input, setInput] = useState("")

    const onSent = async (prompt) => {
        await main(prompt)
    }

    onSent("What is react.js")
    
    const contextValue = {

    }

    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider