import React, { Component } from "react";
import {Form, Button} from 'semantic-ui-react'
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>TODO list wit redux</h1>
        <Form>
          <Form.Field>
            <label to="task_text">Task</label>
            <input placeholder="First Name" name='task_text' />
          </Form.Field>
          <Button type="submit">Add task</Button>
        </Form>
      </div>
    );
  }
}

export default App;
