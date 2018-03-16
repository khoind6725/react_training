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
      taskEditing: null,
      filter: {
        name: '',
        status: -1
      },
      keyWord: '',
      sortBy: 'name',
      sortValue: 1
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
      tasks: tasks,
      taskEditing: null
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

  onUpdate = (id) => {
    // let { tasks } = this.state
    // let index = this.findIndex(id)
    // let taskEditing = tasks[index]
    // this.setState({
    //   taskEditing: taskEditing
    // })
    this.props.onOpenForm()
  }

  onFilter = (filterName, filterStatus) => {
    filterStatus = +filterStatus
    this.setState({
      filter : {
        name: filterName,
        status: filterStatus
      }
    })
  }

  onSearch = (keyWord) => {
    this.setState({
      keyWord: keyWord
    })
  }

  onSort = (sortBy, sortValue) => {
    this.setState({
      sortBy: sortBy,
      sortValue: sortValue
    })
  }

  render() {
    let { 
      taskEditing, 
      sortBy, 
      sortValue 
    } = this.state

    let { isDisplayForm } = this.props

    // if (filter) {
    //   if (filter.name) {
    //     tasks = tasks.filter((task) => {
    //       return task.name.toLowerCase().indexOf(filter.name.toLowerCase()) !== -1;
    //     })
    //   }
    //   tasks = tasks.filter((task) => {
    //     if (filter.status === -1) {
    //       return task
    //     }
    //     else {
    //       return task.status === ( filter.status === 1 ? true : false);
    //     }
    //   })
    // }

    // if (keyWord) {
    //   tasks = tasks.filter((task) => {
    //     return task.name.toLowerCase().indexOf(keyWord.toLowerCase()) !== -1;
    //   })
    // }

    // if (sortBy === 'name') {
    //   tasks.sort((a,b) => {
    //     if (a.name > b.name) return sortValue
    //     else if (a.name < b.name) return -sortValue
    //     else return 0
    //   })
    // }
    // else {
    //   tasks.sort((a,b) => {
    //     if (a.status > b.status) return -sortValue
    //     else if (a.status < b.status) return sortValue
    //     else return 0
    //   })
    // }

    let elmTaskForm = isDisplayForm ? 
      <TaskForm 
        onSubmit={ this.onSubmit }
        task={ taskEditing }
      /> 
      : ''
    return (
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr/>
        </div>
        <div className="row">
          <div className={ isDisplayForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : "" }>
            {/* Form */}
            { elmTaskForm }
          </div>
          <div className={ isDisplayForm ? "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12" }>
            <button 
              type="button" 
              className="btn btn-primary"
              onClick={ this.props.onToggleForm }
              >
              <span className="fa fa-plus mr-5"></span>Thêm Công Việc
            </button>
            {/* TaskControl */}
            <TaskControl 
              onSearch={ this.onSearch }
              onSort={ this.onSort }
              sortBy={ sortBy }
              sortValue={ sortValue }
            />
            <div className="row mt-15">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                {/* TaskList */}
                <TaskList 
                  onUpdate={ this.onUpdate } 
                  onFilter={ this.onFilter }
                />
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
    isDisplayForm: state.isDisplayForm
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onToggleForm: () => {
      dispatch(actions.toggleForm())
    },
    onOpenForm: () => {
      dispatch(actions.openForm())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
