import React from 'react';
//Styles Import
import '../../App.css';
import './TaskList.css';
import Col from 'react-bootstrap/Col';
//Icon Import
import { IconContext } from "react-icons";
import { BsArrowUp } from 'react-icons/bs';
import { FiPlus } from 'react-icons/fi';
//Component Import
import Task from '../Task/Task';
import MoreMenu from './MoreMenu.js';
import CreateTask from './CreateTask.js';

export default function TaskList() {
    return(
        <Col className="taskListContainer">
            <IconContext.Provider value={{ className: "icon" }}>

            <div className="taskListFlex">
                <div className="taskListHeader">
                    <h2>List Name</h2>
                    <MoreMenu/>
                </div>
                <hr />
                <div className="taskListHeader">
                    <p className="title1">Task Description</p>
                    <p className="title2">Deadline<button><BsArrowUp/></button></p>           
                </div>
                <hr/>

                <Task />
                <Task />
                <Task />

                <div className="btnDiv">
                    <CreateTask />
                </div>
            </div>

            <div className="formDiv">
                <form>
                    <input type="text" id="quickAdd" placeholder="Quickly add a task"></input>
                    <button><FiPlus/></button>
                </form>
            </div>

            </IconContext.Provider>
        </Col>
    )
}