

import { createContext, useState, useMemo } from "react";
import main from "../Config/thinkGPT";

export const Context = createContext();


const ContextProvider = (props) => {

    const [input, setInput] = useState("")
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompt, setPrevPrompt] = useState([])
    const [showResult, setShowResult] = useState(false)
    const [loading, setLoading] = useState(false)
    const [resultData, setResultData] = useState("")

    const delayPara = (index, nextWord) => {
        setTimeout(function () {
            setResultData((prev) => prev + nextWord)
        }, 75 * index)
    }

    const newChat = () => {
        setLoading(false)
        setShowResult(false)

    }

    const onSent = async (prompt) => {
        setResultData("")
        setLoading(true)
        setShowResult(true)
        let response;
        if (prompt !== undefined) {
            response = await main(prompt);
            setRecentPrompt(prompt)
        }
        else {
            setPrevPrompt((prev) => [...prev, input])
            setRecentPrompt(input)
            response = await main(input)
        }
        setLoading(false)
        setInput("")
        let responseArray = response.split("**");
        let newResponse = "";
        for (let i = 0; i < responseArray.length; i++) {
            if (i === 0 || i % 2 !== 1) {
                newResponse += responseArray[i];
            }
            else {
                newResponse += "<b>" + responseArray[i] + "</b>";
            }
        }
 
        let newResponse2 = newResponse.split("*").join("<br/>");
        setResultData(newResponse2)
    }

    // memoize the value object
    const contextValue = useMemo(() => ({
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
    }), [
        prevPrompt,
        onSent,
        recentPrompt,
        showResult,
        loading,
        resultData,
        input,
        newChat
    ]);

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider