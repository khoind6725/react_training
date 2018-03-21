import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskControl from './components/TaskControl';
import TaskList from './components/TaskList';
import { connect } from 'react-redux';
import * as actions from './actions/index';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      filter: {
        name: '',
        status: -1
      }
    }
  }

  onSubmit = (data) => {
    var { tasks } = this.state
    if (data.id === '') {
      data.id = this.generateId()
      tasks.push(data)
    }
    else {
      // Editing
      var index = this.findIndex(data.id)
      tasks[index] = data
    }
    this.setState({
      tasks: tasks
    })
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }

  s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1)
  }

  generateId() {
    return this.s4() + this.s4() + '-' + this.s4() + this.s4() + '-' + this.s4() + this.s4() + '-' + this.s4() + this.s4() + '-' + this.s4() + this.s4();
  }

  findIndex = (id) => {
    let { tasks } = this.state
    let result = -1
    tasks.forEach((task, index) => {
      if (task.id === id) {
        result = index
      }
    })
    return result
  }

  onToggleForm = () => {
    let { itemEditing } = this.props
    if (itemEditing && itemEditing.id !== '') {
      this.props.onOpenForm()
    }
    else {
      this.props.onToggleForm()
    }
    this.props.onClearTask({
      id: '',
      name: '',
      status: false
    });

  }

  render() {
    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr/>
        </div>
        <div className="row">
          <div className={ this.props.isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : "" }>
            {/* Form */}
            <TaskForm 
              onSubmit={ this.onSubmit }
            />
          </div>
          <div className={ this.props.isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12" }>
            <button 
              type="button" 
              className="btn btn-primary"
              onClick={ this.onToggleForm }
              >
              <span className="fa fa-plus mr-5"></span>Thêm Công Việc
            </button>
            {/* TaskControl */}
            <TaskControl/>
            <div className="row mt-15">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                {/* TaskList */}
                <TaskList/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isDisplayForm: state.isDisplayForm,
    itemEditing: state.itemEditing
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onToggleForm: () => {
      dispatch(actions.toggleForm())
    },
    onOpenForm: () => {
      dispatch(actions.openForm())
    },
    onClearTask: (task) => {
      dispatch(actions.editTask(task))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
