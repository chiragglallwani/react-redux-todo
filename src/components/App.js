import React from 'react'
import { Container, ListGroup} from 'react-bootstrap'
import { connect } from 'react-redux'
import InputForm from './InputForm'
import Todo from './Todo'
import {listTodo} from '../actions'  
import { List } from '@material-ui/core'


class App extends React.Component {

    componentDidMount(){
        this.props.listTodo();
    }

    renderList(){
        return this.props.list.map((todo,id) => {
            return (
                <ListGroup key={id}>
                    <Todo todo={todo} index={id}/>
                </ListGroup>
            )
        })
    };

    render() {
        if(!this.props.list){
            return <div>Loading...</div>
        }
        return (
            <Container fluid>
                <h1 className="text-center" style={{marginTop: "5vh"}}>Todo App</h1>
                <InputForm onSubmit={this.props.listTodo()}/>
                {this.renderList()}
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    //console.log(state.todoList);
    return  {
        list: state.todoList
    };
}
export default connect(mapStateToProps, {listTodo})(App)
