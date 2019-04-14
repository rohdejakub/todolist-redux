import React from "react";
import { Table, Button } from "semantic-ui-react";

const TodoItem = ({ children, isCompleted, onDelete, onComplete, id }) => {
  return (
    <Table.Row active={isCompleted === 'completed'}>
      <Table.Cell >{children}</Table.Cell>
      <Table.Cell>
        {isCompleted === "not completed" ? (
          <Button primary onClick={onComplete}>
            DONE
          </Button>
        ) : (
          <Button negative onClick={onDelete}>
            Delete
          </Button>
        )}
      </Table.Cell>
    </Table.Row>
  );
};

export default TodoItem;
