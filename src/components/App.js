import React from 'react'
import { Container } from 'react-bootstrap'
import InputForm from './InputForm'

const App = () => {
    return (
        <Container fluid>
            <h1 className="text-center" style={{marginTop: "5vh"}}>Todo App</h1>
            <InputForm />
            {/* List of Todos*/}
        </Container>
    )
}

export default App
