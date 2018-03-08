import React, { Component } from 'react';
import TaskItem from './TaskItem';

class TaskList extends Component {

  render() {
    return (
    	<table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên</th>
            <th>Trạng thái</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>
              <input type="text" className="form-control" />
            </td>
            <td>
              <select className="form-control">
                <option value="-1">Tất Cả</option>
                <option value="0">Ẩn</option>
                <option value="1">Kích Hoạt</option>
              </select>
            </td>
            <td></td>
          </tr>
          <TaskItem />
        </tbody>
      </table>
    );
  }
}


export default TaskList;
