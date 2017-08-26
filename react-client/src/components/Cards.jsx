import React from 'react';

class Cards extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    console.log('extra Info: ', this.props.extraInfo);

    var mordredTeam = this.props.extraInfo.mordredTeam;
    var merlinTeam = this.props.extraInfo.merlinTeam;
    /*
    Example for Morgana:
    {
      mordredTeam:{mordred:['3','10'], minionofmordred:['3','10'], morgana:['yourself'], oberon:['unknown']}
      merlinTeam:{merlin:['unknown'], loyalservant_1:['unknown'], loyalservant_2:['unknown'], , loyalservant_3:['unknown'], percival:['unknown']}
    }
    */

    // loop on each key and bluid table row

    var bad = { 
      //'mordred':'Mordred', 
      //'minionofmordred':'Minion of Mordred', 
      'morgana':'Morgana', 
      'oberon':'Oberon' 
    };
    
    var good = {
      //'merlin':'Merlin', 
      //'loyalservant_1':'Loyal Servant', 
      'percival':'Percival', 
      'loyalservant_2':'Loyal Servant',
      'loyalservant_3':'Loyal Servant',
      'loyalservant_4':'Loyal Servant'
    };
  
    var arr = [[],[]];
    var table1;
    var table2;
      
    for (var key in merlinTeam){
      if (key !== 'merlin' && key !== 'loyalservant_1'){
        arr[1].push([key, good[key] + ' is ' + merlinTeam[key].join(' or ')]);
      }
    };

    for (var key in mordredTeam){
      if (key !== 'mordred' && key !== 'minionofmordred'){
        arr[0].push([key, bad[key] + ' is ' + mordredTeam[key].join(' or ')]);
      }
    };

    table1 = (<tr>
              <td></td>
              <td><div className="photosRules" style={{content: `url(/styles/Resources/${arr[1][0]}.png)`}} ></div></td>
            </tr>);

    table2 = (<tr>
              <td style={{fontSize:'35px'}}></td>
              <td style={{fontSize:'35px'}}>{arr[1][1]}</td>
            </tr>);
    

    return (
    <div id="cards">
      <table id="tableRules">
        <tbody>
          <tr>
            <th>Mordred Team</th>
            <th>Merlin Team</th>
          </tr>
          <tr>
            <th style={{fontSize:'35px'}}>sabotage 3 missions to win</th>
            <th style={{fontSize:'35px'}}>succeed 3 missions to win</th>
          </tr>
          <tr>
            <td><div className="photosRules" style={{content: `url(/styles/Resources/mordred.png)`}} ></div></td>
            <td><div className="photosRules" style={{content: `url(/styles/Resources/merlin.png)`}} ></div></td>
          </tr>
          <tr>
            <td style={{fontSize:'35px'}}>Mordred is: {mordredTeam.mordred.join(' or ')}</td>
            <td style={{fontSize:'35px'}}>Merlin is: {mordredTeam.mordred.join(' or ')}</td>
          </tr>

          <tr>
            <td><div className="photosRules" style={{content: `url(/styles/Resources/minionofmordred.png)`}} ></div></td>
            <td><div className="photosRules" style={{content: `url(/styles/Resources/loyalservant.png)`}} ></div></td>
          </tr>
          <tr>
            <td style={{fontSize:'35px'}}>Minion of Mordred is: {mordredTeam.minionofmordred.join(' or ')}</td>
            <td style={{fontSize:'35px'}}>Loyal Servant is: {merlinTeam.loyalservant_1.join(' or ')}</td>
          </tr>
          

          {table1}  
          {table2}  



        </tbody>  
      </table>
    </div>
    )}
}

export default Cards;