import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './../actions/index'
class TaskItem extends Component {

  onDeleteItem = () => {
    this.props.onDeleteTask(this.props.task.id)
    this.props.onCloseForm()
  }

  onEditTask = () => {
    this.props.onOpenForm()
    this.props.onEditTask(this.props.task)
  }

  render() {
    let { task, index } = this.props
    return (
    	<tr>
        <td>{ index }</td>
        <td>{ task.name }</td>
        <td className="text-center">
          <span
            role="button"
            onClick={ () => this.props.onUpdateStatus(this.props.task.id) } 
            className={ task.status === true ? "label label-success" : "label label-danger"}>
            { task.status === true ? "Kích hoạt" : "Ẩn"}
          </span>
        </td>
        <td className="text-center">
          <button 
            onClick={ this.onEditTask }
            type="button" 
            className="btn btn-warning">
            <span className="fa fa-pencil mr-5"></span> Sửa
          </button>
          &nbsp;
          <button 
            onClick={ () => this.onDeleteItem() } 
            type="button" 
            className="btn btn-danger">
            <span className="fa fa-trash mr-5"></span> Xóa
          </button>
        </td>
      </tr>
    );
  }
}

const mapStateToProps = state => {
  return {
    
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onUpdateStatus: (id) => {
      dispatch(actions.updateStatus(id))
    },
    onDeleteTask: (id) => {
      dispatch(actions.deleteTask(id))
    },
    onCloseForm: () => {
      dispatch(actions.closeForm())
    },
    onOpenForm: () => {
      dispatch(actions.openForm())
    },
    onEditTask: (task) => {
      dispatch(actions.editTask(task))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskItem);