import React from 'react'

export default class SingleMsg extends React.Component {

render(props){
    return(
      <div className={`row message ${this.props.msg.read ? 'read':'unread'}`} onClick={(event)=>this.props.truefalseClick(event,'read', this.props.msg)}>
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2">
              <input type="checkbox" checked={this.props.msg.selected} onClick={(event)=>this.props.truefalseClick(event,'selected', this.props.msg)}/>
            </div>
            <div className="col-xs-2">
              <i className={`star fa ${this.props.msg.starred ? 'fa-star':'fa-star-o'}`} onClick={(event)=>this.props.truefalseClick(event,'starred', this.props.msg)}></i>
            </div>
          </div>
        </div>
        <div className="col-xs-11">
          {this.props.msg.labels.map((label, i) => {
              return <span key={i} className="label label-warning">{label}</span>
          })}
          <a href="#">
            {this.props.msg.subject}
          </a>
        </div>
      </div>
    );
  }
}
