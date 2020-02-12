import { combineReducers } from 'redux';
import TableReducer from './TableReducer';
import { reducer as reduxForm } from 'redux-form';

const rootReducer = combineReducers({
    tables: TableReducer,
    form: reduxForm
})

export default rootReducer