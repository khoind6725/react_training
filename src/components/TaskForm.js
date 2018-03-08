import React, { Component } from 'react';

class TaskForm extends Component {

  removeForm = () => {
    this.props.removeForm()
  }

  // addWork = (e) => {
  //   e.preventDefault()
  //   console.log(this.refs.workName.value)
  //   console.log(this.refs.workName.value)
  // }

  render() {
    return (
    	<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div className="panel panel-info">
          <div className="panel-heading">
            <h3 className="panel-title">Thêm Công Việc</h3>
          </div>
          <div className="panel-body">
            <form>         
              <div className="form-group">
                <label>Tên</label>
                <input type="text" className="form-control" placeholder="Nhập tên công việc" name="workName" ref="workName"/>
              </div>
              <div className="form-group">
                <label>Trạng thái</label>
                <select className="form-control" required="required" name="status" ref="status"> 
                  <option value="1">Kích Hoạt</option>
                  <option value="0">Ẩn</option>
                </select>
              </div>
              <div className="text-center">
                <button type="button" className="btn btn-success" onClick={(e) => { e.preventDefault(); this.props.addWork(this.refs.workName.value, this.refs.status.value)}}>
                  { this.props.actionAdd === true ? 'Thêm' : 'Sửa'}
                </button>
                &nbsp;
                <button type="button" className="btn btn-default" onClick={ () => this.removeForm() }>Hủy bỏ</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default TaskForm;
