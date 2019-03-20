import React from 'react';
import { Card, Radio } from 'semantic-ui-react';
import { connect } from 'react-redux';
import SearchInput from '../../components/search_input/custom_input';
import ListElement from '../../components/list_element/list_element';
import CustomPagination from '../../components/pagination/pagination';
import * as task_actions from '../../action_creators/task_ac';
import './task-list.css';

const TaskList = (props) => {
    const { tasks,
        adm_permission,
        toggleTask,
        toggleChange,
        currentPage,
        taskChange
    } = props;                                         
    return(
        <div className='tasklist-container'>
            <SearchInput/>
            <Card.Group className='tasklist-group'>
                {tasks
                    .slice(3 * currentPage - 3, 3 * currentPage)
                    .map((elem, index) => (
                        elem.visible === true 
                            ? (<ListElement
                                key={index}
                                username={elem.username}
                                email={elem.email}
                                status={elem.status}
                                id={elem.id}
                                text={elem.text}
                                changed={elem.changed}
                                taskChange={(e) => taskChange({id: elem.id, text: e.target.value})}
                                toggleChange={() => toggleChange(elem.id)}
                                toggleTask={() =>  toggleTask({id: elem.id, status: elem.status})}
                                adm_permission={adm_permission}
                            />)
                            :null
                    )) 
                }
            </Card.Group>
            <CustomPagination amount={tasks.length}/>
        </div>
    );
};

const mapStateToProps = (state) => ({
    tasks: state.mainReducer,
    adm_permission: state.login.admin,
    currentPage: state.pagination.currentPage
});

export default connect(mapStateToProps, task_actions)(TaskList);



// taskChange({id: elem.id, text: e.target.value})