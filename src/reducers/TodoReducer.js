export default (state = [], action) => {
    switch (action.type) {
        case 'LIST_TODO':
            return action.payload;
        default:
            return state;
    }
}