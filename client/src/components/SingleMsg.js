import React from 'react'

export default class SingleMsg extends React.Component {
  constructor(props){
    super(props);
    this.state={id: this.props.msg.id,
      subject: this.props.msg.subject,
      read: this.props.msg.read,
      starred: this.props.msg.starred,
      labels: this.props.msg.labels}
  }

  render(props){
    // console.log(this.state.msg);
    return(
      <div className={`row message ${this.state.read ? 'read':'unread'}`}>
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2">
              <input type="checkbox" />
            </div>
            <div className="col-xs-2">
              <i className="star fa fa-star-o"></i>
            </div>
          </div>
        </div>
        <div className="col-xs-11">
          <a href="#">
            {this.state.subject}
          </a>
        </div>
      </div>
    );
  }
}
