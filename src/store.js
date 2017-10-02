import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import { todoReducer } from './reducers';

export default function configureStore (initialState) {
    return createStore(todoReducer, initialState, devToolsEnhancer());
}