import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      username: ''
    }
  }

  onChangeText = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  onHandleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state.username)
  }

  render() {
    return (
      <div className="container mt-30">
        <div className="row">
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">Form</h3>
              </div>
              <div className="panel-body">
                <form onSubmit={ this.onHandleSubmit }>
                  <div className="form-group">
                    <label>Username</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      name="txtName" 
                      onChange={ this.onChangeText }
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">Lưu lại</button>&nbsp;
                  <button type="reset" className="btn btn-default">Xóa trắng</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
