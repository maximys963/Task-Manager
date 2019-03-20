import React, { Component } from 'react';
import { Button, Form, Input, TextArea } from 'semantic-ui-react';
import { connect } from 'react-redux';
import * as form_actions from '../../action_creators/task-form-ac';
import idGenerator from 'react-id-generator';
import './task-form.css';

class TaskForm extends Component{

addTask = (params) => {
    const {addTask, changeName, changeEmail, changeTask } = this.props
    const currentId = idGenerator();
    const task = {...params, visible: true, changed: false, id: currentId, status: 0}
    addTask(task);
    changeName('');
    changeEmail('');
    changeTask('');
}
 render(){ 
    const {changeName, 
        changeEmail, 
        changeTask, 
        name,
        email,
        task
    } = this.props;

    return(
        <Form className='form-container'>
            <Form.Group widths='equal'>
                <Form.Field 
                    value={name}
                    control={Input}
                    label='User Name' 
                    placeholder='User Name'
                    onChange={(e) => changeName(e.target.value)}/>

                <Form.Field 
                    value={email}
                    control={Input} 
                    label='Email' 
                    placeholder='Email'
                    onChange={(e) => changeEmail(e.target.value)}/>

            </Form.Group>
            <Form.Field 
                value={task}
                control={TextArea} 
                label='Task' 
                placeholder='Write your task here ...' 
                onChange={(e) => changeTask(e.target.value)}/>
      
            <Form.Field 
                control={Button}
                onClick={() => this.addTask({username: name, email, text: task})}
            >Create</Form.Field>
        </Form>
    )
}
}

const mapStateToProps = (state) => ({
    name: state.formReducer.name,
    email: state.formReducer.email,
    task: state.formReducer.task
});

export default connect(mapStateToProps, form_actions)(TaskForm);

// onClick={() => sendTask({name, email, task})}