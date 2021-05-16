export const addTodo = (inputValues) => {
    console.log(inputValues);
    return {
        type: "ADD_TODO",
        payload: inputValues
    };
}

export const listTodo = () => async dispatch => {
    //const response = await
    return {
        type: 'LIST_TODO',
        payload: response.data
    }
}