import Main from "./components/Main";
import Landing from "./components/Landing";
import logo from "./assets/logo.png";
import github from "./assets/github.png";

const App = () => {
  return (
    <>
      <header>
        <img src={logo} />
      </header>
      <main>
        <Landing />
        <Main />
      </main>
      <footer>
        <a
          href="https://github.com/SosoTaE/Ninja-Shortener-backend"
          target="_blank"
          className="github"
        >
          <img src={github} />
          /SosoTaE
        </a>
      </footer>
    </>
  );
};

export default App;
