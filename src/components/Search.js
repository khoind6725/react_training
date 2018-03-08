import React, { Component } from 'react';

class TaskForm extends Component {
  render() {
    return (
    	<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Username" aria-describedby="basic-addon1" />
          <span className="input-group-btn">
        <button type="button" className="btn btn-primary">
        <span className="glyphicon glyphicon-search"></span> Tìm</button>
          </span>
        </div>
      </div>
    );
  }
}

export default TaskForm;
