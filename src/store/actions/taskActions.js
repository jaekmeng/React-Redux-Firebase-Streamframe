
//Redux action to the reducer that is dispatched from create task to add the new task into the firestore database.
export const createTask = (task) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        const firestore = getFirestore();
        firestore.collection('tasks').add({
            ...task,
        }).then(() => {
            dispatch({ type: 'CREATE_TASK', task })
        }).catch((err)=>{
            dispatch({ type: 'CREATE_TASK_ERR', err })
        })

    }
}; 