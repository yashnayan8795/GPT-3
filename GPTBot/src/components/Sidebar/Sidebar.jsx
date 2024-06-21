import React, { useContext, useState } from 'react';
import './Sidebar.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/Context';
const Sidebar = () => {
    const [extended,setExtended]= useState(false);
    const {onSent, prevPrompts,setRecentPrompt,newChat}= useContext(Context)
    const loadPrompt = async  (prompt)=>{
        setRecentPrompt(prompt)
        await onSent(prompt);
    }
    return (
        <div className='Sidebar'>
            <div className="top">
                <img onClick={()=>setExtended(prev=>!prev)} className='menu' src={assets.menu_icon} alt="menu_icon"  />
                <div onClick={() => newChat()} className='new-chat'>
                    <img className='menu' src={assets.plus_icon} alt="plus_icon" />
                    {extended?<p className='txt'>New Chat</p>:null}
                </div>
                {extended 
                ?<div className='recent'>
                    <p className="recent-title">Recent</p>
                    {prevPrompts.map((item,index)=>{
                        return (
                            <div onClick={() => loadPrompt(item)} className="recent-entry">
                                <img src={assets.message_icon} alt="" />
                                <p>{item.slice(0,18)}...</p>
                            </div>
                        )
                    })}
                    
                    </div>: null}
            </div>
            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="" className='invertimg' />
                    {extended?<p><a href='https://gemini.google.com/faq'>FAQs</a></p>:null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="" className='invertimg' />
                    {extended?<p><a href='#'>Activity</a></p>:null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="" className='invertimg' />
                    {extended?<p>Settings</p>:null}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;