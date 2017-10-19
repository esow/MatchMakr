import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import MatchTile from './MatchTableTile/MatchTile'

export default class MatchTable extends Component {

    noMatches = () => {
        return (
            <div className="match-tile empty">
                <h4>You currently have no matches!</h4>
            </div>
        )
    }

    someMatches = () => {
        return (
            <div>
                {this.props.matches.map((match) =>
                    <MatchTile key={match.id} requestMatch={this.props.requestMatch} match={match} />
                )}        
            </div>
        )
    }

    render () {   
        return (
            <div className="match-table">
                <Segment inverted>
                    { this.props.matches.length === 0 ? this.noMatches() : this.someMatches() }
                </Segment>
            </div>
        );
    }
}