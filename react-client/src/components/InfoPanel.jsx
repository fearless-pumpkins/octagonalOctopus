import React from 'react';
import Cards from './Cards.jsx';

class InfoPanel extends React.Component {

  constructor(props) {
    super(props);
  }



  render() {

    var split = this.props.role.split('_');
    var name = split[0];
    var role = split[0].split(' ').join('').toLowerCase();
    var extraInfo;


    var styles = {
      content: `url(/styles/Resources/${role}.png)`
    }

    if (this.props.extraInfo){
      extraInfo = (<Cards extraInfo={this.props.extraInfo}/>);
    }
    // else {
    //   extraInfo = ();
    // }

    // if (!this.props.extraInfo) {
    //   var extraInfo = ''
    // } else {

    //   var usernames = this.props.extraInfo.slice(1, this.props.extraInfo.length);
    //   var extraInfo = this.props.extraInfo[0] + usernames.join(', ');
    // }

    return (
      <div id="infoPanel">
        <div className="photos" style={styles}></div>
        <p> {name} </p>
        {extraInfo}
      </div>
    )
  }
    if (!this.props.extraInfo) {
        var extraInfo = ''
      } else {
        console.log('extra Info: ', this.props.extraInfo);
        var usernames = this.props.extraInfo.slice(1, this.props.extraInfo.length);

        var extraInfo = this.props.extraInfo[0] + usernames.join(', ');
        //console.log('usernames: ', usernames);
      }
      return (
      <div id="infoPanel">
        <h5> Info Panel </h5>
        <div className="photos" style={styles}></div>
        <p> Your role: {this.props.role} </p>
        <p> {extraInfo} </p>
      </div>
      )}

export default InfoPanel;