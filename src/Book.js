const Book = props => {
  const { img, title, author, number, link } = props;
  return (
    <article className='book'>
      <a href={link}>
        <img src={img} alt={title} />
      </a>
      <a href={link}>
        <h2>{title}</h2>
      </a>
      <h4>{author} </h4>
      <span className='number'>{`# ${number + 1}`}</span>
    </article>
  );
};

export default Book;
