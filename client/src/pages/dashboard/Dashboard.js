import React from 'react';
//Styles Import
import '../../App.css';
import './Dashboard.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//Icon Import
import { IconContext } from "react-icons";
import { GiHamburgerMenu} from 'react-icons/gi';
import { FiPlus } from 'react-icons/fi';

import TaskList from '../../components/TaskList/TaskList.js'

export default function Dashboard() {

    return(
        <div className="parentWrapper">
            <Container className="menuWrapper">
                <Row >
                    <IconContext.Provider value={{ className: "icon" }}>
                        <Col>
                            <button className="hamburgerMenu"><GiHamburgerMenu/></button>
                        </Col>
                    </IconContext.Provider>
                </Row>
            </Container>
            
            <Container className="dashboardWrapper">

                <Row className="dashboardHeader">
                        <Col><h1>Hi, John.</h1></Col>
                </Row>

                <Row className ="taskListWrapper">
                    <TaskList />
                    <TaskList />
                    <TaskList />

                    <IconContext.Provider value={{ className: "plusIcon" }}>
                        <Col className="addListCol">
                            <button><FiPlus/></button>
                        </Col>
                    </IconContext.Provider>
                </Row>
                
            </Container>
        </div>
    )
}