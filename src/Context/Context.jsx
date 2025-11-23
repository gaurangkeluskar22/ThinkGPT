

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

    const onSent = async () => {
        setResultData("")
        setLoading(true)
        setRecentPrompt(input)
        const res = await main(input)
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
        setInput
    }

    return(
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider