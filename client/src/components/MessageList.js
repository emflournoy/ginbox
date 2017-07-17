import React from 'react'
import SingleMsg from './SingleMsg';

export default class MessageList extends React.Component {

  render(props){
    return(
      <div className="container">
      {this.props.allmsg.map((msg, i) => (
              <SingleMsg key={i} msg={msg}/>
          ))}
      </div>
    );
  }
}
