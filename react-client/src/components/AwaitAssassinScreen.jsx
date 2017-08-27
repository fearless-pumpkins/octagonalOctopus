import React from 'react';

import InfoPanel from './InfoPanel.jsx';
import Timer from './Timer.jsx';
import GameBoard from './GameBoard/GameBoard.jsx';

class AwaitAssassinScreen extends React.Component {

  constructor(props) {
    super(props);

    this.spyCount = 3; // Needs to be passed down appropriately
  }

  render() {

    return (
      <div id="awaitAssassinScreen">
        <InfoPanel role={this.props.role} missionHistory={this.props.history} />
        <GameBoard
          history = {this.props.questHistory}
          numPeopleOnMissions = {this.props.numPeopleOnMissions}
          currentMission = {this.props.questHistory.length}
          voteTrack={this.props.voteTrack}
          messageDisplay = {`Awaiting Mordred...`}
          />
      </div>
    )}
}

export default AwaitAssassinScreen;
