import './App.css';
import ToggleBookshelf from './toggleBookshelf';

function App() {
  return (
    <header className="container mt-3">
      <img src="%PUBLIC_URL%/book_icon_large.png" className="float-start"></img>
      <div className="float-end">
        <ToggleBookshelf />
      </div>
      <h1 className="display-2 mb-0">Bookster</h1>
      <p className="ms-1 h5 mt-0">Your online bookshelf</p>
    </header>
  );
}

export default App;
