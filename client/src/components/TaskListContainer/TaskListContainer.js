import React from 'react';
//Styles Import
import '../../App.css';
import './TaskList.css';
import Col from 'react-bootstrap/Col';
//Component Import
import TaskTable from '../TaskTable/TaskTable';
import MoreMenu from './MoreMenu.js';
import CreateTask from './CreateTask.js';

export default function TaskListContainer({taskLists, handleAddTask, handleDeleteTaskListItem, handleDeleteTaskList}) {
    
    return(
        taskLists.map(taskList => (
            <Col className="taskListContainer" key={taskList._id}>
                <div className="topTaskContainer">
                    <div className="taskListHeader">
                        <h2>{taskList.listName}</h2>
                        <MoreMenu taskListId={taskList._id} handleDeleteTaskList={handleDeleteTaskList}/>
                    </div>
                    <hr />
                    <TaskTable listItems={taskList.listItems} taskListId={taskList._id} handleDeleteTaskListItem={handleDeleteTaskListItem}/>
                </div>
                <div className="btnDiv">
                    <CreateTask handleAddTask={handleAddTask} taskListId={taskList._id} />
                </div>
            </Col>
        ))
    )
}