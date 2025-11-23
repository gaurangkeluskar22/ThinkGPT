

import { createContext, useState } from "react";
import main from "../Config/thinkGPT";

export const Context = createContext();


const ContextProvider = (props) => {

    const [input, setInput] = useState("")
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompt, setPrevPrompt] = useState([])
    const [showResult, setShowResult] = useState(false)
    const [loading, setLoading] = useState(false)
    const [resultData, setResultData] = useState("")

    const delayPara = () => {
        
    }

    const newChat = () => {
        setLoading(false)
        setShowResult(false)

    }

    const onSent = async (prompt) => {
        setResultData("")
        setLoading(true)
        let response;
        if(prompt !== undefined){
            response = await main(prompt);
            setRecentPrompt(prompt)
        }
        else{
            setPrevPrompt((prev)=> [...prev, input])
            setRecentPrompt(input)
            response = await main(input)
        }
        setShowResult(true)
        setResultData(res)
        setLoading(false)
        setInput("")
    }

    const contextValue = {
        prevPrompt,
        setPrevPrompt,
        onSent,
        recentPrompt,
        setRecentPrompt,
        showResult,
        setShowResult,
        loading,
        setLoading,
        resultData,
        setResultData,
        input,
        setInput,
        newChat
    }

    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider