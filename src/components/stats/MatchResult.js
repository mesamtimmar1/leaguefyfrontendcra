import React from 'react';

const MatchResult = props => {
    return(
        <div className="match-result__wrapper">
            <div className="match-result__general">
                <p><strong>{props.matchResult.outcome}</strong></p>
                <p>{props.matchResult.gameDuration}</p>
            </div>

            <div className="match-result__champion">
                <p>{props.matchResult.championName}</p>
                <p>{props.matchResult.championLevel}</p>
            </div>

            <div className="match-result__kda">
                <p>{props.matchResult.kills}</p>
            </div>

            <div className="match-result__items-bought">
                <p>{props.matchResult.itemsBought}</p>
            </div>

            <div className="match-result__creep-score">
                <p>{props.matchResult.creepScorePerMinute}</p>
            </div>
        </div>
    )
}

export default MatchResult;