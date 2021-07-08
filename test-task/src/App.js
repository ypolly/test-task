import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import SinglePage from "./Pages/SingePage";
import MainPage from "./Pages/MainPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={MainPage} />
        <Route path="/car" exact component={SinglePage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
