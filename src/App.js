import "./App.css";
import "./styles.css"
import "./webfontkit/stylesheet.css"
import ToggleBookshelf from "./toggleBookshelf";
import InputForm from "./formContainer";


// Här kör vi vår app och anrapar de olika komponenterna
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
            <h1 className="display-3 mb-0 _bold _ls-5">Bookster</h1>
            <p className="h5 ms-1 mt-0">Your online bookshelf</p>
          </a>
        </div>
      </header>
      <main className="container">
        <InputForm />
      </main>
      <footer className="pt-5 my-5">
        <p className="text-center fs-5">© 2023 Bookster</p>
        <p className="text-center small _book m-0">Gustav Fristedt · Johan Persson · Melinda Ljungdell</p>
        <p className="text-center small _book m-0">Malmö universitet</p>
      </footer>
    </div>
  );
}

export default App;
