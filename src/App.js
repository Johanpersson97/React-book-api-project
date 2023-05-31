import "./App.css";
import "./styles.css"
import "./webfontkit/stylesheet.css"
import ToggleBookshelf from "./toggleBookshelf";
import InputForm from "./formContainer";


// Här kör vi vår app och anrapar de olika komponenterna
function App() {
  return (
    <div>
      <header className="container-fluid mt-3 d-flex flex-lg-row flex-column align-items-center justify-content-lg-between">


        <div className="d-flex flex-lg-row flex-column">
          <img src={require("./book_icon_large.png")} id="bookIcon" alt="bookIcon" />
          <a href="" className="ms-2 text-white text-decoration-none">
            <h1 className="display-3 mb-0 _bold _ls-5">Bookster</h1>
            <p className="h5 ms-1 mt-0">Your online bookshelf</p>
          </a>
        </div>
        <ToggleBookshelf className="" />
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
