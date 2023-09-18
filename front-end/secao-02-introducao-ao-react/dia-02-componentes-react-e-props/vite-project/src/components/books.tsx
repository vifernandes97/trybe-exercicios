type BookProps = {
  currentBook: {
    title: string,
    pages: number,
    isRead: boolean,
    isFavorite: boolean
  }
};

function Book({ currentBook }: BookProps) {
  return (
    <li>
      <span>{currentBook.isRead ? '✅' : '⏳'}</span>
      {' '}
      <span>
        {`${currentBook.title} (${currentBook.pages} páginas)`}
      </span>
      {' '}
      {currentBook.isFavorite && <span>🤩</span>}
    </li>
  );
}

export default Book;
