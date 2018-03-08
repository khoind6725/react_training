import React, { Component } from 'react';

class Sort extends Component {
  render() {
    return (
    	<div className="col-xs-6 col-sm-6 col-md-6 col-lg-6" style={{paddingLeft:0}}>
        <button className="dropdown-toggle btn btn-primary" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sắp xếp <span className="glyphicon glyphicon-collapse-down"></span>
        </button>
        <ul className="dropdown-menu">
          <li>
            <a role="button">
              <span className="glyphicon glyphicon-sort-by-alphabet"> Tên A-Z</span>
            </a>
          </li>
          <li>
            <a role="button">
              <span className="glyphicon glyphicon-sort-by-alphabet-alt"> Tên Z-A</span>
            </a>
          </li>
          <li className="divider"></li>
          <li>
            <a role="button">
              Trạng thái Ẩn
            </a>
          </li>
          <li>
            <a role="button">
              Trạng thái kích hoạt
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Sort;
