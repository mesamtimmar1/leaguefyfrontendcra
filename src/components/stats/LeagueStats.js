import React from 'react';
import MatchResult from './MatchResult';
import config from '../../config';
import helper from './helper';

export default class LeagueStats extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            searched: false,
            summonerName: '',
            matches: []
        }
    }

    handleInputChange = event => {
        const target = event.target;
        const value = target.value;
        const fieldName = target.name;

        if (fieldName === 'summonerName' && !helper.validateSummonerName(value) && value != '')
            return;
        this.setState({
            [fieldName]: value
        });
    }

    handleSearch = () => {
        if (!this.state.summonerName)
            return;
        
        fetch(`${config.BASE_URL}lol/summoner/stats/${this.state.summonerName}`)
            .then(res => res.json())
            .then(matches => this.setState(prevState => {
                return({
                    ...prevState,
                    matches,
                    searched: true
                })})
            );
    }

    render() {
        return(
            <div className="league-stats__wrapper">
                <div className="league-stats__header">
                    <div className="league-stats__header-title">
                        <h2>League Stats</h2>
                    </div>
                    
                    <div className="league-stats__header-controls">
                        <input 
                            type="text"
                            name="summonerName"
                            value={this.state.summonerName}
                            onChange={this.handleInputChange}
                            placeholder="Enter Summoner Name"
                        />
                        <button
                            className='btn'
                            onClick={this.handleSearch}
                        >
                            Search
                        </button>
                    </div>
                </div>
        
                <div className="league-stats__body">
                    {this.state.searched &&
                        this.state.matches.map(matchResult => {
                            return(
                                <MatchResult matchResult={matchResult} />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}