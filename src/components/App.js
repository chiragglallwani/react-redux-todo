import React from 'react'
import { Container } from 'react-bootstrap'
import InputForm from './InputForm'


const App = () => {

    const handleSubmit = (inputValue) => {
        console.log(inputValue);
    }
    return (
        <Container fluid>
            <h1 className="text-center" style={{marginTop: "5vh"}}>Todo App</h1>
            <InputForm handleTodoValues={handleSubmit}/>
            {/* List of Todos*/}
        </Container>
    )
}

export default App
