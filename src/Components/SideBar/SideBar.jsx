import { useContext, useState } from 'react'
import './SideBar.css'
import { assets } from '../../assets/assets'
import { Context } from '../../Context/Context'
import React from 'react'

const SideBar = () => {

    const [extended, setExtended] = useState(true)
    const {
        prevPrompt,
        onSent,
        setRecentPrompt,
        newChat
    } = useContext(Context)

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt)
        await onSent(prompt)
    }


    return (
        <div className="sidebar">
            <div className="top">
                <img onClick={() => setExtended((prev) => !prev)} className="menu" src={assets.menu_icon} alt="" draggable="false" />
                <div className="new-chat" onClick={() => newChat()}>
                    <img src={assets.plus_icon} alt="" draggable="false" />
                    {extended ? <p>New Chat</p> : null}
                </div>
            </div>
            {extended ?
                <div className="recent">
                    {
                        prevPrompt?.length ?
                            <p className="recent-title">
                                Recent
                            </p>
                            :
                            null
                    }
                    {
                        prevPrompt?.map((item) => {
                            return (
                                <div className="recent-entry" key={item} onClick={() => loadPrompt(item)}>
                                    <img src={assets.message_icon} alt="" draggable="false" />
                                    <p>{item.slice(0, 10)}...</p>
                                </div>
                            )
                        })
                    }
                </div>
                :
                null
            }
            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="" draggable="false" />
                    {extended ? <p>Help</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="" draggable="false" />
                    {extended ? <p>Activity</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="" draggable="false" />
                    {extended ? <p>Settings</p> : null}
                </div>
            </div>

        </div>
    )
}

export default React.memo(SideBar)