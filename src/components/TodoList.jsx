import React from "react";
import styled from "styled-components";

const TodoList = ({ tasks, deleteRequest }) => {
  const deleteHandler = (id) => {
    deleteRequest(id);
  };

  return (
    <ListWrapper>
      {tasks.map(({ id, inputValue }) => (
        <ListItem key={id}>
          <Content>
            <TaskText>{inputValue}</TaskText>
            <DeleteButton onClick={() => deleteHandler(id)}>Remove</DeleteButton>
          </Content>
        </ListItem>
      ))}
    </ListWrapper>
  );
};

export default TodoList;

const ListWrapper = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  max-width: 600px;
  margin: 20px auto 0;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ListItem = styled.li`
  background: #ffffff;
  padding: 15px;
  border-bottom: 1px solid #e0e0e0;
  border-radius: 8px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:last-child {
    border-bottom: none;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const TaskText = styled.span`
  font-size: 16px;
  color: #333;
  flex: 1;
`;

const DeleteButton = styled.button`
  background-color: #dc3545;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #c82333;
  }

  &:active {
    background-color: #bd2130;
  }
`;
