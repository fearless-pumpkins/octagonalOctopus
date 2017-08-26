import React from 'react';
import Cards from './Cards.jsx';

class InfoPanel extends React.Component {

  constructor(props) {
    super(props);
  }



  render() {

    var split = this.props.role.split('_');
    var name = split[0];




    var role = this.props.role.split(' ').join('').toLowerCase();



    var split = this.props.role.split('_');
    var name = split[0];
    var role = split[0].split(' ').join('').toLowerCase();
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
=======
>>>>>>> fix info panel
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
        <h5> {name} </h5>
        <div className="photos" style={styles}></div>
        <p> {extraInfo} </p>
      </div>
      )}
<<<<<<< HEAD
=======
=======
    <div id="infoPanel">
      <div className="photos" style={styles}></div>
      <p> {name} </p>
      <Cards extraInfo={this.props.extraInfo}/>
    </div>
    )
  }
>>>>>>> fixed bootstrap issue
}
>>>>>>> fix info panel

export default InfoPanel;