import database from '../firebase/firebase'

export const addTodo = (inputValue) => async dispatch => {
    await database.collection('Todo').add({
        todo: inputValue.todo_input,
        date: inputValue.todo_date
    });
    dispatch ({
        type: "ADD_TODO",
        payload: inputValue

    });
}

export const listTodo = () => async dispatch=> {
    const data = [];
    let todoRef = database.collection('Todo');
    let allTodos =  await todoRef.orderBy('todo').get();
    for(const doc of allTodos.docs){
        data.push(doc.data())
    }
     dispatch ({
         type: 'LIST_TODO',
         payload: data
     })
}

export const deleteTodo = id => {
    //delete todo
    return {type: 'DELETE_TODO'}
}