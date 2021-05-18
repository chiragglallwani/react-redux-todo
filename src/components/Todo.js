import React from 'react'
import {  Col, ListGroup, Row } from 'react-bootstrap'
import DeleteIcon from '@material-ui/icons/Delete';


class Todo extends React.Component {
    
    render(){
        return (
           <ListGroup.Item className="w-50 mx-auto my-2" variant="success" style={{}}>
               <Row>
                    <Col xs={1}>
                    <DeleteIcon onClick={() => console.log(this.props.todo.id)}/>
                    </Col><Col md={10}>
                    <h5 className="text-center">{this.props.todo.todo}</h5>
                    </Col>
               </Row>
                <Row>
                <p className="mx-auto">Deadline by {this.props.todo.date}</p>
                </Row>
           </ListGroup.Item>
        )
    }
}

export default Todo
