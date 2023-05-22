import './App.css';
import ToggleBookshelf from './toggleBookshelf';
import InputForm from './formContainer';

function App() {
  return (
    <header className="container mt-3">
      <div className="float-end">
        <ToggleBookshelf />
      </div>
      <div className='d-flex' >
        <img src={require('./book_icon_large.png')} id='book_icon' />
        <div className='ms-2'>
          <h1 className="h1 mb-0">Bookster</h1>
          <p className="h5 ms-1 mt-0">Your online bookshelf</p>
          </div>
      </div>
      <InputForm />
    </header>
  );
}

export default App;
