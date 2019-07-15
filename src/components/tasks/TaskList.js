import React, { Component } from 'react'
import TaskSummary from './TaskSummary'

class TaskList extends Component {

    //State and computation for the function of the task status filter.
    state = {
        currentView: 0,
    }

    handleChangeAll = () => {
        this.setState({
            currentView: 0
        })

    }
    handleChangeInProg = () => {
        this.setState({
            currentView: 1
        })
    }
    handleChangeDone = () => {
        this.setState({
            currentView: 2
        })
    }
    handleChangeComplete = () => {
        this.setState({
            currentView: 3
        })
    }


    render() {
        const { tasks } = this.props;

        return (
            <div>
                <form action="#">
                    <p>
                        <label>
                            <input className="with-gap" name="group1" type="radio" onChange={this.handleChangeAll} />
                            <span>All</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input className="with-gap" name="group1" type="radio" onChange={this.handleChangeInProg} />
                            <span>In Progress</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input className="with-gap" name="group1" type="radio" onChange={this.handleChangeDone} />
                            <span>Done</span>
                        </label>
                    </p>
                    <p>
                        <label>
                            <input className="with-gap" name="group1" type="radio" onChange={this.handleChangeComplete} />
                            <span>Complete</span>
                        </label>
                    </p>
                </form>
                <div className="task-list section">
                    {tasks && tasks.map(task => {
                        if (this.state.currentView === 1) {
                            if (task.status === 0)
                                return (
                                    <TaskSummary tasks={task} key={task.id} />
                                )
                        } else if (this.state.currentView === 2) {
                            if (task.status === 1)
                                return (
                                    <TaskSummary tasks={task} key={task.id} />
                                )
                        } else if (this.state.currentView === 3) {
                            if (task.status === 2)
                                return (
                                    <TaskSummary tasks={task} key={task.id} />
                                )
                        } else {
                            return (
                                <TaskSummary tasks={task} key={task.id} />
                            )
                        }
                        return (
                            <div key={task.id}></div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default TaskList
