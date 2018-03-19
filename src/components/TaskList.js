import React, { Component } from 'react';
import TaskItem from './TaskItem';
import { connect } from 'react-redux';
import * as actions from './../actions/index'

class TaskList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      filterName: '',
      filterStatus: -1
    }
  }

  onChange = (e) => {
    let { target } = e
    let { name, value } = target
    let filter = {
      name : name === 'filterName' ? value : this.state.filterName,
      status : name === 'filterStatus' ? value : this.state.filterStatus
    }
    this.props.onFilterTable(filter)
    this.setState({
      [name]: value
    })
  }

  render() {
    let { tasks, filterTable } = this.props

    // filter on table
    if (filterTable.name) {
      tasks = tasks.filter((task) => {
        return task.name.toLowerCase().indexOf(filterTable.name.toLowerCase()) !== -1;
      })
    }

    tasks = tasks.filter((task) => {
      if (filterTable.status === -1) {
        return task
      }
      else {
        return task.status === ( filterTable.status === 1 ? true : false);
      }
    })

    let elmTask = tasks.map((task, index) => {
      return <TaskItem 
        key={ task.id }
        index={ index + 1 }
        task={ task }
      />
    })

    return (
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th className="text-center">STT</th>
            <th className="text-center">Tên</th>
            <th className="text-center">Trạng Thái</th>
            <th className="text-center">Hành Động</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>
              <input 
                onChange={ this.onChange }
                value={ this.state.filterName }
                name="filterName"
                type="text" 
                className="form-control" />
            </td>
            <td>
              <select 
                onChange={ this.onChange }
                value={ this.state.filterStatus }
                name="filterStatus"
                className="form-control">
                <option value="-1">Tất Cả</option>
                <option value="0">Ẩn</option>
                <option value="1">Kích Hoạt</option>
              </select>
            </td>
            <td></td>
          </tr>
          { elmTask }
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    filterTable: state.filterTable
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onFilterTable: (filter) => {
      dispatch(actions.filterTask(filter))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
