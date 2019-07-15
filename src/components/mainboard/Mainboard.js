import React, { Component } from 'react'
import TaskList from '../tasks/TaskList'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
 
//Sets up the page that renders all the tasks.
class Mainboard extends Component {
    render() {

        const {tasks} = this.props;

        return (
                <div className="dashboard container">
                    <div className="row">
                        <div className="col s12 m6">
                            <TaskList tasks={tasks}/>
                        </div>
                    </div>
                </div>
        )
    }
}

//Passes firestore database data into TaskList and TaskSummary for computation to be done and displayed.
const mapStateToProps = (state) => {
    //console.log(state)
    return {
        tasks: state.firestore.ordered.tasks
    }
}

//Establishing connection with the firestore database.
export default compose(
    connect(mapStateToProps),
    firestoreConnect([{
        collection:'tasks'
    }])
)(Mainboard)
