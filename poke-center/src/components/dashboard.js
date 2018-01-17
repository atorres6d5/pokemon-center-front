import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import {green500, amberA100, deepOrangeA400, grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

import FlatButton from 'material-ui/FlatButton';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';



const iconButtonElement = (
  <IconButton
    touch={true}
    tooltip="more"
    tooltipPosition="bottom-left"
  >
    <MoreVertIcon color={grey400} />
  </IconButton>
);

const rightIconMenu = (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem>Reply</MenuItem>
    <MenuItem>Forward</MenuItem>
    <MenuItem>Delete</MenuItem>
  </IconMenu>
);

// when users login they should see a dashboard that lets them select
// between raiding today or battling today
// from here they will also be able to click on a edit profle button

class Dashboard extends Component {

  style = {
    appBar:{'backgroundColor':amberA100},
    titleStyle:{color:deepOrangeA400}

  }

  render() {
    return (
      <div>
        <AppBar title="The Pokemon Center"
          titleStyle={this.style.titleStyle}
          style={this.style.appBar}/>
          <br/>
        <div className="container">
            <Card>
              <CardHeader/>
              <CardMedia overlay={<CardTitle title="Raids" subtitle="Get the help you need for your level 5 raids" />}>
              <img src="../../img/raids.jpg" />
              </CardMedia>
              <CardActions>
                <FlatButton label="Action1" />
                <FlatButton label="Action2" />
              </CardActions>
            </Card>

          </div>
      </div>
    );
  }

}

export default Dashboard;
