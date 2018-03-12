import React, { Component } from 'react';

class TaskForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: '',
      status: false
    }
  }

  onCloseForm = () => {
    this.props.onCloseForm()
  }

  onChange = (e) => {
    let target = e.target
    let name = target.name
    let value = target.value
    this.setState({
      [name] : value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit(this.state.name, this.state.status === "true" ? true : false )
  }

  render() {
    return (
      <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">
            Thêm Công Việc
            <span 
              className="fa fa-times-circle pull-right"
              onClick={ this.onCloseForm }
              role="button"
            >
            </span>
          </h3>
        </div>
        <div className="panel-body">
          <form onSubmit={ this.onSubmit }>
            <div className="form-group">
              <label>Tên :</label>
              <input 
                type="text" 
                className="form-control" 
                name="name"
                value={ this.state.name }
                onChange={ this.onChange }
              />
            </div>
            <label>Trạng Thái :</label>
            <select 
              className="form-control"
              name="status"
              value={ this.state.status }
              onChange={ this.onChange }
            >
              <option value={true}>Kích Hoạt</option>
              <option value={false}>Ẩn</option>
            </select>
            <br/>
            <div className="text-center">
              <button type="submit" className="btn btn-warning">Thêm</button>&nbsp;
              <button type="submit" className="btn btn-danger">Hủy Bỏ</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default TaskForm;
