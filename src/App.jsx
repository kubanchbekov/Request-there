import React, { useEffect, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";

const App = () => {
  const [tasks, setTasks] = useState([]);

  async function postRequest(data) {
    try {
      await fetch("https://9750bfdaeb1755e3.mokky.dev/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      toast.success("Успешно добавлено!");
      getRequest();
    } catch (error) {
      toast.error("Ошибка при добавлении!");
      console.error(error);
    }
  }

  async function getRequest() {
    try {
      const response = await fetch("https://9750bfdaeb1755e3.mokky.dev/todos");
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
    }
  }

  async function deleteRequest(id) {
    try {
      await fetch(`https://9750bfdaeb1755e3.mokky.dev/todos/${id}`, {
        method: "DELETE",
      });
      getRequest();
      toast.info("Задача удалена!");
    } catch (error) {
      toast.error("Ошибка при удалении!");
      console.error(error);
    }
  }

  useEffect(() => {
    getRequest();
  }, []);

  return (
    <Container>
      <TodoForm postRequest={postRequest} />
      <TodoList tasks={tasks} deleteRequest={deleteRequest} />
      <ToastContainer />
    </Container>
  );
};

export default App;

const Container = styled.div`
  border: 2px solid #007bff;
  border-radius: 8px;
  width: 90%;
  max-width: 800px;
  min-height: 500px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f8f9fa;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
