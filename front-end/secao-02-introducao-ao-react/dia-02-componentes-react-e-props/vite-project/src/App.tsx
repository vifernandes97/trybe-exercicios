import Header from './components/header';
import Footer from './components/footer';
import Book from './components/books';

const booksList = [
  {
    title: 'The Godfather',
    pages: 433,
    isRead: true,
    isFavorite: false,
  },
  {
    title: 'The Little Prince',
    pages: 92,
    isRead: true,
    isFavorite: true,
  },
  {
    title: 'Clean Code',
    pages: 425,
    isRead: true,
    isFavorite: false,
  },
  {
    title: 'Dom Casmurro',
    pages: 192,
    isRead: false,
    isFavorite: false,
  },
  {
    title: 'Vidas Secas',
    pages: 176,
    isRead: false,
    isFavorite: false,
  },
];

export default function App() {
  return (
    <div>
      <Header />
      <p>Meus livros:</p>
      <ul>
        {booksList.map((book) => (
          <Book
          key={ book.title }
          currentBook={ book }
          />
        ))}
      </ul>
      <Footer />
    </div>
  );
}
