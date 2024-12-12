import React from 'react'
import './Main.css'
import assets from '../../assets/assets/assets'
import { useContext } from 'react'
import { Context } from '../../context/Context'

const Main = () => {


    const {onSent,  recentPrompt,showResult ,  loading , resultData , setInput ,  input }= useContext(Context)
  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon}/>
        </div>
        <div className="main-container">


            {!showResult?
            <>
            <div className="greet">
                <p><span> Hello, SHIVANSHU </span></p>
                <p>How can i help you today?</p>
            </div>
            <div className="cards">



                <div className="card">
                    <p>suggest beautifull places to see upcoming road trip</p>
                    <img src= {assets.compass_icon} />
                </div>


                <div className="card">
                    <p>breffly explain about ndfklnd</p>
                    <img src= {assets.bulb_icon} />
                </div>


                <div className="card">
                    <p>suggest some quets</p>
                    <img src= {assets.message_icon} />
                </div>


                <div className="card">
                    <p>suggest bsome codes</p>
                    <img src= {assets.code_icon} />
                </div>
            </div>


            </>:
            <div className='result'>
                <div className='result-title'>
                    <img src={assets.user_icon} alt='' />

                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    <img src={assets.gemini_icon}/>

                    {
                        loading?<div className='loader'>

                            <hr/>
                            <hr/>
                            <hr/>
                        </div>
                        :  <p  dangerouslySetInnerHTML={{__html:resultData}}></p>

                    }
                  
                    
                </div>


                 </div>
            
        }
            
            <div className="main-bottom">
                <div className="search-box">
                    <input  onChange ={ (e) =>setInput(e.target.value)} value={ input} type='text' placeholder='Enter a promt here'/>
                    <div>
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon} alt="" />
                    <img onClick={()=>onSent() } src={assets.send_icon} alt="" />
                </div>
                </div>
                <p className="bottom-info">
                    gemni has a brellient work
                </p>
            </div>
        </div>
    </div>
  )
}

export default Main
