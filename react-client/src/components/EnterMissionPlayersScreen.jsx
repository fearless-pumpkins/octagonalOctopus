import React from 'react';
import $ from 'jquery';

import InfoPanel from './InfoPanel.jsx';
import MissionHistory from './MissionHistory.jsx';

class EnterMissonPlayersScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {selected: []};
    this.selectedForMission = this.selectedForMission.bind(this);
    this.sendNames = this.sendNames.bind(this);
  }

  render() {
    return (
      <div id="enterMissionPlayersScreen">

        <h3> Decide who Goes on the Mission </h3>

        <InfoPanel role={this.props.role}   extraInfo = {this.props.extraInfo}/>

        <MissionHistory missionHistory={this.props.history}  />

        <h5>
        Discuss Which {this.props.missionSize} Players to Send on the Mission and enter the results:
        </h5>

        <ul id="missionSelection">
        {this.props.players.map((player, index)=>{
          return (<li key={index}><label><input className="missionChoices" onChange={this.selectedForMission} type="checkbox" name="player" value={player}/></label>{player}</li>)
        })}

        </ul>
        <div id="errDiv">

        </div>
        <button onClick={this.sendNames}> Submit Players </button>
      </div>
      )}

  selectedForMission(event) {
    // if more boxes selected are selected then should be, make unable to select more.
    if($("input[name='player']:checked").length > this.props.missionSize) {
      event.target.checked = false;
    } else {
      // if box is deselected, remove deselected player from the state.
      if (!event.target.checked) {
       let temp = this.state.selected;
       for (let i = 0; i < temp.length; i++) {
         if (event.target.value === temp[i]) {
           temp.splice(i,1);
           break;
         }
       }
       this.setState({selected: temp});
     } else {
       // if maximum checkboxes are not selected, add player to state.
       this.setState({selected: this.state.selected.concat([event.target.value])});
     }
   }
  }

  sendNames(){
    // if the required number of boxes are selected then send players on mission.
    if ($("input[name='player']:checked").length === this.props.missionSize) {
      this.props.socket.emit('missionparticipants', {participants: this.state.selected,
      roomname: this.props.roomname});
    } else {
      // if more players are required then show error.
      $('#errDiv').empty();
      $('#errDiv').append(`<p id="notEnoughPlayersErr">Please select ${this.props.missionSize} players.</p>`)
    }
  }
}

export default EnterMissonPlayersScreen;
