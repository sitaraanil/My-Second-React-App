import React, { Component } from 'react';
import styles from "./Todo.module.scss";
import { Button, ButtonGroup } from "reactstrap";

// const Todo = props =>
//  <div className="Todo"> {props.description}</div>

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            done: props.done,
            critical: props.critical
        };
        this.markAsDone = this.markAsDone.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.markCritical = this.markCritical.bind(this);
    }
    markAsDone() {
        this.setState({ done: true });
    }
    removeTodo() {
        this.props.removeTodo(this.props.id);
    }
    markCritical() {
        this.setState({ critical: true });
    }
    cssClasses() {
        let classes = [];
        if (this.state.critical) {
            classes = [styles.critical]
        } else {
            classes = [styles.todo];
        }
        if (this.state.done) {
            classes = [...classes, styles.done];
        }
        return classes.join(' ');
    }
    render() {
        return (
            <div className={this.cssClasses()}>
                {this.props.description}
                <br />
                <hr className={styles.hr} />
                <ButtonGroup>
                    <Button className="MarkDone" onClick={this.markAsDone} color="success">Mark as done</Button>
                    <Button className="RemoveTodo" onClick={this.removeTodo} color="warning">Remove Me</Button>
                    <Button className="MarkCritical" onClick={this.markCritical} color="danger">Mark as critical</Button>
                </ButtonGroup>
            </div>

        );
    }


}

export default Todo;
