import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const BookForm = (props) => {
  const [book, setBook] = useState(() => {
    return {
      bookname: props.book ? props.book.bookname : '',
      author: props.book ? props.book.author : '',
      category: props.book ? props.book.category : '',
      edition: props.book ? props.book.edition : '',
      price: props.book ? props.book.price : '',
      date: props.book ? props.book.date : ''
    };
  });

  const [errorMsg, setErrorMsg] = useState('');
  const { bookname, author, category, edition, price } = book;

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const values = [bookname, author, category, edition, price];
    let errorMsg = '';

    const allFieldsFilled = values.every((field) => {
      const value = `${field}`.trim();
      return value !== '' && value !== '0';
    });

    if (allFieldsFilled) {
      const book = {
        id: uuidv4(),
        bookname,
        author,
        category,
        edition,
        price,
        date: new Date()
      };
      props.handleOnSubmit(book);
    } else {
      errorMsg = 'Please fill out all the fields.';
    }
    setErrorMsg(errorMsg);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'price':
        if (value === '' || value.match(/^\d{1,}(\.\d{0,2})?$/)) {
          setBook((prevState) => ({
            ...prevState,
            [name]: value
          }));
        }
        break;
      default:
        setBook((prevState) => ({
          ...prevState,
          [name]: value
        }));
    }
  };

  return (
    <div className="main-form" role="main">
      {errorMsg && <p className="error-message">{errorMsg}</p>}
      <Form onSubmit={handleOnSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Book Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="bookname"
            value={bookname}
            placeholder="Enter book name"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="author">
          <Form.Label>Author Name</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="author"
            value={author}
            placeholder="Enter author name"
            onChange={handleInputChange}
          />
        </Form.Group>
        
        <Form.Group controlId="category">
          <Form.Label>Book Category</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="category"
            value={category}
            placeholder="Enter category name"
            onChange={handleInputChange}
          />
        </Form.Group>
        
        <Form.Group controlId="edition">
          <Form.Label>Edition</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="edition"
            value={edition}
            placeholder="Enter edition"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control
            className="input-control"
            type="text"
            name="price"
            value={price}
            placeholder="Enter book price"
            onChange={handleInputChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="submit-btn">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default BookForm;
