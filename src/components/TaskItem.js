import React, { Component } from 'react';

class TaskItem extends Component {

  render() {
    return (
    	<tr>
        <td className="text-center">{ this.props.index + 1 }</td>
        <td>
          { this.props.name }
        </td>
        <td className="text-center">
          <span className={ this.props.status === 1 ? 'label label-success' : 'label label-warning' }>
            { this.props.status === 1 ? 'Kích hoạt' : 'Ẩn' }
          </span>
        </td>
        <td className="text-center">
          <button type="button" className="btn btn-warning" onClick={ () => this.props.activeForm('edit', this.props.index ) }>Sửa</button>
          &nbsp;
          <button type="button" className="btn btn-danger">Xóa</button>
        </td>
      </tr>
    );
  }
}


export default TaskItem;
