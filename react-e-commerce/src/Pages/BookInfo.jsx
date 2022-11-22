import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useParams } from "react-router-dom";
import Rating from "../Components/ui/Rating";
import Price from "../Components/ui/Price";
import Book from "../Components/ui/Book";
import Cart from "./Cart";

function BookInfo({ books, addToCart, cart }) {
  const { id } = useParams();
  const book = books.find((book) => +book.id === +id);
  function bookExists() {
    return cart.find((book) => +book.id === +id);
  }

  return (
    <div id="books__body">
      <main id="books__main">
        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <Link to="/books" className="book__link">
                <FontAwesomeIcon icon="arrow-left" />
              </Link>
              <Link to="/books" className="book__link">
                <h2 className="book__selected--title--top">Books</h2>
              </Link>
            </div>
            <div className="book__selected">
              <figure className="book__selected--figure">
                <img className="book__selected--img" src={book.url} alt="" />
              </figure>
              <div className="book__selected--description">
                <h2 className="book__selected--title">{book.title}</h2>
                <Rating rating={book.rating} />
                <Price
                  originalPrice={book.originalPrice}
                  salePrice={book.salePrice}
                />
                <div className="book__summary">
                  <h3 className="book__summary--title">Summary</h3>
                  <p className="book__summary--para">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Eius harum debitis totam nam voluptatem voluptatum dicta
                    facilis. Rerum repellendus voluptatum sit nobis eos
                    doloremque fugit cum. Officia et possimus ex?
                  </p>
                  <p className="book__summary--para">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Eius harum debitis totam nam voluptatem voluptatum dicta
                    facilis. Rerum repellendus voluptatum sit nobis eos
                    doloremque fugit cum. Officia et possimus ex?
                  </p>
                </div>
                {bookExists() ? (
                  <Link to="/Cart">
                    <button className="btn">Proceed To Checkout</button>
                  </Link>
                ) : (
                  <button className="btn" onClick={() => addToCart(book)}>
                    Add To Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="books__container">
          <div className="row">
            <div className="book__selected--top">
              <h2 className="book__selected--title--top">Recommended Books</h2>
            </div>
            <div className="books">
              {books
                .filter((book) => book.rating === 5 && +book.id !== +id)
                .slice(0, 4)
                .map((book) => (
                  <Book book={book} key={book.id} />
                ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default BookInfo;
