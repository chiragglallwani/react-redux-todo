import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Field, reduxForm } from 'redux-form';

const todoDate = (inputValue) => {
    return (    
            <Form.Control type="date" {...inputValue.input} />
    );
};

const todoInput = (inputValue) => {
 
    return (
        <Form.Control  {...inputValue.input} />
    );
};

const handleSubmit = (e) => {

}


function InputForm(props) {
    
    return (
        <Container fluid  style={{marginTop: "12vh"}}>
            <Form onSubmit={props.handleSubmit(props.handleTodoValues)}>
                <Row lg="auto" style={{marginLeft: "10%"}} >
                    <Col  md={6}>
                    <Field name="todo-input" component={todoInput} />
                    </Col><Col md="auto" >
                    <Field name="todo-date" component={todoDate} />
                    </Col><Col xs="auto" >
                        <Button type="submit" variant="success">Add Todo</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}



export default reduxForm({
    form: 'todo-input'
})(InputForm);
