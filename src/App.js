import React, { Component } from 'react';
import TaskForm from './containers/task_form/task_form';
import TaskList from './containers/task_list/task_list';
import LoginForm from './containers/login_form/login_form.js';
import Menu from './components/menu';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Menu/>
                    <Switch>
                        <Route exact path='/Task-Manager' component={TaskList} />
                        <Route path='/Task-Manager/form' component={TaskForm} />
                        <Route path='/Task-Manager/login' component={LoginForm} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
