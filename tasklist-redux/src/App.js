import React, { Component } from "react";
import { Form, Button, Table } from "semantic-ui-react";
import { connect } from "react-redux";
import todoActions from "./actions/todoList";
import "./App.css";
import TodoItem from "./TodoItem";

class App extends Component {
  componentDidMount() {
    this.props.fetchTodos()
  }
  
  render() {
    return (
      <div className="App">
        <h1>TODO list wit redux</h1>
        <Form>
          <Form.Field>
            <label to="task_text">Task</label>
            <input
              placeholder="First Name"
              name="task_text"
              onChange={event =>
                this.props.changeInputValue(event.target.value)
              }
              value={this.props.inputValue}
            />
          </Form.Field>
          <Button onClick={this.props.addTodo}>Add task</Button>
        </Form>
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Task</Table.HeaderCell>
              <Table.HeaderCell>Control</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {this.props.todos.map(todo => (
              <TodoItem
                key={todo.id}
                id={todo.id}
                isCompleted={todo.status}
                onDelete={() => this.props.deleteTodo(todo.id)}
                onComplete={() => this.props.changeTodoStatus(todo.id)}
              >
                {todo.text}
              </TodoItem>
            ))}
          </Table.Body>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todoList.todos,
  inputValue: state.todoList.inputValue
});

const mapDispatchToProps = {
  ...todoActions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
