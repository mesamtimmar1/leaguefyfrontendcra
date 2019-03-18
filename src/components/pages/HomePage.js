import React from 'react';
import LeagueStats from '../stats/LeagueStats';


const HomePage = props => {
    return(
        <div className="home-page__wrapper">
            <div className="home-page__header">
                <h1 className="logo">
                    LEAGUE<span>FY</span>
                </h1>
            </div>
    
            <div className="home-page__body">
                <LeagueStats />
            </div>
        </div>
    )
}

export default HomePage;