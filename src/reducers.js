const initialState = {
    todoItems: [
        { id: 0, title: 'Pay phone bill', done: true },
        { id: 1, title: 'Meeting with Jack porter', done: false },
        { id: 2, title: 'Get Onboarding designs', done: true },
        { id: 3, title: 'Read Invision article', done: false },
        { id: 4, title: 'Give KT of Razorthink website', done: false },
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