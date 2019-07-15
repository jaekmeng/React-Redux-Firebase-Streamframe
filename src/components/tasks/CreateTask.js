import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createTask } from '../../store/actions/taskActions'
import firebase from 'firebase/app'
import 'firebase/database'

//Page that allows the user to create a new task.
class CreateTask extends Component {

    //Holds state of the created task to be sent to the firestore database.
    state = {
        tid: 0,
        name: '',
        description: '',
        parentid: 0,
        status: 0
    }

    //Generates a custom task ID for each task, saved in a firestore realtime database.
    componentDidMount() {
        const firebaseRef = firebase.database().ref().child('task-number').child('currentID');
        firebaseRef.on('value', snap => {
            this.setState({
                tid: snap.val()
            });
        });  
    }

    //Saves the data the user enters as state.
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    //Sends the data to the redux reducer to be processed and pushed to the firestore database.
    handleSubmit = (e) => {
        e.preventDefault();
        var currentID = this.state.tid;
        currentID++;
        firebase.database().ref().child('task-number').update({currentID});
        this.props.createTask(this.state);
        this.props.history.push('./');

    }

    render() {

        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5>Create New Task</h5>
                    <div className="input-field">
                        <label htmlFor="name">Task Name</label>
                        <input type="text" id="name" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="description">Task Description</label>
                        <input type="text" id="description" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <label htmlFor="parentid">Parent Task ID (Optional)</label>
                        <input type="number" step="1" id="parentid" onChange={this.handleChange} />
                    </div>
                    <div className="input-field">
                        <button className="btn blue lighten-1">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

//Dispatches the action to the reducer.
const mapDispatchToProps = (dispatch) => {
    return {
        createTask: (task) => dispatch(createTask(task))
    }
}

export default connect(null, mapDispatchToProps)(CreateTask)
