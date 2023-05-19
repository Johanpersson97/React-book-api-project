import './App.css';
import ToggleBookshelf from './toggleBookshelf';

function App() {
  return (
    <header className="container mt-3">
      <div className="float-end">
        <ToggleBookshelf />
      </div>
      <div className='d-flex' >
        <img src={require('./book_icon_large.png')} id='book_icon' />
        <div className='ms-2'>
          <h1 className="display-2 mb-0">Bookster</h1>
          <p className="ms-1 h5 mt-0">Your online bookshelf</p>
          </div>
      </div>
    </header>
  );
}

export default App;
