import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Toolbar from './components/Toolbar';
import Compose from './components/Compose';
import MessageList from './components/MessageList';

var allmsg = [
        {
          "id": 1,
          "subject": "You can't input the protocol without calculating the mobile RSS protocol!",
          "read": false,
          "starred": true,
          "labels": ["dev", "personal"]
        },
        {
          "id": 2,
          "subject": "connecting the system won't do anything, we need to input the mobile AI panel!",
          "read": false,
          "starred": false,
          "selected": true,
          "labels": []
        },
        {
          "id": 3,
          "subject": "Use the 1080p HTTP feed, then you can parse the cross-platform hard drive!",
          "read": false,
          "starred": true,
          "labels": ["dev"]
        },
        {
          "id": 4,
          "subject": "We need to program the primary TCP hard drive!",
          "read": true,
          "starred": false,
          "selected": true,
          "labels": []
        },
        {
          "id": 5,
          "subject": "If we override the interface, we can get to the HTTP feed through the virtual EXE interface!",
          "read": false,
          "starred": false,
          "labels": ["personal"]
        },
        {
          "id": 6,
          "subject": "We need to back up the wireless GB driver!",
          "read": true,
          "starred": true,
          "labels": []
        },
        {
          "id": 7,
          "subject": "We need to index the mobile PCI bus!",
          "read": true,
          "starred": false,
          "labels": ["dev", "personal"]
        },
        {
          "id": 8,
          "subject": "If we connect the sensor, we can get to the HDD port through the redundant IB firewall!",
          "read": true,
          "starred": true,
          "labels": []
        }
      ]


class App extends Component {
  constructor(props){
    super(props);
    this.state = {};
    this.state.truefalseClick = (event,topic,msg)=>{
        event.stopPropagation();
        msg[topic] = !msg[topic];
        //update the entire msg array
        this.setState({allmsg:this.state.allmsg});
        if(topic==='selected'){
          this.setState({selStatus:this.state.allClicked.some})
        }
      }
    this.state.selectAll = ()=>{
      if(this.state.selStatus!==this.state.allClicked.true){
        for(let i=0;i<allmsg.length;i++){
          allmsg[i].selected = true;
        }
        this.setState({allmsg:this.state.allmsg});
        this.setState({selStatus:this.state.allClicked.true})
        }else{
          for(let i=0;i<allmsg.length;i++){
            allmsg[i].selected = false;
          }
          this.setState({allmsg:this.state.allmsg});
          this.setState({selStatus:this.state.allClicked.false})
        }
      }
    this.state.allClicked = {
      true: "fa fa-check-square-o",
      some: "fa fa-minus-square-o",
      false: "fa fa-square-o"
    }
    this.state.selStatus = this.state.allClicked.false;
  }

  componentWillMount(){
    for(let i=0;i<allmsg.length;i++){
      allmsg[i].selected=false;
    }
    this.setState({allmsg: allmsg})
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <Toolbar allmsg={this.state.allmsg} selectAll={this.state.selectAll} selStatus={this.state.selStatus}/>
          </div>
          <Compose />
          <MessageList allmsg={this.state.allmsg} truefalseClick={this.state.truefalseClick}/>
        </div>
      </div>
    );
  }
}

export default App;
