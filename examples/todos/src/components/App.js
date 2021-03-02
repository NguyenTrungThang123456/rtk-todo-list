import React, { useEffect } from 'react';
import { Layout, Row, Col } from 'antd';
import Footer from 'features/filters/Footer';
import AddTodo from 'features/todos/AddTodo';
import VisibleTodoList from 'features/todos/VisibleTodoList';
import { fetchTodos } from 'features/todos/todosSlice';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';

const App = ({ fetchTodos }) => {
  useEffect(() => {
    fetchTodos();
  }, []);
  return (
    <Layout>
      <Row
        style={{
          justifyContent: 'center',
        }}
      >
        <Col span={12}>
          <AddTodo />
          <VisibleTodoList />
          <Footer />
        </Col>
      </Row>
    </Layout>
  );
};

const mapDispatch = {
  fetchTodos,
};

export default connect(null, mapDispatch)(App);
