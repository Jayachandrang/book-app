import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from '../components/Header/Header';
import AddBook from '../components/Book/AddBook/AddBook';
import BooksList from '../components/Book/BooksList/BooksList';
import useLocalStorage from '../hooks/useLocalStorage';
import EditBook from '../components/Book/EditBook';
import BooksContext from '../context/BooksContext';
import '../components/Book/books.scss';

const AppRouter = () => {
  const [books, setBooks] = useLocalStorage('books', []);

  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="main-content">
          <BooksContext.Provider value={{ books, setBooks }}>
            <Switch>
              <Route component={BooksList} path="/" exact={true} />
              <Route component={AddBook} path="/add" />
              <Route component={EditBook} path="/edit/:id" />
              <Route component={() => <Redirect to="/" />} />
            </Switch>
          </BooksContext.Provider>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default AppRouter;
