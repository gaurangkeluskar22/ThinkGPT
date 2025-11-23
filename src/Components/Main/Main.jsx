import './Main.css';
import { assets } from '../../assets/assets';
import { useContext } from 'react';
import { Context } from '../../Context/Context';

const Main = () => {
    const {
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
    } = useContext(Context)

    return (
        <div className='main'>
            <div className="nav">
                <p>ThinkGPT</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="main-container">

                {
                    !showResult
                        ?
                        <>
                            <div className="greet">
                                <p>
                                    <span>Hello, Dev.</span>
                                    <p>How can I help you today?</p>
                                </p>
                            </div>
                            <div className="cards">
                                <div className="card">
                                    <p>Suggest beautiful places to see on an upcoming road trip</p>
                                    <img src={assets.compass_icon} alt="" />
                                </div>
                                <div className="card">
                                    <p>Briefly summarize this concept: urban planning</p>
                                    <img src={assets.bulb_icon} alt="" />
                                </div>
                                <div className="card">
                                    <p>Brainstorm team bonding activities for our work retreat</p>
                                    <img src={assets.message_icon} alt="" />
                                </div>
                                <div className="card">
                                    <p>Improve the readability of the following code</p>
                                    <img src={assets.code_icon} alt="" />
                                </div>
                            </div>
                        </>

                        :
                        <div className='result'>
                            <div className="result-title">
                                <img src={assets?.user_icon} alt="" />
                                <p>{recentPrompt}</p>
                            </div>
                            <div className="result-data">
                                <img src={assets.gemini_icon} alt="" />
                                {loading ?
                                    <div className='loader'>
                                        <hr/>
                                        <hr/>
                                        <hr/>
                                        
                                    </div> :
                                    <p dangerouslySetInnerHTML={{ __html: resultData }}>{resultData}</p>
                                }
                            </div>
                        </div>


                }


                <div className="main-bottom">
                    <div className="search-box">
                        <input type="text" placeholder='Enter a prompt here' onChange={(e) => setInput(e?.target?.value)} value={input} />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            <img src={assets.send_icon} alt="" onClick={() => onSent()} />
                        </div>
                    </div>
                    <p className="bottom-info">
                        ThinkGpt may display inaccurate info, including about people, so double check responses,
                    </p>
                </div>

            </div>

        </div>
    )
}

export default Main;