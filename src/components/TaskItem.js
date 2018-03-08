import React, { Component } from 'react';

class TaskItem extends Component {

  render() {
    return (
    	<tr>
        <td className="text-center">1</td>
        <td>
          Nguyễn Đức Khôi
        </td>
        <td className="text-center">
          <span className="label label-success">
            Kích hoạt
          </span>
        </td>
        <td className="text-center">
          <button type="button" className="btn btn-warning">Sửa</button>
          &nbsp;
          <button type="button" className="btn btn-danger">Xóa</button>
        </td>
      </tr>
    );
  }
}


export default TaskItem;
