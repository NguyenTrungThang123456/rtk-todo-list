import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from 'features/todos/todosSlice';
import { Form, Input, Button, Row } from 'antd';
import { useFormik } from 'formik';
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const mapDispatch = { addTodo };

const AddTodo = ({ addTodo }) => {
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      text: '',
    },
    onSubmit: (values) => {
      addTodo(values);
    },
  });
  const [form] = Form.useForm();

  useEffect(() => {
    console.log(formik.values);
  }, [formik.values]);

  return (
    <div>
      <Form form={form} layout="inline">
        <Form.Item {...tailLayout}>
          <Input
            name="text"
            value={formik.values.text}
            style={{
              display: 'inline-block',
            }}
            onChange={formik.handleChange}
          />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            onClick={formik.handleSubmit}
          >
            Add
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default connect(null, mapDispatch)(AddTodo);
