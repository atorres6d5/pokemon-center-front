import React, { Component } from 'react';
import PubNubReact from 'pubnub-react';
import _ from 'lodash'

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.pubnub = new PubNubReact({
       publishKey: 'pub-c-f3b20374-0188-4d64-894a-a77dada8f301',
       subscribeKey: 'sub-c-37711fcc-f74e-11e7-b8a6-46d99af2bb8c'
      });
    this.pubnub.init(this);
  }

  componentWillMount() {
    this.pubnub.subscribe({ channels: ['channel1'], withPresence: true, autoload: 20 });
    this.pubnub.getMessage('channel1')
  }

  componentWillUnmount() {
    this.pubnub.unsubscribe({ channels: ['channel1'] });

  }


 postingMessage =(e)=>{
  if(!e.target.value.length) return
  if (e.key === 'Enter') {
    const message = e.target.value
    this.pubnub.publish({
      message: message, channel: 'channel1'
    })
  }
 }


  render() {
    const messages = this.pubnub.getMessage('channel1')

    return (
      <div>
        <ul>
          {/* {this.state.messageHistory.map((m, index)=>{
            return <li key={index}>{m.entry}</li>
          })} */}
        </ul>
        <ul>
          {messages.map((m, index) => <li key={'message' + index}>{m.message}</li>)}
        </ul>
      </div>
      <div>
        <input onKeyPress={this.postingMessage}></input>
      </div>
    );
  }
}
