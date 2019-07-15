import React, { Component } from 'react'
import firebase from 'firebase/app'
import 'firebase/firestore'

class TaskSummary extends Component {

    //State used to display dependencies.
    state = {
        child: 0,
        doneChild: 0,
        completeChild: 0,
    }

    //Gets the dependencies by querying the firestore database and sets them to the state.
    setDependencies = () => {
        const { tasks } = this.props;
        const collectionRef = firebase.firestore().collection('tasks');
        var childCounter = 0;
        var doneChildCounter = 0;
        var completeChildCounter = 0;
        var taskId = tasks.tid;
        var stringTaskId = taskId.toString();
        var self = this;
        collectionRef.where("parentid", "==", stringTaskId)
            .get()
            .then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    //console.log(doc.id, " => ", doc.data());
                    childCounter++;
                    if (doc.data().status === 1) {
                        doneChildCounter++;
                        //console.log('d',doneChildCounter);
                    } else if (doc.data().status === 2) {
                        completeChildCounter++;
                        //console.log('c',completeChildCounter);
                    }
                    self.setState({
                        child: childCounter,
                        doneChild: doneChildCounter,
                        completeChild: completeChildCounter

                    })
                });
            })
            .catch(function (error) {
                console.log("Error getting documents: ", error);
            })

    }

    //Sets dependencies on page being loaded.
    componentDidMount = () => {
        this.setDependencies();

    }

    //Allow the user to change the status of a task, and sets done to complete if there are no child tasks.
    handleChange = (e) => {
        const { tasks } = this.props;
        const taskRef = firebase.firestore().collection('tasks').doc(tasks.id);
        var taskStatus;
        var childCounter = 0;
        const collectionRef = firebase.firestore().collection('tasks');
        var taskId = tasks.tid;
        var stringTaskId = taskId.toString();
        collectionRef.where("parentid", "==", stringTaskId)
            .get()
            .then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    //console.log(doc.id, " => ", doc.data());
                    childCounter++;
                });
            })
            .catch(function (error) {
                console.log("Error getting documents: ", error);
            })

        taskRef.get().then(function (doc) {
            if (doc.exists) {
                taskStatus = doc.data().status;
                console.log("Document data:", doc.data().status);

                if (taskStatus) {
                    taskStatus = 0;
                } else {
                    taskStatus = 1;
                    if (childCounter === 0) {
                        taskStatus = 2;
                    }
                }
                taskRef.update({ status: taskStatus });

            } else {
                console.log("No such document!");
            }
        }).catch(function (error) {
            console.log("Error getting document:", error);
        });

    }


    render() {
        //Basic conditionals for displaying the task details.
        const { tasks } = this.props;
        const statusChoicePD = tasks.status ? <strong style={{ color: 'blue' }}>Done</strong> : <strong style={{ color: 'red' }}>In Progress</strong>;
        const statusChoiceComplete = tasks.status === 2 ? <strong style={{ color: 'green' }}>Complete</strong> : statusChoicePD;
        const hasParentId = tasks.parentid ? <strong>Parent ID:{tasks.parentid}</strong> : <div></div>
        const hasChild = this.state.child ?
            <div>
                <p>Total Dependencies:{this.state.child}</p>
                <p>Dependencies Done:{this.state.doneChild}</p>
                <p>Dependencies Complete:{this.state.completeChild}</p>
            </div>
            :
            <div></div>
        return (
            <div className="card task-summary">
                <div className="card-content">
                    <span className="card-title">ID:{tasks.tid}</span>
                    <h5>{tasks.name}</h5>
                    <p>Description: {tasks.description}</p>
                    {statusChoiceComplete}
                    <div className="switch">
                        <label>
                            In Progress
                                <input type="checkbox" id="status" checked={tasks.status} onChange={this.handleChange} />
                            <span className="lever"></span>
                            Done
                        </label>
                    </div>
                    {hasParentId}
                    {hasChild}
                </div>
            </div>
        )
    }
}

export default TaskSummary
