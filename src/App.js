import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Search from './components/Search';
import Sort from './components/Sort';
import TaskList from './components/TaskList';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showForm: false,
      actionAdd : true,
      workList: [],
      dataEdit: {
        name: '',
        status: ''
      }
    }
  }

  addWork = ( workName, status ) => {
    let workList = this.state.workList;
    workList.push({
                  name: workName,
                  status: +status
                })
    this.setState({
      workList: workList
    })
  }

  activeForm = (action, index = null) => {
    if (action === 'add') {
      this.setState({
        showForm : true,
        actionAdd : true,
        dataEdit: {
          name: '',
          status: ''
        }
      })
    }
    else {
      this.setState({
        showForm : true,
        actionAdd : false,
        dataEdit: this.state.workList[index]
      })
    }
  }

  removeForm = () => {
    this.setState({
      showForm : false,
      dataEdit: {
        name: '',
        status: ''
      }
    })
  }

  render() {
    return (
      <div className="container">
        <div className="page-header">
          <h1 className="App">Quản lý công việc</h1>
        </div>
        <div className="row">
          {/*TaskForm*/}
          { this.state.showForm === true ? 
            <TaskForm actionAdd={this.state.actionAdd} removeForm={() => this.removeForm()}  addWork={(name, status) => this.addWork(name, status)} dataEdit={this.state.dataEdit}/> : ''
          }
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <div className="form-group">
              <button type="button" className="btn btn-primary" onClick={() => { this.activeForm('add') } }><span className="glyphicon glyphicon-plus"></span> Thêm Công Việc</button>
            </div>
            <div className="row">
              {/*Search*/}
              <Search />
              {/*Sort*/}
              <Sort />
            </div>
            <div className="row mt-20">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                {/*TaskList*/}
                <TaskList 
                  works={ this.state.workList }
                  activeForm={ (action, index) => this.activeForm(action, index) }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
