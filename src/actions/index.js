import database from '../firebase/firebase'
export const addTodo = (inputValue) => async dispatch => {
     await database.collection('Todo').add({
        todo: inputValue.todo_input,
        date: inputValue.todo_date
        });
        sendTodo(dispatch);
}

export const listTodo = () => async dispatch=> {
    //console.log("Hi")
    sendTodo(dispatch);
}

export const deleteTodo = id => async dispatch => {
    //delete todo
    await database.collection('Todo').doc(id).delete();
    sendTodo(dispatch);
}

const sendTodo = async (dispatch) => {
    let data = [];
    let todoRef = database.collection('Todo');
    let allTodos =  await todoRef.orderBy('todo').get();
    for(const doc of allTodos.docs){
        data.push({
            id: doc.id,
            todo: doc.data()
        }) 
    }
    //console.log(data);
     dispatch ({
         type: 'LIST_TODO',
         payload: data
     });
}