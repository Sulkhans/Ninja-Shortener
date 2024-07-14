import Main from "./components/Main";
import logo from "./assets/logo.png";
import gmail from "./assets/gmail.png";
import Landing from "./components/Landing";

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
        <img src={gmail} />
        <p>kiruitshortener@gmail.com</p>
      </footer>
    </>
  );
};

export default App;
