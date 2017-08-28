import React from 'react';

class MissionHistory extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let element = '';
    if (this.props.missionHistory > 0) {
      element = <ol>
      {this.props.missionHistory.map((outcome, index)=>{
        return(<li key={index}> {outcome[0]} </li>)
      })}
      </ol>;
    } else {
      element = <p>No missions to display yet</p>
    }
    return (
      <div>
        <h6> Mission History   </h6>
        {element}
      </div>
      )}
}

export default MissionHistory;
