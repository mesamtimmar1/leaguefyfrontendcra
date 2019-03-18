import React from 'react';

const MatchResult = props => {
    return(
        <div className="match-result__wrapper">
            <div className="match-result__general">
                <p><strong>{props.matchResult.outcome}</strong></p>
                <p>Time: {props.matchResult.gameDuration}</p>
            </div>

            <div className="match-result__champion">
                <p>CN: {props.matchResult.championName}</p>
                <p>CL:{props.matchResult.championLevel}</p>
            </div>

            <div className="match-result__kda">
                <p>K/D/A:{props.matchResult.kills}/{props.matchResult.deaths}/{props.matchResult.assists}</p>
            </div>

            <div className="match-result__items-bought">
                <p>Items Bought: </p>
                {props.matchResult.itemsBought.map(item =>
                        <p>{item}</p>  
                    )
                }
            </div>

            <div className="match-result__creep-score">
                <p>TCS:{props.matchResult.totalCreepScore}</p>
                <p>TCS/min:{props.matchResult.creepScorePerMinute.toFixed(2) || 0}</p>
            </div>
        </div>
    )
}

export default MatchResult;