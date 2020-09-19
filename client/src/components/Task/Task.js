import React from 'react';
//Styles Import
import '../../App.css';
import './Task.css';
import Row from 'react-bootstrap/Row';
//Icon Import
import { IconContext } from "react-icons";

import CheckboxLabels from './TaskItemCheckbox';
import EditButton from './EditButton.js'



export default function Task() {
    return(
        <Row className="taskRow">
            <div className="task">
                <div className="taskLabelCheckbox"><CheckboxLabels /></div>
                <div className="edit"><EditButton /></div>
                <div className="date"><p >18/09</p></div>         
            </div>
        </Row>
    )
}