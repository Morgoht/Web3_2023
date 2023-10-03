import Message from "components/Display/Message";
import Statistic from "./Statistic";
import React, { useState } from "react";

const Statistics = ({statistics}) => {
    const [loading, setLoading] = useState(true)
    const [good, neutral, bad] = statistics;
    const all = good + neutral + bad
    const average = (good - bad) / all
    const positive = good/all

    const changeResult = () => {
        console.log("clicked => changed loading")
        setTimeout(() => setLoading(false), 3000)
    }
    
    if(all == 0) {
        return(
            <Message message={"no feedback give"}/>
        )
    }
    else{
        if(loading){
            changeResult()
            console.log("changinf loading to =>", loading)
            return (<Message message={"loading..."}/>)
        } 
        return (
            <table>
                <colgroup>
                    <col/>
                    <col/>
                </colgroup>
                <tbody>
                    <Statistic name='good' value={good}/>
                    <Statistic name='bad' value={neutral}/>
                    <Statistic name='neutral' value={bad}/>
                    <Statistic name='all' value={all}/>
                    <Statistic name='average' value ={average}/>
                    <Statistic name='positive' value = {positive + " %"} />
                </tbody>
            </table>
        )
    }
    
}

export default Statistics