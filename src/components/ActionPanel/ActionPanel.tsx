import React from 'react';
import { ActionButton, Container, Input } from "../style";

const ActionPanel: React.FC = () => {
  return (
    <Container>
      <div>
        <Input.Container>
          <Input.Text>Search phrase:</Input.Text>
          <Input.Field type="text"/>
          <ActionButton>Search</ActionButton>
        </Input.Container>
        <Input.Container>
          <Input.Text>Replace with:</Input.Text>
          <Input.Field type="text"/>
          <ActionButton>Replace</ActionButton>
          <ActionButton>Replace All</ActionButton>
        </Input.Container>
      </div>
      <div>


      </div>
    </Container>
  );
};

export default ActionPanel;
