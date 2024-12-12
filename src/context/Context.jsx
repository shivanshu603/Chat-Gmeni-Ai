import React, { useState } from 'react'
import {createContext} from "react";
import runChat  from '../config/gimini';

 export const Context =createContext();

 const ContextProvider = (props) => {


    const [input , setInput]= useState("");
    const[recentPrompt,setRecentPrompt] =useState ("");
    const [prevPrompt,setPrevPrompt] =useState ([]);
    const [showResult ,setShowResult] = useState (false);
    const [loading ,setLoading] = useState (false);
    const [resultData , setResultData ] = useState ("");

    const delayPara =(index,nextWord) => {

    } 




    const onSent =  async(prompt) =>{

        setResultData ("")
        setLoading (true)
        setShowResult (true)

        setRecentPrompt(input)



      const response= await runChat(input) 
      let responseArray = response.split("**");
      let newResponse ;
      for (let i=0 ; i<responseArray.length; i++)
      {
        if(i== 0 || i%2 !==1){

            newResponse+= "<br>" +responseArray[i]+"</br>"

        }
      }
      setResultData(newResponse)
      setLoading (false)
      setInput ("")
    }



    const contextValue ={

        prevPrompt,
        setPrevPrompt,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        input,
        setInput,
        resultData

    }

    return(

        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
 }
 export default ContextProvider