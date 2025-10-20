import { useState } from "react";
import BookCard from "./BookCard";
import BookModal from "./BookModal";
import "./index.css";

function App() {
    const [books, setBooks] = useState([]);
    const [showModal, setShowModal] = useState(false);

    const handleBookSelect = (isbn13) => {
        setBooks(
            books.map((book) => ({
                ...book,
                selected: book.isbn13 === isbn13 ? !book.selected : false,
            }))
        );
    };

    const handleBookSubmit = (formData) => {
        const newBook = {
            ...formData,
            isbn13: Date.now().toString(),
            price: "$0.00",
            image: "https://media1.tenor.com/m/DkActybid-oAAAAd/my-apologies-cheese.gif",
            url: "#",
            selected: false,
        };
        setBooks([...books, newBook]);
    };

    const handleDeleteBook = () => {
        setBooks(books.filter((book) => !book.selected));
    };

    const handleEditBook = () => {
        console.log("nothing lol");
    };

    return (
        <>
            <div className="app">
                <div className="header">
                    <h1>Book Shop Catalog</h1>
                </div>
                <div className="content">
                    <div className="btn-container">
                        <div className="btn">
                            <button onClick={() => setShowModal(true)}>
                                Add Book
                            </button>
                        </div>
                        <div className="btn-actions">
                            <div className="btn-edit">
                                <button onClick={handleEditBook}>
                                    Edit Book
                                </button>
                            </div>
                            <div className="btn-delete">
                                <button onClick={handleDeleteBook}>
                                    Delete Book
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="content-books">
                        {books.map((book) => (
                            <BookCard
                                key={book.isbn13}
                                book={book}
                                isSelected={book.selected}
                                onSelect={() => handleBookSelect(book.isbn13)}
                            />
                        ))}
                    </div>
                </div>

                <BookModal
                    isOpen={showModal}
                    onClose={() => setShowModal(false)}
                    onSubmit={handleBookSubmit}
                />

                <div className="footer">
                    <div>Leana Le © 2025 Book Shop</div>
                </div>
            </div>
        </>
    );
}

export default App;
