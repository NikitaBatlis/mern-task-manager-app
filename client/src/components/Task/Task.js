import React from 'react';
//Styles Import
import '../../App.css';
import './Task.css';
import Row from 'react-bootstrap/Row';
//Components Import
import CheckboxLabels from './TaskItemCheckbox';
import EditButton from './EditButton.js'
import Date from './Date.js'



export default function Task() {
    return(
        <Row className="taskRow">
            <div className="task">
                <div className="taskLabelCheckbox"><CheckboxLabels /></div>
                <div className="edit"><EditButton /></div>
                <div className="date"><Date/></div>         
            </div>
        </Row>
    )
}