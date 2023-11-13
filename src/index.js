import React from 'react';
import ReactDOM from 'react-dom/client';
import { books } from './books';
import Book from './Book';
import amazon from './images/amazon.png';

import './index.css';

// import { books } from './books';

const BookList = () => {
  const amazons = amazon;
  return (
    <>
      <center>
        <a href='https://www.amazon.com/'>
          <img src={amazons} alt='amazon logo' class='amazon' width='350px' />
        </a>
      </center>

      <div className='wrapper'>
        <section className='booklist'>
          {books.map((book, index) => {
            return <Book {...book} key={book.id} number={index} />;
          })}
        </section>
      </div>
    </>
  );
};

// const Book = props => {
//   const { img, title, author } = props;
//   return (
//     <article className='book'>
//       <img src={img} alt={title} />
//       <h2>{title}</h2>
//       <h4>{author} </h4>
//     </article>
//   );
// };

// const Image = () => <img src='images/book-5.jpg' alt='Unbroken Bonds of Battle' />;
// const Title = () => <h2>Unbroken Bonds of Battle</h2>;
// const Author = () => {
//   const inlineHeadingStyles = {
//     color: '#617d98',
//     fontSize: '0.75rem',
//     marginTop: '0.5rem',
//   };
//   return <h4 style={inlineHeadingStyles}>Johnny Joey Jones</h4>;
// };

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList />);
