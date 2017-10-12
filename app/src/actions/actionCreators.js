let nextTodoId = 0
export const addToCart = (product) => {
    return {
        type: "ADD_TO_CART",
        product
    }
};
export const removeFromCart = (product) => {
        return {
            type: "REMOVE_FROM_CART",
            product
        }
    }
    /*spromera parte */
export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    }
};
export const setVisibilityFilter = (filter) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
};
export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
};
