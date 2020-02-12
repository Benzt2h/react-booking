import { combineReducers } from 'redux';
import TableReducer from './TableReducer';

const rootReducer = combineReducers({
    tables: TableReducer
})

export default rootReducer