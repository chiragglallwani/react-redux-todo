import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { connect } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form';
import {addTodo } from '../actions'



class InputForm extends React.Component {


    renderError = ({error, touched}) => {
        if(error && touched){
            return <p  style={{color: 'red'}}>{error}</p>
        }
    }

    todoInput = ({input, meta}) => {
         return (
             <Form.Group>
             <Form.Control  {...input} />
             {this.renderError(meta)}
             </Form.Group>
         );
     };

     todoDate = ({input, meta}) => {
        return (    
            <Form.Group>
                <Form.Control type="date" {...input} />
                {this.renderError(meta)}
            </Form.Group>
        );
    };

    handleSubmit = (inputValues, dispatch) => {
        this.props.addTodo(inputValues);
        dispatch(reset('todo-input'));
    }
    render() {
        return (
            <Container fluid  style={{marginTop: "12vh", marginBottom: "2.5%"}}>
                <Form onSubmit={this.props.handleSubmit(this.handleSubmit)}> {/* just need to pass values to addtodo actions */}
                    <Row lg="auto" style={{marginLeft: "10%"}} >
                        <Col  md={6}>
                        <Field name="todo_input" component={this.todoInput} />
                        </Col><Col md="auto" >
                        <Field name="todo_date" component={this.todoDate} />
                        </Col><Col xs="auto" >
                            <Button type="submit" variant="success">Add Todo</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        )
    }
}

const validate = (inputValue) => {
    const errors = {};
    //error.something, here something must match the value of name of a Field component
    if(!inputValue.todo_input){
        //only ran if title is empty
        errors.todo_input  = "Please enter the todo";
    }
    if(!inputValue.todo_date){
        errors.todo_date ="Please enter the deadline"
    }

    return errors;
   
}



export default connect(null, {addTodo})(reduxForm({
    form: 'todo-input',
    validate
})(InputForm));
