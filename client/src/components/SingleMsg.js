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

  handleClick = (event,e)=>{
    event.stopPropagation();
    this.setState(prevState =>
      ({[`${e}`]:!prevState[`${e}`]})
    );
  }

  render(props){
    return(
      <div className={`row message ${this.state.read ? 'read':'unread'}`} onClick={(event)=>this.handleClick(event,'read')}>
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2">
              <input type="checkbox" />
            </div>
            <div className="col-xs-2">
              <i className={`star fa ${this.state.starred ? 'fa-star':'fa-star-o'}`} onClick={(event)=>this.handleClick(event,'starred')}></i>
            </div>
          </div>
        </div>
        <div className="col-xs-11">
          {this.state.labels.map((label, i) => {
              return <span key={i} className="label label-warning">{label}</span>
          })}
          <a href="#">
            {this.state.subject}
          </a>
        </div>
      </div>
    );
  }
}
