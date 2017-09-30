export default {

    addTodoTask(task) {
        return { type: 'ADD_TODO_TASK', task};
    },

    deleteTodoTask(id) {
        return{ type: 'DELETE_TODO_TASK', id}
    },

    toggleTodoStatus(id) {
        return { type: 'TOGGLE_TODO_STATUS', id}
    }

}