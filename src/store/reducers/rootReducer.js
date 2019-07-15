import taskReducer from './taskReducer'
import {combineReducers} from 'redux'
import {firestoreReducer} from 'redux-firestore'

//Stores all the different type of reducers(tasks, firestore) as one main one for clarity.
const rootReducer = combineReducers({
    tasks: taskReducer,
    firestore: firestoreReducer
})

export default rootReducer