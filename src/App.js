import "./App.css";
import "./styles.css"
import ToggleBookshelf from "./toggleBookshelf";
import InputForm from "./formContainer";

function App() {
  return (
    <div>
      <header className="container mt-3">
        <div className="float-end">
          <ToggleBookshelf />
        </div>
        <div className="d-flex">
          <img src={require("./book_icon_large.png")} id="bookIcon" alt="bookIcon" />
          <a href="" className="ms-2 text-white text-decoration-none">
            <h1 className="h1 mb-0">Bookster</h1>
            <p className="h5 ms-1 mt-0">Your online bookshelf</p>
          </a>
        </div>
      </header>
      <InputForm />
    </div>
  );
}

export default App;
