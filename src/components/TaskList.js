import React, { Component } from 'react';
import TaskItem from './TaskItem';
import { connect } from 'react-redux';

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
    this.props.onFilter( 
      name === 'filterName' ? value : this.state.filterName,
      name === 'filterStatus' ? value : this.state.filterStatus
    )
    this.setState({
      [name]: value
    })
  }

  render() {
    let { tasks } = this.props
    let { filterName, filterStatus } = this.state
    let elmTask = tasks.map((task, index) => {
      return <TaskItem 
        key={ task.id }
        index={ index + 1 }
        task={ task }
        onUpdate={ this.props.onUpdate }
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
                value={ filterName }
                name="filterName"
                type="text" 
                className="form-control" />
            </td>
            <td>
              <select 
                onChange={ this.onChange }
                value={ filterStatus }
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
    tasks: state.tasks
  }
}

export default connect(mapStateToProps, null)(TaskList);
