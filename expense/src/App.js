import Header from "./components/Header/index.js";
import Home from "./pages/home/home.js"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"

function App() {
  return (
    <Router>
       <Header/>
      <Switch>
          <Route path="/" exact component = {Home} />
      </Switch>
       <div className="Footer">Footer</div>
    </Router>
  );
}

export default App;
