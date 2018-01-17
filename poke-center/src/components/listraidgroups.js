import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import {green500, amberA100, deepOrangeA400, grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';


import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';






// props.raids=[{location:everett, message: latest message in group},{},]

import React from 'react';

const RaidgroupList = ({raids}) => (
  <div>
    <List>
      <Subheader>Today's Raids</Subheader>
      {raids.groups.map(raid=>{
        return(
          <Divider inset={true} />
          <ListItem
            primaryText={raid.location}
            secondaryText={
              <p>{raid.message}</p>
            }
            secondaryTextLines={2}/>
        )
      })}
    </List>

  </div>
);

export default RaidgroupList;
