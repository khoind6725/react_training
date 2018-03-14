import React, { Component } from 'react';

class TaskSearch extends Component {

  constructor(props) {
    super(props)
    this.state = {
      keyWord: ''
    }
  }

  onChange = (e) => {
    let { target } = e
    let { name, value } = target
    this.setState({
      [name]: value
    })
  }

  onSearch = () => {
    this.props.onSearch(this.state.keyWord)
  }

  render() {
    var { keyWord } = this.state
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="input-group">
          <input
            name="keyWord" 
            value={ keyWord }
            onChange={ this.onChange }
            type="text" 
            className="form-control" 
            placeholder="Nhập từ khóa..." />
          <span className="input-group-btn">
            <button 
              onClick={ this.onSearch }
              className="btn btn-primary" 
              type="button">
              <span className="fa fa-search mr-5"></span> Tìm
            </button>
          </span>
        </div>
      </div>
  	);
  }
}

export default TaskSearch;
