const initialState = {
    todoItems: [
        { id: 0, title: 'Setup project', done: false },
        { id: 1, title: 'Add ', done: false },
        { id: 2, title: 'Three', done: true },
        { id: 3, title: 'Four', done: false },
    ],
};

export function todoReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TODO_TASK':
            return {
                todoItems: [
                    {
                        done: false,
                        id: state.todoItems
                            .reduce((maxId, listItem) => Math.max(listItem.id, maxId), -1) + 1,
                        title: action.task,
                    },
                    ...state.todoItems
                ],
            };

        case 'DELETE_TODO_TASK':
            return { todoItems: state.todoItems.filter((item) => (item.id !== action.id)) };

        case 'TOGGLE_TODO_STATUS':
            return {
                todoItems: state.todoItems.map(item => {
                    if (item.id === action.id)
                        return { ...item, done: !item.done };
                    return item;
                }),
            };

        default:
            return state;
    }
}