import React from 'react'
import {  Col, ListGroup, Row } from 'react-bootstrap'
import DeleteIcon from '@material-ui/icons/Delete';
import {deleteTodo} from '../actions'
import {listTodo} from '../actions'
import {connect} from 'react-redux'


class Todo extends React.Component {

    componentDidMount(){
        this.props.listTodo();
    }
    
    render(){
       
        if(this.props.list.length === 0){
            return (
                <ListGroup.Item className="w-50 mx-auto my-2" variant="success" style={{}}>
               <Row>
                    <h5 className="mx-auto text-center">Enter the todo item</h5>
               </Row>
                <Row>
                <p className="mx-auto">Deadline date will be mentioned here</p>
                </Row>
           </ListGroup.Item>
            )
        }
        if(this.props.list)
             //<div>Hello</div>
             return this.props.list.map(todo => {
                //console.log(todo);
                return (
                    <ListGroup key={todo.id}>
                        <ListGroup.Item className="w-50 mx-auto my-2" variant="success">
                            <Row>
                                    <Col xs={1}>
                                    <DeleteIcon onClick={() => {this.props.deleteTodo(todo.id); console.log("Clicked")}}/>
                                    </Col><Col md={10}>
                                    <h5 className="text-center">{todo.todo.todo}</h5>
                                    </Col>
                            </Row>
                                <Row>
                                <p className="mx-auto">Deadline by {todo.todo.date}</p>
                                </Row>
                        </ListGroup.Item>
                    </ListGroup>
                )
            })
    }
}

const mapStateToProps = (state) => {
     //console.log(state.todoList);
     return  {
        list: state.todoList
    };
}

export default connect(mapStateToProps, {deleteTodo, listTodo})(Todo)
