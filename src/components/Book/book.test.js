import { render, waitFor, screen } from '@testing-library/react'
import Book from './Book'
import BookForm from './BookForm'
/* It loads the bookslist */
test('loads and displays book', async () => {
    render(<Book />)

    await waitFor(() => screen.getByRole('presentation'))

    expect(screen.getByRole('presentation'));

})
/* This is used to check adding new books */
test('add book', async () => {
    render(<BookForm />)

    await waitFor(() => screen.getByRole('main'))

    expect(screen.getByRole('main'));

})