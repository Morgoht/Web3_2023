import Statistic from "./Statistic";
import React from "react";

const Statistics = ({statistics}) => {
    const [good, neutral, bad] = statistics;
    const all = good + neutral + bad
    const average = (good - bad) / all
    const positive = good/all

    if(all == 0){
        return(
            <div>
                <p> No feedback give</p>
            </div>
        )
    }
    else {
        return (
            <table>
                <colgroup>
                    <col/>
                    <col/>
                </colgroup>
                <Statistic name='good' value={good}/>
                <Statistic name='bad' value={neutral}/>
                <Statistic name='neutral' value={bad}/>
                <Statistic name='all' value={all}/>
                <Statistic name='average' value ={average}/>
                <Statistic name='positive' value = {positive + " %"} />
                
            </table>
        )
    }
}
export default Statistics