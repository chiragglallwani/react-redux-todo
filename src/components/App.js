import React from 'react'
import { Container} from 'react-bootstrap'
import InputForm from './InputForm'
import Todo from './Todo'
  

class App extends React.Component {

    render() {
        return (
            <Container fluid>
                <h1 className="text-center" style={{marginTop: "5vh"}}>Todo App</h1>
                <InputForm/>
                <Todo />
            </Container>
        )
    }
}

export default App
